/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="bg-background border-gray-200 w-full px-4 lg:h-16 z-50">
        <div className="flex flex-wrap justify-center lg:justify-between items-center mx-auto max-w-screen-lg h-full z-10">
          <Link href="/" className="flex items-center h-full">
            <img
              src="images/logo.png"
              className="mr-3 h-full"
              alt="Logo"
            />
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="#portafolio"
                  className="block py-2 pr-4 pl-3 text-white rounded "
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  href="#Certificates"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 "
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  href="#contacts"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 "
                >
                  Trabajemos Juntos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
