"use client";
import React from "react";

const page = () => {
  const handleRegister = async (event) => {
    event.preventDefault();

    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
  };

  return (
    <div className="container rounded-xl mx-auto">
      <div className="flex items-center justify-center">
        <div>
          <div className="flex flex-col py-12 px-20 rounded-xl space-y-4 text-center bg-cyan-100 text-cyan-900">
            <h1 className="text-lg font-semibold">Sign Up</h1>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="flex flex-col">
                <label className="mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="rounded-xl p-2 border-gray-600 bg-gray-900 text-gray-100 focus:ring-violet-400 focus:border-violet-400 focus:ring-2"
                />
                <label className="mb-2 mt-4">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email address"
                  className="rounded-xl p-2 border-gray-600 bg-gray-900 text-gray-100 focus:ring-violet-400 focus:border-violet-400 focus:ring-2"
                />
                <label className="mt-4 mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  className="rounded-xl p-2 border-gray-600 bg-gray-900 text-gray-100 focus:ring-violet-400 focus:border-violet-400 focus:ring-2"
                />
              </div>
              <input
                className="px-8 py-3 space-x-2 font-semibold rounded bg-cyan-50 text-cyan-900"
                type="submit"
                value="Sign Up"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
