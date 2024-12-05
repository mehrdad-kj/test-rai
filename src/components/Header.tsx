import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

type Menu = {
  name: string;
};

const menu: Menu[] = [
  {
    name: "ABOUT",
  },
  {
    name: "SERVICES",
  },
  {
    name: "PORTFOLIO",
  },
  {
    name: "CONTACT",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <header className="p-4 bg-sky-950 text-white text-sm  flex justify-between items-center relative">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="md:flex gap-4 hidden">
          {menu.map((item) => (
            <li
              key={item.name}
              className="hover:text-sky-400 transition-all duration-100 ease-in-out cursor-pointer hover:underline underline-offset-8 font-medium"
            >
              <Link to={item.name} smooth={true} duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden" ref={dropDownRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden block"
          >
            <MenuIcon />
          </button>
          {menuOpen ? (
            <div className="absolute right-5 top-9 bg-sky-900 opacity-75  mt-3 rounded p-3 px-5 flex flex-col gap-3 z-10">
              <ul>
                {menu.map((item) => (
                  <li
                    key={item.name}
                    className="hover:text-sky-400 transition-all duration-100 ease-in-out cursor-pointer hover:underline underline-offset-8 py-2 px-1 font-medium"
                  >
                    <Link to={item.name} smooth={true} duration={500}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
