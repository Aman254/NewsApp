import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" font-abc w-screen">
          <div className="bg-gray-800   items-center h-[110px]">
            <div className="flex justify-around m-6 ">
              <a
                href="https://www.nytimes.com/international/"
                target="_blank"
                className="mt-12"
              >
                <span className=" cursor-pointer  text-white">More News..</span>
              </a>
              <a
                href="https://github.com/Aman254/NewsApp"
                className="mt-12"
                target="_blank"
              >
                {" "}
                <span className=" cursor-pointer mt-12 text-white">
                  My Email / Github / Code
                </span>
              </a>
              <a
                href="https://twitter.com/amanmishra_7"
                className="mt-12"
                target="_blank"
              >
                <span className=" cursor-pointer mt-12 text-white">
                  Contact Me
                </span>
              </a>
              <a
                href="https://indianexpress.com/section/sports/"
                className="mt-12"
                target="_blank"
              >
                <span className=" cursor-pointer mt-12 text-white">
                  Sports News
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
