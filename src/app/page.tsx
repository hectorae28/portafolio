import {Certificates, Footer, Hero, Projects, Title} from "@/components";
import {data} from "@/js/data";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="flex flex-col items-center justify-center bg-[#fafafa]">
        <div className=" px-4 md:px-0 w-full max-w-screen-lg">
          <div id="portafolio">
            <Title >
            Portafolio (Proyectos Colaborativos)
            </Title>
            <Projects data={data.collabprojects}/>
            <Title >
            Portafolio (Proyectos Personales)
            </Title>
            <Projects data={data.personalProjects}/>
          </div>
          <Title >
          Certificados (cursos)
          </Title>
          <Certificates data={data.courses} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
