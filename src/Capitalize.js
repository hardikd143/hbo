const Capitalize = (s) => {
  let arr = s.split("-");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str = arr.join(" ");
  return str;
};
export default Capitalize;
