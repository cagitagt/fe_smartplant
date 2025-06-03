import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full h-screen bg-slate-100 font-poppins bg-whiteMain">
        <div className="w-[700px] flex items-center h-[400px] rounded-4xl bg-green-950 absolute px-10 py-5 text-white">
          <div className="w-[500px]">
            <h1 className="text-4xl font-bold">
              {" "}
              With our{" "}
              <span className="text-5xl font-extrabold font-overlock">
                {" "}
                Technology{" "}
              </span>
              , you can mantain your plants.
            </h1>
            <div className="flex gap-4 cursor-pointer mt-9">
              <a
                href="login.html"
                className="px-3 py-2 font-bold transition rounded-2xl bg-slate-50 text-greenMain hover:scale-105"
              >
                Sign In
              </a>
              <a
                href="regist.html"
                className="px-3 py-2 font-bold transition rounded-2xl hover:scale-105 bg-slate-50 text-greenMain"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-20 w-[450px]">
          <img src="/img/5.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
