import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

type Menu = {
  name: string;
  href: string;
};

const menu: Menu[] = [
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "SERVICES",
    href: "/services",
  },
  {
    name: "PORTFOLIO",
    href: "/portfolio",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  console.log("menuOpen", menuOpen);
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
    <header className="p-4 bg-blue-600 text-white text-sm font-medium flex justify-between items-center relative">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="md:flex gap-4 hidden">
          {menu.map((item) => (
            <li className="hover:text-blue-950 transition-all duration-100 ease-in-out cursor-pointer hover:underline underline-offset-8">
              <a href={item.href}>{item.name}</a>
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
            <div className="absolute right-5 top-9 bg-blue-400  mt-3 rounded p-3 px-5 flex flex-col gap-3 z-10">
              <ul>
                {menu.map((item) => (
                  <li className="hover:text-blue-950 transition-all duration-100 ease-in-out cursor-pointer hover:underline underline-offset-8 py-2 px-1">
                    <a href={item.href}>{item.name}</a>
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
