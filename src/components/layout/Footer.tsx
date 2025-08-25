import { Link } from "react-router";
import { Separator } from "../ui/separator";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="" className="w-20 h-20" />
            <h2 className="text-lg font-semibold">Librarian</h2>
          </div>
          <p className="text-sm text-gray-400">
            Manage, borrow, and explore books with ease.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Books
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-xs text-gray-500">
          © 2025 Librarian. All rights reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/" className="hover:text-blue-400"></Link>
          <Link to="/" className="hover:text-sky-400"></Link>
          <Link to="/" className="hover:text-blue-500"></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
