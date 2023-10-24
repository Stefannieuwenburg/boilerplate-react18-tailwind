import { Fragment } from "react";
import StewImage from "../../assets/img/stew.jpg";
import NoodlesImage from "../../assets/img/noodles.jpg";
import CurryImage from "../../assets/img/curry.jpg";
const NinjaPage = () => {
    return (
      <Fragment>
        <div className="text-gray-600 font-body">
          <div>
            <nav>
              <div>
                <h1 className="font-bold uppercase p-4 border-b border-gray-200">
                  <a href="#/" className="text-sm md:text-xl">
                    Food Shop
                  </a>
                </h1>
              </div>
              <ul>
                <li className=" text-gray-700 font-bold">
                  <a href="#0">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
           {/* main page */}
          <main className="px-16 py-6 bg-gray-100">
            <div className="flex justify-center md:justify-end">
              <a href="#0" className="text-primary">
                Log in
              </a>
              <a href="#0" className="ml-4 text-primary">
                Sign up
              </a>
            </div>

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
                <div className="card">
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
                    <span>25 min</span>
                  </div>
                </div>
                <div className="card">
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
                    <span>25 min</span>
                  </div>
                </div>
                <div className="card">
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
                    <span>25 min</span>
                  </div>
                </div>
              </div>

              <h4 className="font-bold mt-14 pb-2 border-b border-gray-200">
                Most Popular
              </h4>
              <div className="mt-8">{/* cards go here */}</div>
            </div>

            <div className="flex justify-center">
              <div className="bg-secondary-100 text-secondary-200">
                Load more
              </div>
            </div>
          </main>
        </div>
      </Fragment>
    );
}

export default NinjaPage;