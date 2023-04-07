import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white my-4 dark:bg-dark">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/arkarWebDev"
            className="flex items-center mb-4 sm:mb-0"
          >
            <h1 className="text-4xl font-bold dark:text-white">
              YUMMY<span className="text-2xl">.so</span>
            </h1>
          </a>
          <ul className="flex items-start md:items-center  mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white flex-col md:flex-row space-y-4 md:space-y-0">
            <li>
              <a href="/" className=" hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className=" hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="https://github.com/arkarWebDev" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
