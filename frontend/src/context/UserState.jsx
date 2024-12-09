import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
