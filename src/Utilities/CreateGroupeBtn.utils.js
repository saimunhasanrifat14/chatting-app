import { velidationGroupinfo } from "./Veliadation.utils";

  export const handleCreateGroupe = async (event, groupinfo,setGroupInfo, setGroupError , setloading,) => {
    event.preventDefault();
    const error = velidationGroupinfo(groupinfo, setGroupError);
    if (!error) return;
    // next process

    const formData = new FormData();
    formData.append("file", groupinfo.Profile);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    const cloudinaryApi = import.meta.env.VITE_CLOUDINARY_API;

    setloading(true);
    try {
      const res = await fetch(cloudinaryApi, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      console.log(data.secure_url);
    } catch (error) {
      console.log("error ", error);
    } finally {
      setloading(false);
      setGroupInfo({
        Name: "",
        TagName: "",
        Profile: "",
      });
      setGroupError({});
      closeModal();
    }
  };