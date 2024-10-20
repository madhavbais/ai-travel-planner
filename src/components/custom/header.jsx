import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="p-3 shadow-sm flex items-center justify-between px-5">
      <img src="logo.svg" />
      <div>
        <Button>Sign-In</Button>
      </div>
    </div>
  );
}

export default Header;
