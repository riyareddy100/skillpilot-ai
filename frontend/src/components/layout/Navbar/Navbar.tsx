import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Learn", path: "/learn" },
  { label: "Search", path: "/search" },
  { label: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          SkillPilot AI
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "font-semibold text-indigo-600"
                      : "text-slate-600 hover:text-indigo-600"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="font-medium text-slate-600 hover:text-indigo-600"
          >
            Login
          </Link>

          <button className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;