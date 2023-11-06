import React, { useState } from "react";

const Header = () => {
  const [bharat, setBharat] = useState("");
  const [sports, setSports] = useState("");
  const [world, setWorld] = useState("");
  const [us, setUS] = useState("");
  const [business, setBusiness] = useState("");

  function handleBharat() {
    setBharat("in");
  }
  function handleSports() {
    setSports("sports");
  }
  function handleWorld() {
    setWorld("world");
  }
  function handleUs() {
    setUS("us");
  }

  function handleBusiness() {
    setBusiness("business");
  }
  const [subscribe, setSubscribe] = useState("Subscribe");

  function handleSubscribe() {
    setSubscribe((prevValue) =>
      prevValue === "Subscribe" ? "Unsubscribe" : "Subscribe"
    );
  }

  return (
    <>
      <nav
        className="top-0 right-0 left-0 h-[80px]  flex justify-between items-center 
    py-0 px-[36px]  z-[3]  cursor-pointer w-screen"
      >
        <div className="logoDiv inline-block">
          <span className="tracking-[0px] text-2xl font-abc">
            NewsOf<strong>INDIA</strong>
          </span>
        </div>
        <div
          className="h-full flex-nowrap mr-auto m-0 p-0 relative ml-4 hidden md:flex items-center 
       font-bold font-mono "
        >
          <a
            href="#"
            className="flex items-center py-0 px-[12px] text-gray-800  gap-6 font-abc"
          >
            <span className="hover:text-black " onClick={handleBharat}>
              Bharat
            </span>
            <span className="hover:text-black" onClick={handleSports}>
              Sports
            </span>
            <span className="hover:text-black" onClick={handleWorld}>
              World
            </span>
            <span className="hover:text-black" onClick={handleUs}>
              USA
            </span>
            <span className="hover:text-black" onClick={handleBusiness}>
              Business
            </span>
            {/* <span className="hover:text-black">Climate</span> */}
          </a>
        </div>
        {/* 
      <div className="searchDiv rounded-[12px] py-2 px-[100px] ">
        <input
          type="text"
          placeholder="search.."
          name="srach"
          id="mainSearch"
          className=" rounded-lg  px-1 font-abc py-2 "
        />
      </div> */}

        <div className="font-abc">
          <button
            className=" bg-gray-700 text-white px-[12px] py-2 rounded-[12px] hover:bg-black 
          transition-all"
            onClick={handleSubscribe}
          >
            {subscribe}
          </button>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Header;
