import React from "react";
import { FaBars } from "react-icons/fa";


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between  bg-slate-600  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className=" leading-relaxed inline-block mr-4 py-2 whitespace-nowrap no-underline  text-white  "
              href="#pablo"
            >
              flati
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i><FaBars /> </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none  lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3  flex none-underline items-center text-xs uppercase  leading-snug hover:opacity-75 no-underline text-white"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square  text-lg leading-lg  opacity-75 no-underline text-white"></i><span className="ml-2 ">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 flex items-center text-xs uppercase  leading-snug  hover:opacity-75 no-underline text-white"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="ml-2">Phone</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase  leading-snug  hover:opacity-75 no-underline text-white"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="ml-2">Gmail</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase  leading-snug  hover:opacity-75 no-underline text-white"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="ml-2">Work</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase  leading-snug  hover:opacity-75 no-underline text-white"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="ml-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase  leading-snug  no-underline text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg no-underline text-white opacity-75"></i><span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}