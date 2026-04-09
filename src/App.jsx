import React, { useState } from "react";
import Register from "./pages/Register";
import Profile  from "./pages/Profile"

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {/* <Register setUser={setUser} /> */}
      <Profile/>
      
      {user && (
        <div>
          <h3>User Data:</h3>
          <p>{user.name}</p>
          <p>{user.email}</p>
          {/* <p>{user.age}</p> */}
        </div>
      )}
    </>
  );
}

export default App;