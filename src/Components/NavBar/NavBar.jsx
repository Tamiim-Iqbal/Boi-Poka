import { NavLink } from "react-router-dom";

const NavBar = () => {

    const links = <>
        <li className="mb-2"><NavLink to="/">Home</NavLink></li>
        <li className="mb-2"><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li><NavLink>Pages to Read</NavLink></li>
        
        
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        {links}
      </ul>
    </div>
    <a className="text-3xl font-semibold">Boi Poka</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal px-1 gap-9">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn">Sign In</a>
    <a className="btn">Sign Up</a>
  </div>
</div>
    );
};

export default NavBar;