import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 transition-all duration-500 z-50
      ${isScrolled ? "bg-white shadow-md text-black py-3" : "bg-transparent text-white py-5"}`}
    >
      <h1 className="font-bold">LOGO</h1>

      <div className="hidden md:flex gap-6">
        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-full">
        Login
      </button>
    </nav>
  );
}

export default Navbar;