export const UploadCloudinaryfile = async (groupinfo) => {
  const formData = new FormData();
  formData.append("file", groupinfo.Profile);
  formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
  const cloudinaryApi = import.meta.env.VITE_CLOUDINARY_API;
  try {
    const res = await fetch(cloudinaryApi, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    console.log("error ", error);
  }
};
