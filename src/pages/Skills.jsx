import React from "react";
import Footer from "../components/common/Footer";
import GithubHistory from "../assets/himanshumaharshigithub.svg"

const Skills = () => {
  return (
    <>
      <div className="text-white px-4 md:px-8 mt-[8rem] z-10 lg:px-10 pb-8">
        <div className="space-y-8 max-w-7xl mx-auto poppins-500 opacity-100 transform-none">
          <div className="mx-8 lg:mx-10">
            <h1 className="text-3xl font-bold tracking-widest sm:text-4xl poppins-black-900">
              Skills
            </h1>
            <p className="mt-4 text-zinc-400 font-ubuntu tracking-tighter pb-6 border-b border-white/20"></p>

            {/* skills&tools */}
            <h1 class="text-gray-300 font-semibold flex items-center text-2xl mt-1 lg:mt-10 lg:w-3/5 xl:w-2/3 poppins-semibold-600">
              Skills &amp; Tools<div class="h-1 w-40 bg-gray-600 ml-5"></div>
            </h1>

            <div class="flex flex-col">
              <section class="skills mt-5 font-Poppins text-white">
                <h2 class="  pb-1 text-[#FF0090] text-2xl">Languages</h2>
                <div class="">
                  <img
                    src="https://skillicons.dev/icons?i=c,cpp,js,go,java,html,css"
                    width="800"
                    height="800"
                    alt="skill logo"
                  />
                </div>
              </section>
              <section class="skills mt-5 font-Poppins text-white">
                <h2 class="pb-1 text-[#FF0090] text-2xl">Frameworks</h2>
                <div class="">
                  <img
                    src="https://skillicons.dev/icons?i=react,nodejs,prometheus,spring,kafka,redis,tailwind,redux,express,npm"
                    width="800"
                    height="800"
                    alt="skill logo"
                  />
                </div>
              </section>
              <section class="skills mt-5 font-Poppins text-white">
                <h2 class="pb-1 text-[#FF0090] text-2xl">
                  Databases &amp; Cloud
                </h2>
                <div class="">
                  <img
                    src="https://skillicons.dev/icons?i=mongo,mysql,postgres,dynamodb,vercel,gcp,firebase"
                    width="650"
                    height="650"
                    alt="skill logo"
                  />
                </div>
              </section>
              <section class="skills mt-5 font-Poppins text-white">
                <h2 class="pb-1 text-[#FF0090] text-2xl">Tools</h2>
                <div class="">
                  <img
                    src="https://skillicons.dev/icons?i=git,grafana,docker,github,postman"
                    width="800"
                    height="800"
                    alt="skill logo"
                  />
                </div>
              </section>
            </div>

            {/* github history */}
            <section className="mt-1 lg:mt-20 lg:w-3/5 xl:w-2/3">
              <h1 className="text-gray-300 font-semibold flex items-center text-2xl poppins-semibold-600">
                Github History
                <div className="h-1 w-40 bg-gray-600 ml-5"></div>
              </h1>
            </section>
            {/* github graph */}
            <section className="w-full mt-4 mb-4">
              <img
                src={GithubHistory}
                // src="http://ghchart.rshah.org/himanshumaharshi"
                height="1200"
                width="1200"
                alt="himanshu github chart"
                className="w-full"
              />
            </section>
          </div>
        </div>

        {/* footer */}
        <Footer/>
      </div>
    </>
  );
};

export default Skills;
