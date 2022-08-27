import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
//import uuid v4
import { v4 as uuid } from "uuid";
import { getUser } from "../API/api";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [auth, setauth] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUsers] = useState([]);

  const handleLogin = (email, pass) => {
    user?.map((el) => {
      if (el.email == email && el.password == pass) {
        setauth(true);
        setCookie("dat_firstname", el.firstname, { path: "/" });
        setCookie("dat_lastname", el.lastname, { path: "/" });
        setCookie("dat_userData", el.data, { path: "/" });
        setCookie("dat_email", el.email, { path: "/" });
        setCookie("dat_token", el.token, { path: "/" });
      }
    });
  };

  const handleLogout = () => {
    setauth(false);
  };

    const handleCreateAccount = (fname, lname, email, pass) => {
      const unique_id = uuid();
      const small_id = unique_id.slice(0, 8);
      axios
        .post(`https://dak-db.herokuapp.com/users`, {
          token: small_id,
          firstname: fname,
          lastname: lname,
          email: email,
          password: pass,
          data: [],
        })
        .then((res) => {
          setauth(true);
          setCookie("dat_firstname", fname, { path: "/" });
          setCookie("dat_lastname", lname, { path: "/" });
          setCookie("dat_userData", [], { path: "/" });
          setCookie("dat_email", email, { path: "/" });
          setCookie("dat_token", small_id, { path: "/" });
        })
        .catch((err) => console.log(err));
    };

  useEffect(() => {
    getUser().then((res) => setUsers(res));
  }, [auth]);

  const value = {
    auth,
    handleLogin,
    handleLogout,
    cookies,
    // handleCreateAccount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
