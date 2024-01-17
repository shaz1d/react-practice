import { useUserContext } from "../utils/context";

const UseContextGrandChlid = () => {
  const user = useUserContext();
  return (
    <div>
      <h2>grand CHlid</h2>
      <br />
      <br />
      <h1>{user.name}</h1>
    </div>
  );
};

export default UseContextGrandChlid;
