import axios from "axios";

// axios instance 생성
export const http = axios.create({
  baseURL: "http://www.localhost:8500", // 백엔드 주소
  withCredentials: true,
});

// axios 요청시 resquest에 대한 처리
