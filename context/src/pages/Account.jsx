import { UserCard } from "../components/UserCard";
import { useUser } from "../context/UserContext";

export const Account = () => {
  const { fetchUser } = useUser();
  return (
    <div>
      <h1>Account</h1>
      <button onClick={() => fetchUser()}>Update user data</button>
      <UserCard />
    </div>
  );
};
