export const velidationGroupinfo = (groupinfo, setGroupError) => {
  let error = {};
  for (let fild in groupinfo) {
    if (groupinfo[fild] === "") {
      error[`${fild}Error`] = `${fild} is required`;
    }
  }
  setGroupError(error);
  return Object.keys(error).length == 0;
};
