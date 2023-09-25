import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline " : ""
            }
            >
          <li className="font-bold text-lg"><a>Home</a></li>
            </NavLink>
            <NavLink
            to="/donations"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline " : ""
            }
            >
            <li className="font-bold text-lg"><a>Donations</a></li>
            </NavLink>
            <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline " : ""
            }
            >
            <li className="font-bold text-lg"><a>Statistics</a></li>
            </NavLink>
      
    </>
    return (
        <div className="max-w-screen-xl m-auto">
            <nav>
            <div className="navbar justify-between bg-base-100 p-5">
  <div className="">
    <div className="dropdown">
    <label tabIndex={0} className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
      {
        links
      }
      </ul>
    </div>
    <img src="/logo/Logo.png" alt="" className="ml-[130px] md:ml-[470px] lg:ml-0" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {links}
    </ul>
  </div>
  
</div>
            </nav>
            
        </div>
    );
};

export default Header;