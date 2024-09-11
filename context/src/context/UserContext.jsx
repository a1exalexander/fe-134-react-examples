import PropTypes from "prop-types";
import { useContext, createContext } from "react";
import { useState } from "react";
import { getUser } from "../httpService";
import { useEffect } from "react";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

const initialState = {
  name: null,
  id: null,
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ ...initialState });

  const fetchUser = async () => {
    const data = await getUser();
    setUser(data);
  };

  const clean = async () => {
    setUser({ ...initialState });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser, clean }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
