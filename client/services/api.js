import Axios from "axios";

export const registerService = user => {
  return Axios.post("http://127.0.0.1:3000/api/user/", user)
    .then(response => {
      console.log(response);
    })
    .catch(response => {
      throw new Error(response);
    });
};

export const loginService = user => {
  return Axios.post("http://127.0.0.1:3000/api/auth/login", {
    username: user.email,
    password: user.password
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(response => {
      throw new Error(response);
    });
};
