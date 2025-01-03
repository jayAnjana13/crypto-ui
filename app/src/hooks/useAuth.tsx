import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const { token, user, login, logout } = useContext(AuthContext);

  return { user, token, login, logout };
};

export default useAuth;
