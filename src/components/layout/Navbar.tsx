import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#5459AC] text-white font-semibold">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="hover:text-[#FBA834]">
            <div className="flex justify-center items-center">
              <img
                src={logo}
                className="h-12 w-12 md:h-16 md:w-16"
                alt="logo"
              />
              <span className="ml-2 text-lg md:text-xl font-bold font-serif">
                Librarian
              </span>
            </div>
          </NavLink>
          <div className="hidden md:flex gap-x-8 mr-10">
            <Link to="/books" className="hover:text-[#FBA834]">
              All Books
            </Link>
            <Link to="/borrow" className="hover:text-[#FBA834]">
              Borrow Summary
            </Link>
            <Link to="/create-book" className="hover:text-[#FBA834]">
              Add Book
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#3E4299] px-4 pb-4 space-y-2">
          <Link
            to="/books"
            className="block py-2 hover:text-[#FBA834]"
            onClick={() => setIsOpen(false)}
          >
            All Books
          </Link>
          <Link
            to="/borrow"
            className="block py-2 hover:text-[#FBA834]"
            onClick={() => setIsOpen(false)}
          >
            Borrow
          </Link>
          <Link
            to="/create-book"
            className="block py-2 hover:text-[#FBA834]"
            onClick={() => setIsOpen(false)}
          >
            Add Book
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
