import { jwtDecode } from "jwt-decode";

const tokenIsValid = (token) => {
  try {
    // jwtDecode permite obtener la información del payload
    const decode = jwtDecode(token);
    const now = Date.now() / 1000;
    // console.log(decode)
    // console.log(now)
    return now < decode.exp; // V o F
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default tokenIsValid;
