import axios from "axios";
export const sendOTP = async (email) => {
  const payload = {
    useremail: email,
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/send-otp`,
      payload
    );
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const sendVerifyMail = async (payload) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/reserve-a-table`,
      payload
    );
    return response;
  } catch (err) {
    console.log(err.message);
  }
};
