import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative bg-[#2B2D32]">

      {/* Upper Half White Background */}
      <div className="absolute top-0 left-0 w-full h-[50%] bg-[#FEFEFE]"></div>

      {/* Content Container */}
      <div className="relative px-5 sm:px-10 md:px-14 lg:px-[55px] py-10 sm:py-14 flex justify-center">
        {/* Full-width Card */}
        <div className="bg-[#F5F5F5] w-full rounded-[20px] px-5 sm:px-10 md:px-[40px] py-20 sm:py-[92px] flex flex-col items-start z-10">

          {/* Logo */}
          <img
            src="/Images/ctalogo.svg"
            alt="cta logo"
            className="w-[50px] h-[80px] sm:w-[76px] sm:h-[120px] object-contain mb-6 sm:mb-[24px]"
          />

          {/* Heading */}
          <h2 className="font-['Avenir'] font-semibold text-[24px] sm:text-[32px] md:text-[46px] leading-[32px] sm:leading-[40px] md:leading-[59.8px] tracking-[1.3px] text-[#26262B] mb-10 sm:mb-[60px]">
            Superpowers starting $9.99/month.<br />
            Free for 7 days.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[24.5px] w-full">

            {/* Get Started Now */}
            <button
              className="
                w-full sm:w-[193.41px] h-[50px]
                rounded-[6px]
                font-['Avenir'] font-normal text-[16px] leading-[24px] tracking-[1px]
                text-white bg-[#26262B]
                text-center
                hover:bg-[#1f1f1f] hover:scale-105 active:scale-95 transition-all duration-200
              "
            >
              Get started now
            </button>

            {/* More about Setapp */}
            <button
              className="
                w-full sm:w-[220.57px] h-[50px]
                rounded-[6px]
                font-['Avenir'] font-normal text-[16px] leading-[24px] tracking-[1px]
                text-[#26262B]
                bg-transparent
                border border-[#26262B]
                text-center
                hover:bg-[#26262B] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200
              "
            >
              More about Setapp
            </button>

          </div>
        </div>
      </div>

      {/* Lower Half for spacing */}
      <div className="h-[50%]"></div>
    </section>
  );
};

export default CTASection;
