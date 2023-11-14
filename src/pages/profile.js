import { ChangeProfile } from "../Components/changeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      This is the <span style={{ color: "red" }}>profile</span> page and user
      is: {userName}
      <ChangeProfile />
    </div>
  );
};
