"use client";
import SocialLogin from "@/components/auth/SocialLogin";
import Divider from "@/ui/Divider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Register = () => {
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    if (!name || !email || !password) return alert("Name, email and password are required");
    const newUser = { name, email, password };
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (res.status === 201) {
        router.push("/dashboard/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl uppercase text-center font-semibold">Please Register</h1>
      <form onSubmit={submitHandler} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="name">Name</label>
          <input
            className="bg-inherit border px-4 py-3 w-full rounded focus:outline-none focus:ring ring-inherit"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
          />
        </div>

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
        <Link className="text-green-500" href={`/dashboard/login`}>
          login
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

export default Register;
