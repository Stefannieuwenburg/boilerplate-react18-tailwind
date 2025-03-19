import { Fragment } from "react";
import StewImage from "assets/img/stew.jpg";
import NoodlesImage from "assets/img/noodles.jpg";
import CurryImage from "assets/img/curry.jpg";
import React, { useState } from "react";

  
  const FoodPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      {/* Body */}
      <body className="text-gray-600 font-body">
        <div className="grid md:grid-cols-3">
          <div className="md:flex md:justify-end md:col-span-1">
            {/* Navbar */}
            <nav className="text-right">
              <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase p-4 border-b border-gray-200">
                  <a href="#/" className="text-sm md:text-xl text-green-500">
                    Food Shop
                  </a>
                </h1>
               
                {/* burger menu */}
                <div className="px-4 cursor-pointer " onClick={toggleMenu}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
              </div>
              {/* items list nav bar */}
               {isOpen && (
              <ul className="text-sm mt-6 " >
                <li className=" text-gray-700 font-bold py-1">
                  <a
                    href="#0"
                    className="px-4 flex justify-end border-r-4 border-lime-400"
                  >
                    <span>Home</span>
                    <svg
                      className="w-5 ml-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a href="#0" className="px-4 flex justify-end border-r-4">
                    <span>About</span>
                    <svg
                      className="w-5 ml-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a href="#0" className="px-4 flex justify-end border-r-4">
                    <span>Contact</span>
                    <svg
                      className="w-5 ml-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                </li>
                </ul>
                )}
            </nav>
          </div> 
          {/* main page */}
          <main className="px-16 py-6 bg-gray-50 md:col-span-2">
            <div className="flex justify-center md:justify-end">
              <a
                href="#0"
                className="btn border-green-500 border-2 text-green-500 md:border-2 hover:bg-gray-300"
              >
                Log in
              </a>
              <a
                href="#0"
                className="btn border-green-500 border-2 ml-2 text-green-500 md:border-2 hover:bg-gray-300"
              >
                Sign up
              </a>
            </div>
            {/* Header */}
            <header>
              <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
              <h3 className="text-gray-700 text-2xl font-semibold">
                For Food shop
              </h3>
            </header>
            <div>
              <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
                Latest Recipes
              </h4>
              <div className="mt-8 grid md:grid-cols-2  lg:grid-cols-3 gap-4">
                {/* cards go here */}
                <div className="card hover:shadow-2xl">
                  <img
                    src={StewImage}
                    alt="stew"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">5 Bean Chili Stew</span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by marie
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      class="inline-block w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>25 min</span>
                  </div>
                </div>
                <div className="card hover:shadow-2xl">
                  <img
                    src={NoodlesImage}
                    alt="Noodles"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Noodles</span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by jennie
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      class="inline-block w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>25 min</span>
                  </div>
                </div>
                <div className="card hover:shadow-2xl">
                  <img
                    src={CurryImage}
                    alt="Curry"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Curry</span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by jannet
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      class="inline-block w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>25 min</span>
                  </div>
                </div>
              </div>
              <h4 className="font-bold mt-14 pb-2 border-b border-gray-200">
                Most Popular
              </h4>

              {/* Extra cards component */}
              <div className="mt-8"><div className="card hover:shadow-2xl">
                  <img
                    src={NoodlesImage}
                    alt="Noodles"
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="m-4">
                    <span className="font-bold">Noodles</span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by jennie
                    </span>
                  </div>
                  <div className="badge">
                    <svg
                      class="inline-block w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>25 min</span>
                  </div>
                </div></div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner">
                Load more
              </div>
            </div>
          </main>
        </div>
      </body>
    </Fragment>
  );
};

export default FoodPage;
