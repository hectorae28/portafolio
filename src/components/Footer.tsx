import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0af] flex items-center justify-center" id="contacts">
      <div className="max-w-screen-lg flex flex-col md:flex-row justify-between items-center w-full p-10">
        <p className="text-white text-xl md:text-2xl">
          Hecho por Hector Archer.
          <br />
          Contáctame
        </p>
        <div className="flex gap-4 my-8">
          <Link
            href="https://www.linkedin.com/in/hector-archer-b6286621b/"
            className="social-link linkedin"
            target="_blank"
          >
            <Image
              width={50}
              height={50}
              src={"images/linkedin.svg"}
              alt={"linkedin"}
            />
          </Link>
          <Link
            href="https://github.com/hectorae28"
            className="social-link github"
            target="_blank"
          >
            <Image
              width={50}
              height={50}
              src={"images/github.svg"}
              alt={"github"}
            />
          </Link>
          <Link
            href="https://twitter.com/archer_hector"
            className="social-link twitter"
            target="_blank"
          >
            <Image
              width={50}
              height={50}
              src={"images/twitter.svg"}
              alt={"twitter"}
            />
          </Link>
          <Link
            href="https://www.instagram.com/hectorarcher/"
            className="social-link instagram"
            target="_blank"
          >
            <Image
              width={50}
              height={50}
              src={"images/instagram.svg"}
              alt={"instagram"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
