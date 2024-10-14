/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface ICertificate {
  img_src: string;
  title: string;
  description: string;
  url: string;
  pdf: string;
}
const Certificates = ({ data }: { data: ICertificate[] }) => {
  return (
    <section className="flex  flex-col md:flex-row md:flex-wrap md:justify-between gap-4" id="Certificates">
      {data.map((item, index) => (
        <div
          className=" border-solid border-[1px] mb-4 rounded-lg bg-white flex flex-col  justify-between drop-shadow-xl gap-4 relative md:w-[49%]"
          key={index}
        >
          <img className="rounded-t-lg" src={item.img_src} alt={item.title}  />
          <div className="text-center relative -mt-16 md:-mt-24 bg-white p-6 rounded-b-lg">
            <Link href={item.pdf}>
              <button
                type="button"
                className="text-[#0af] border-solid border-[1px] border-[#0af]  w-full p-4 rounded-lg"
              >
                Ver Certificado
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Certificates;
