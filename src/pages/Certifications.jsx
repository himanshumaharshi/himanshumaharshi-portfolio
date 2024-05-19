import React from "react";
import CardGenerator2 from "../components/core/Certifications/CardGenerator2";
import Footer from "../components/common/Footer";

const Certifications = () => {
  return (
    <>
      <div className="text-white px-4 md:px-8 mt-[8rem] lg:px-10 pb-8">
        <div className="space-y-8 max-w-7xl mx-auto poppins-500 opacity-100 transform-none">
          <div className="mx-8 lg:mx-10">
            <h1 className="text-3xl font-bold tracking-widest sm:text-4xl poppins-black-900">
              Certifications
            </h1>
            <p className="mt-4 text-zinc-400 font-ubuntu tracking-tighter pb-6 border-b border-white/20"></p>

            <div className="flex z-30 justify-center gap-10">
              <CardGenerator2 />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Certifications;
