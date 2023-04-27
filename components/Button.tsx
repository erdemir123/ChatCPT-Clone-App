import { signOut } from "next-auth/react";
import React from "react";

function Button() {
  return (
    <div>
      <button onClick={() => signOut()}>singOut</button>
    </div>
  );
}

export default Button;
