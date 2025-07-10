import { useState } from "react";
import "../../style/font.css";
import { GiHamburger } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { GetAllMeals, GetCategories } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loading from "../../lib/animation/loading.json";
import noData from "../../lib/animation/noData.json";

function HomePage() {
  const [foodItem, setFoodItem] = useState("");
  const [result, setResult] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  const fetchData = async () => {
    const data = await GetCategories(foodItem); // returns array
    const meals = Array.isArray(data) ? data : []; // safeguard
    setResult(meals);

    setNoMatch(foodItem.trim() !== "" && meals.length === 0);
    setFoodItem("");
  };

  const { data, isLoading: initialLoading } = useQuery({
    queryKey: [GetAllMeals],
    queryFn: () => GetAllMeals(),
  });
  return (
    <>
      {initialLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Lottie animationData={loading} loop autoplay className="w-40 h-40" />
        </div>
      ) : (
        <div className="bg-amber-50 relative overflow-hidden">
          {/* Top header */}
          <div className="flex items-center justify-between max-w-screen px-4 py-2">
            {/* Logo and title */}
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-20 h-20 hidden min-[480px]:block"
              />
              <h3 className="hidden sm:block dancing-script-bold text-3xl bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                My Recipes
              </h3>
            </div>
            <div className="flex items-center gap-7">
              {/* Main menu (hidden when sidebar open) */}
              {!isMenuOpen && (
                <div className="mx-auto">
                  <ul className="flex items-center">
                    {/* <li className="dancing-script-medium text-2xl tracking-wider">
                    Home
                  </li> */}
                    <li className="flex items-center border border-red-500 rounded-full px-3 py-1 w-60">
                      <input
                        type="text"
                        placeholder="Search here!"
                        className="placeholder:text-xs placeholder:text-black focus:outline-none bg-transparent w-50"
                        value={foodItem}
                        onChange={(e) => setFoodItem(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault(); // prevent form submit if inside a form
                            fetchData();
                          }
                        }}
                      />
                      <CiSearch
                        onClick={fetchData}
                        className="text-black hover:text-red-600 cursor-pointer"
                      />
                    </li>
                  </ul>
                </div>
              )}

              {/* Hamburger toggle */}
              <button onClick={() => setIsMenuOpen(true)}>
                <GiHamburger
                  className={`text-orange-600 text-2xl ${
                    isMenuOpen ? "sm:hidden" : "block sm:hidden"
                  }`}
                />
              </button>
            </div>
          </div>
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-40 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-80 z-50 bg-blue-50 p-5 shadow-lg rounded-l
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
          >
            <div className="flex justify-end">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="mx-auto w-20 h-20"
              />
              <button onClick={() => setIsMenuOpen(false)}>
                <IoIosClose size={"35px"} />
              </button>
            </div>

            <nav className="mt-10">
              <ul className="space-y-4 text-left text-gray-900 tracking-wide">
                <li className="flex items-center border border-red-500 rounded-full px-3 py-1 w-60">
                  <input
                    type="text"
                    placeholder="Search here!"
                    className="placeholder:text-xs placeholder:text-black focus:outline-none bg-transparent w-50"
                    value={foodItem}
                    onChange={(e) => setFoodItem(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault(); // prevent form submit if inside a form
                        fetchData();
                      }
                    }}
                  />
                  <CiSearch
                    onClick={fetchData}
                    className="text-black hover:text-red-600 cursor-pointer"
                  />
                </li>

                {/* <li className="hover:text-red-600 cursor-pointer dancing-script-medium text-2xl tracking-wider">
                Home
              </li> */}
              </ul>
            </nav>
          </div>
          {noMatch ? (
            // Show Lottie animation if no match found
            <div className="flex flex-col items-center justify-center h-screen">
              <Lottie
                animationData={noData}
                loop
                autoplay
                className="w-40 h-40"
              />
              <p className="text-red-600 font-semibold mt-4">
                No matching data found
              </p>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto pb-16">
              {result?.map((meals: any) => (
                <div className="grid grid-cols-1 sm:grid-cols-2 mb-13">
                  <div>
                    <img
                      src={meals?.strMealThumb}
                      alt={meals?.strMeal}
                      className="w-64 mx-auto rounded-xl mt-6"
                    />
                  </div>

                  <div className="flex flex-col text-center">
                    <span className="pb-5 pt-5 text-lg font-bold">
                      {meals?.strMeal}-({meals?.strArea})
                    </span>
                    <p className="text-justify tracking-widest poppins-regular px-5">
                      {meals?.strInstructions}
                    </p>
                    <a href={meals?.strYoutube} className="text-sm py-6 px-5">
                      Watch:{" "}
                      <span className="text-blue-500">{meals?.strYoutube}</span>
                    </a>
                  </div>
                </div>
              ))}
              {result.length === 0 && !noMatch && (
                <>
                  {data?.map((fullMeals: any) => (
                    <div className="grid grid-cols-1 sm:grid-cols-2 mb-16">
                      <div>
                        <img
                          src={fullMeals?.strMealThumb}
                          alt={fullMeals?.strMeal}
                          className="w-64 mx-auto rounded-xl mt-14"
                        />
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="pb-5 pt-5 text-lg font-bold">
                          {fullMeals?.strMeal}-({fullMeals?.strArea})
                        </span>
                        <p className="text-justify tracking-widest poppins-regular px-5">
                          {fullMeals?.strInstructions}
                        </p>
                        <a
                          href={fullMeals?.strYoutube}
                          className="text-sm py-6 px-5"
                        >
                          Watch:{" "}
                          <span className="text-blue-500 ">
                            {fullMeals?.strYoutube}
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HomePage;
