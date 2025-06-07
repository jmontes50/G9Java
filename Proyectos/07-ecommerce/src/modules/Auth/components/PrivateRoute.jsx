import useAuthStore from "../../../stores/useAuthStore"
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isLogged } = useAuthStore();

  return (
    // si esta logueado dibuja/renderiza el contenido que llega y si no redirige a login
    <>
      { isLogged ? props.children : <Navigate to='/login' />}
    </>
  )
}

export default PrivateRoute
