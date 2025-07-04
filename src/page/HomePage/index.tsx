import axios from "axios";
import { useState } from "react";
import "../../style/font.css";
import { FaHamburger } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

function HomePage() {
  const [foodItem, setFoodItem] = useState("");
  const [result, setResult] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("foodItem", foodItem);
  console.log("result", result);
  const handleResult = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodItem}`;
    const response = await axios.get(url);
    setResult(response?.data?.meals);
  };
  return (
    <div className="bg-amber-50">
      <div className="flex items-center just max-w-screen mx-auto px-3 py-1">
        <div className="relative flex items-center gap-6">
          <img src="/images/logo.png" alt="Logo.png" className="w-25 h-25" />
          <h3 className="dancing-script-bold text-3xl bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
            My Recipes
          </h3>
        </div>
        {isMenuOpen === false && (
          <div className="mx-auto">
            <ul className="flex items-center gap-10">
              <li className="dancing-script-medium text-2xl tracking-wider ">
                Home
              </li>
              {/* <li className="dancing-script-medium text-2xl tracking-wider">
                 Category
               </li> */}
              <li className="flex items-center border border-red-500 rounded-full px-3 py-1">
                <input
                  type="text"
                  placeholder="Search here!"
                  className="placeholder:text-xs placeholder:text-black focus:outline-none"
                  onChange={(e) => {
                    setFoodItem(e.target.value);
                  }}
                />
                <CiSearch
                  onClick={handleResult}
                  className="text-black hover:text-red-600"
                />
              </li>
            </ul>
          </div>
        )}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaHamburger
            className={`text-orange-600 text-xl ${
              isMenuOpen ? "hidden" : "block"
            }`}
          />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 right-0 bottom-0 z-50">
            <div className="p-5 bg-blue-50 rounded shadow-sm w-80 h-full bg-cover no-repeat">
              <div
                className="flex justify-end"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoIosClose size={"35px"} />
              </div>
              <div>
                <nav>
                  <ul className="space-y-4 text-left font-medium text-xl text-gray-900 tracking-wide">
                    <li>Home</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
