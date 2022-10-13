import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.png";

const Footer = () => {
  const footerNavs = [
    {
      href: "/lectures",
      name: "مباحث",
    },
    {
      href: "/team",
      name: "درباره ما",
    },
    {
      href: "/about",
      name: "ارتباط با ما",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-1 mx-auto">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img src={Logo} className="w-32 sm:mx-auto" alt="logo" />
        <p className="leading-relaxed mt-2 text-[15px]">
          {" "}
          {window.config?.main.footerText}
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-gray-800 ml-3" key={idx}>
            <Link key={idx} to={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 items-center justify-center sm:flex">
        <div className="mt-10 sm:mt-0">
          2022 Statistical Inference All rights reserved - Morriex &copy;
        </div>
      </div>
      <style>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
