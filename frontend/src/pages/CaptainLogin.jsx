import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-6 flex flex-col justify-between h-screen">
      <div>
        <img className="w-20 mb-10" src="https://pngimg.com/d/uber_PNG24.png" />
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <p className="text-xl mt-3">
          Join the fleet?
          <Link to="/captainsignup" className="text-blue-700 font-bold ">
            Register as Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/userlogin"
          className="inline-block text-center  w-full px-4 py-2 font-bold bg-red-700 text-white rounded-md mt-7 text-2xl"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
