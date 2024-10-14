import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="hero flex items-center justify-center lg:h-96 h-72 py-10 px-4 lg:p-0">
      <div className="flex w-full max-w-screen-lg justify-between z-[1] h-full">
        <div className="lg:w-2/4 z-[3] my-auto">
          <h1 className="text-3xl text-white md:text-5xl font-['Ubuntu']">
            Hola! Soy <strong className="text-[#0af]">Hector Archer</strong> <br /> Web app <strong className="text-[#0af]">developer</strong>
          </h1>
          <div className="flex gap-4 mt-4">
            <Link href="https://www.linkedin.com/in/hector-archer-b6286621b/" className="social-link linkedin"
              target="_blank">
                <Image width={50} height={50} src="images/linkedin.svg" alt="linkedin" />
              </Link>
            <Link href="https://github.com/hectorae28" className="social-link github" 
              target="_blank">
                <Image width={50} height={50} src="images/github.svg" alt="github" />
              </Link>
            <Link href="https://twitter.com/archer_hector" className="social-link twitter"
              target="_blank">
                <Image width={50} height={50} src="images/twitter.svg" alt="twitter" />
              </Link>
            <Link href="https://www.instagram.com/hectorarcher/" className="social-link instagram"
              target="_blank">
                <Image width={50} height={50} src="images/instagram.svg" alt="instagram" />
              </Link>
          </div>

        </div>
        <div className=" hidden lg:block h-full w-1/3 relative overflow-hidden">
          <Image width={400} height={300} className="rounded cover absolute -top-24" src="images/hero-2.jpg" alt="imagen principal" />
        </div>
      </div>
  </section>
  )
}

export default Hero