import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } =
    useAuth0();
  const [myUser, setMyUser] = useState(null);
  useEffect(() => {
    console.log(isAuthenticated, isLoading, user);
  }, [isAuthenticated]);
  return (
    <UserContext.Provider
      value={{ isAuthenticated, isLoading, loginWithRedirect, logout, myUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
