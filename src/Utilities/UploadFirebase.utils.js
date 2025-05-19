import { getDatabase, push, ref, set } from "firebase/database";
export const uploadFirebaseData = async (database = "", data) => {
  const db = getDatabase();
  try {
    const upload = await set(push(ref(db, database)), data);
  } catch (error) {
    throw new Error("Firebase Error");
  }
};
