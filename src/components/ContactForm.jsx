"use client";

import React from "react";

const ContactForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Not implement yet!!");
  };
  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="name">Name</label>
        <input
          className="bg-[#111] border px-4 py-3 w-full rounded focus:outline-none focus:ring ring-gray-700"
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email">Email</label>
        <input
          className="bg-[#111] border px-4 py-3 w-full rounded focus:outline-none focus:ring ring-gray-700"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message">Message</label>
        <textarea
          className="bg-[#111] border px-4 py-3 w-full rounded focus:outline-none focus:ring ring-gray-700"
          placeholder="Enter message"
          name="message"
          id="message"
          rows="6"
        ></textarea>
      </div>

      <div>
        <button className="capitalize px-6 py-2 bg-green-600 rounded" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
