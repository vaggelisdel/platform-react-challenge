import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

function assertData() {
  return axios.create({
    timeout: 0,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}

const Data = assertData();

Data.interceptors.response.use(
  (response:any) => {
    return response;
  },
  (error:any) => {
    return Promise.reject(error);
  }
);

export { Data };
