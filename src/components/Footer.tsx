import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import PDF from "../assets/resume.pdf";

const Footer = () => {
  return (
    <div className="bg-sky-700 p-2">
      <ul className="flex w-full items-center justify-center gap-4">
        <li className="">
          <a
            className=" w-full text-gray-300"
            href="https://www.linkedin.com/in/mehrdad-karami-jourabi/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="">
          <a
            className=" w-full text-gray-300"
            href="https://github.com/mehrdad-kj"
            target="_blank"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="">
          <a
            className=" w-full text-gray-300"
            href="mailto:mehrdadk.jourabi@gmail.com"
            target="_blank"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="">
          <a className=" w-full text-gray-300" href={PDF} target="_blank">
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
