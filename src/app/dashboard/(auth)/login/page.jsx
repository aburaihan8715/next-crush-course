"use client";
import SocialLogin from "@/components/auth/SocialLogin";
import Divider from "@/ui/Divider";
import GlobalLoading from "@/ui/GlobalLoading";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    if (!email || !password) return alert("Email and password are required!!");
    signIn("credentials", { email, password });
  };

  if (session.status === "loading") return <GlobalLoading />;
  if (session.status === "authenticated") router?.push("/dashboard");

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl uppercase text-center font-semibold">Please login</h1>
      <form onSubmit={submitHandler} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="email">Email</label>
          <input
            className="bg-inherit border px-4 py-3 w-full rounded focus:outline-none focus:ring ring-inherit"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password">Password</label>
          <input
            className="bg-inherit border px-4 py-3 w-full rounded focus:outline-none focus:ring ring-inherit"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </div>

        <div>
          <button className="capitalize px-4 py-3 bg-green-600 rounded w-full border" type="submit">
            submit
          </button>
        </div>
      </form>
      <div className="px-4 py-3 rounded border mt-4 text-center space-x-1">
        <span>Already user?</span>
        <Link className="text-green-500" href={`/dashboard/register`}>
          register
        </Link>
      </div>

      <div>
        <Divider />
      </div>

      <div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
