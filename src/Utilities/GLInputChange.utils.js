export const handleInputChange = (event, setGroupInfo, setGroupError) => {
  const { name, value, files } = event.target;
  const newValue = name === "Profile" ? files[0] : value;
  // groupinfo update
  setGroupInfo((prevState) => ({
    ...prevState,
    [name]: newValue,
  }));
  // remove error message
  if (value.trim() !== "") {
    setGroupError((prevState) => ({
      ...prevState,
      [`${name}Error`]: "",
    }));
  }
};
