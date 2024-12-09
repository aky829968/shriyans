import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = () => {
  const ctx = useContext(UserContext);
  console.log(ctx);
  return (
    <div className="">
      <div className="bg-red-500 bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-cover h-screen w-full flex flex-col justify-between ">
        <img
          className="w-20 mt-10 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <div className=" bg-white px-4 py-4">
          <h1 className="text-3xl font-bold">Get Started With Us.</h1>
          <Link
            to="/userlogin"
            className=" inline-block text-center w-full text-2xl bg-black text-white px-4 py-3 rounded-md mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
