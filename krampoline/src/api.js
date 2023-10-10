import axios from "axios";
// 자신이 .env에서 설정한 주소
const staticServerUri = process.env.REACT_APP_PATH || "";

const instance = axios.create({
  // 기본 URL 등에 꼭 URL 추가해 주세요.
  baseURL:
    staticServerUri + "/api", // "http://localhost:8080/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getTest = async (props) => {
  return await instance.get(`/test`);
};

export { instance, getTest };
