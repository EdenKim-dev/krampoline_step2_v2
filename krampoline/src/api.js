import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getTest = async (props) => {
  return await instance.get(`/test`);
};

export { instance, getTest };
