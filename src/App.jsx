import React from "react";
import UserProfile from "./component/UserProfile";
import { UserProvider } from "./UserContext";
import UpdateUser from "./component/UpdateUser";

function App() {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
}

export default App;
