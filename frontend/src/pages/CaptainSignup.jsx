import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setcaptainData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setcaptainData({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    });

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };
  return (
    <div className="p-6 flex flex-col justify-between h-screen">
      <div>
        <img className="w-20 " src="https://pngimg.com/d/uber_PNG24.png" />
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl font-bold mt-4 ">Enter your name</h1>
          <div className="flex gap-4 mt-4">
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className=" text-white px-4 w-1/2  py-2 border rounded text-xl placeholder:text-lg bg-slate-700 "
              type="text"
              placeholder="FirstName"
              required
            />
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className=" text-white px-4 w-1/2  py-2 border rounded text-xl placeholder:text-lg bg-slate-700 "
              type="text"
              placeholder="Last Name"
            />
          </div>
          <h1 className="text-xl font-bold mt-2 ">Enter your email</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" text-white px-4 w-full py-2 border rounded text-xl placeholder:text-lg bg-slate-700 mt-3"
            type="email"
            placeholder="email@example.com"
            required
          />
          <h1 className="text-xl mt-2 font-bold ">Enter your password</h1>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" text-white px-4 w-full py-2 border text-xl rounded placeholder:text-lg bg-slate-700 mt-3"
            type="password"
            placeholder="password"
            required
          />
          <button className="w-full px-4 py-2 font-bold bg-black text-white rounded-md mt-7 text-2xl">
            Register
          </button>
        </form>
        <p className="text-xl mt-3">
          Already Have a Account?
          <Link to="/captainlogin" className="text-blue-700 font-bold ">
            Login Here
          </Link>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CaptainSignup;
