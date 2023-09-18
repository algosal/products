import axios from "axios";

let login = async (user) => {
  let login_url =
    "https://89t1wv47u9.execute-api.us-east-1.amazonaws.com/v1/admin";
  return await axios
    .put(login_url, user)
    .then((d) => {
      return d.data.statusCode;
    })
    .catch((e) => e);
};

export default login;
