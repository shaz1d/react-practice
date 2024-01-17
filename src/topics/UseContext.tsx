import { useState } from "react";
import UseContextChild from "../components/useContextChild";
import { UserContext } from "../utils/context";

export type User = {
  isActive: boolean;
  name: string;
};
const UseContext = () => {
  const [user] = useState<User>({
    isActive: true,
    name: "John",
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        <UseContextChild />
      </UserContext.Provider>
    </div>
  );
};

export default UseContext;
