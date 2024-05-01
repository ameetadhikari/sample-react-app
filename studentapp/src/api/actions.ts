import axios, { AxiosError } from "axios";

const API_URL = "https://automatic-space-garbanzo-rx4grv5qwjvf59q4-3000.app.github.dev/api";

export const getStudentData = async (student: string): Promise<StudentData> => {
  return new Promise<StudentData>((resolve, reject) => {
    axios
      .get(`${API_URL}/student/${student}`)
      .then((res) => {
        resolve({
          student: student,
          CN6000: res.data.CN6000,
          CN6035: res.data.CN6035,
          CN6008: res.data.CN6008,
          CN6005: res.data.CN6005,
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("student not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};
