import { createContext, useContext } from "react";
import { User } from "../topics/UseContext";

export const UserContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("must wrap with context provider");
  }

  return user;
};
