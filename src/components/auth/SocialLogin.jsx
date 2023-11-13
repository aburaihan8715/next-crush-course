import { signIn } from "next-auth/react";
import React from "react";

const SocialLogin = () => {
  return (
    <button className="border w-full p-3 rounded" onClick={() => signIn("google")}>
      login with google
    </button>
  );
};

export default SocialLogin;
