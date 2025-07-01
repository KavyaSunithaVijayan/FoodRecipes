import "../../style/font.css";
import { FaHamburger } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-amber-50">
      <div className="flex items-center just max-w-screen mx-auto px-3 py-1">
        <div className="flex items-center gap-6">
          <img src="/images/logo.png" alt="Logo.png" className="w-25 h-25" />
          <h3 className="dancing-script-bold text-3xl bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
            My Recipes
          </h3>
        </div>
        <div className="mx-auto">
          <ul className="flex items-center justify-between gap-10">
            <li className="dancing-script-medium text-2xl tracking-wider ">
              Home
            </li>
            <li className="dancing-script-medium text-2xl tracking-wider">
              Category
            </li>
          </ul>
        </div>
        <FaHamburger className="text-orange-600 text-xl" />
      </div>
    </div>
  );
}

export default Header;
