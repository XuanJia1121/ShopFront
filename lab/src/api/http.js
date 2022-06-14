import axios from 'axios';

//商品
// const shopRequest = axios.create({
//   baseURL: 'http://localhost:8087/lab/shop/',
//   headers: { 'Content-Type': 'application/json' },
// });

//使用者
const loginRequest = axios.create({
  baseURL: 'http://localhost:8087/lab/auth',
  headers: { 'Content-Type': 'multipart/form-data' },
});


//使用者相關的api
export const loginApi = (data) => {
    return loginRequest.post('/login.action',{
      username:data.username,
      password:data.password
    });
};

export const loginOutApi = (data) => {
  return loginRequest.post('/logout.action',{
    username:data.username
  });
}

// export const googleLoginApi = () => {
//   return axios.get('http://localhost:8087/lab/oauth2/authorization/google');
// };