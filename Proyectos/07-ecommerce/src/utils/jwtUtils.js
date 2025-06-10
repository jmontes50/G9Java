import { jwtDecode } from "jwt-decode";

const tokenIsValid = (token) => {
  try {
    // jwtDecode permite obtener la información del payload
    const decode = jwtDecode(token);
    console.log(decode)
  } catch (error) {
    console.log(error)
  }
}

export default tokenIsValid;
