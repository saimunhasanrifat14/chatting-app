import { getAuth } from "firebase/auth/cordova";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const FetchData = (dbName) => {
  const [dataList, setdataList] = useState({
    data: {},
    error: "",
    loading: false,
  });
  const db = getDatabase();
  const auth = getAuth();
  useEffect(() => {
    setdataList({ ...dataList, loading: true });
    const Fetch = () => {
      const DataRef = ref(db, `${dbName}/`);
      onValue(DataRef, (snapshot) => {
        let data = [];
        snapshot.forEach((item) => {
          if (auth.currentUser.uid === item.val().adminuid) {
            data.push({ ...item.val(), [`${dbName}key`]: item.key });
          }
        });
        setdataList({ ...dataList, loading: false });
        setdataList({ ...dataList, data: data });
      });
    };
    Fetch();
  }, []);
  console.log("data form datalist ", dataList);
  return dataList;
};

export default FetchData;
