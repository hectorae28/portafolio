/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface ProjectInterface {
  title: string;
  course: string;
  deploy?: string;
  repo?: string;
  description: string;
  img_src: string;
  img_alt: string;
}

const Projects = ({ data }: { data: ProjectInterface[] }) => {
  return (
    <section className="flex  flex-col md:flex-row md:flex-wrap md:justify-between gap-4">
      {data.map((item, index) => (
        <div
          className="p-5 border-solid border-[1px] mb-4 rounded-lg bg-white flex flex-col md:flex-row justify-between drop-shadow-xl gap-4 relative md:w-[49%]"
          key={index}
        >
          <div className="md:w-1/2  flex flex-col justify-center gap-72 md:gap-0 md:justify-between">
            <div className="flex flex-col gap-2 md:gap-5">
              <h3 className="text-3xl font-bold font-['Ubuntu']">
                {item.title}
              </h3>
              <h6 className=" text-sm text-[#999]">{item.course}</h6>
              <p>{item.description}</p>
            </div>
            <div className="flex justify-between">
              <div className=" flex gap-4">
                {item.deploy && (
                  <Link
                    className="text-[#999]"
                    href={item.deploy}
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 "
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                        />
                      </svg>
                    </button>
                  </Link>
                )}
                {item.repo && (
                  <Link
                    className="text-[#999]"
                    href={item.repo}
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 me-2 mb- "
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Link>
                )}
              </div>
              <h6 className=" text-sm self-center md:hidden">{item.course}</h6>
            </div>
          </div>
          <div
            className="w-full h-60 object-contain md:w-1/2 absolute md:relative md:bottom-0 md:right-0 bottom-24 right-0 flex items-center justify-center"
          
          >
            <img
              className="w-[90%] md:w-full h-full object-contain"
              src={item.img_src}
              alt={item.img_alt}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
