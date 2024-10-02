import { useState, useEffect } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all py-4 border ${scrollActive}`}>
      <div className="conatiner px-5 mx-auto">
        <div className="navbar-box flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold">Ngoding.</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="gap-3 flex items-center">
              <i className="fa-solid fa-house md:hidden"></i>
              <a className="font-medium opacity-75">Beranda</a>
            </li>
            <li className="gap-3 flex items-center">
              <i className="fa-solid fa-circle-info md:hidden"></i>
              <a className="font-medium opacity-75">Tenntang Kami</a>
            </li>
            <li className="gap-3 flex items-center">
              <i className="fa-solid fa-gear md:hidden"></i>
              <a className="font-medium opacity-75">Layanan</a>
            </li>
            <li className="gap-3 flex items-center">
              <i className="fa-solid fa-image md:hidden"></i>
              <a className="font-medium opacity-75">Proyek</a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <a href="#" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">
              Social Media
            </a>
            <i className="fa-solid fa-bars text-3xl block md:hidden" onClick={handleClick}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
