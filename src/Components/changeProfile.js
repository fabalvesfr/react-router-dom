import { useState, useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const [newUserName, setNewUserName] = useState("");

  const { setUserName } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => setNewUserName(event.target.value)}
        type="text"
      />
      <button onClick={() => setUserName(newUserName)}>CHANGE USER NAME</button>
    </div>
  );
};
