import axios from 'axios';

//商品
const shopRequest = axios.create({
  baseURL: 'http://localhost:8087/lab/api/shop/',
  headers: { 'Content-Type': 'application/json' },
});

//使用者
const loginRequest = axios.create({
  baseURL: 'http://localhost:8087/lab/',
  headers: { 'Content-Type': 'multipart/form-data' },
});

//商品相關的api
//查全部
export const allProduct = shopRequest.post('/getAllPro');
//新增商品
export const addProduct = (data) => {shopRequest.post('/insertPro',data)};

//使用者相關的api
export const userLogin = (data) => {
  return loginRequest.post('/login',{
    username:data.username,
    password:data.password
  });
};
