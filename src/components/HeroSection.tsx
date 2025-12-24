import { Button } from "@/components/ui/button";
import { Apple, Monitor } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="pt-12 sm:pt-16 md:pt-24 lg:pt-[118px] pb-12 sm:pb-16 md:pb-24 lg:pb-[147px] bg-[#26262B] flex flex-row items-center justify-center gap-4 md:gap-12 lg:gap-[75px] px-4 sm:px-6"
    >
      <img src="/Images/left.svg" alt="" className="hidden lg:block max-w-[200px] xl:max-w-none" />
      <div className="flex flex-col items-center justify-center max-w-full">
        <img src="/Images/biglogo.svg" alt="" className="w-20 sm:w-24 md:w-32 lg:w-auto mb-6 sm:mb-8" />

        <p className="font-[Avenir-Bold] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight sm:leading-tight md:leading-[67.84px] tracking-[0.5px] sm:tracking-[1px] text-center text-white">
          Dozens of apps.
          <br />
          One subscription.
          <br />
          $9.99
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[20px] mt-8 sm:mt-10 md:mt-[48px] mb-6 sm:mb-[27.5px] w-full sm:w-auto px-4 sm:px-0">
          <button
            className="h-[52px] bg-[#fff] rounded-[6px] font-[Avenir] text-[#26262B] font-normal text-[14px] sm:text-[16px] px-4 sm:px-6 flex items-center justify-center hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
          >
            Try free for 7 days
          </button>

          <div className="flex flex-row gap-3 sm:gap-[20px]">
            <button
              className="h-[52px] flex-1 sm:flex-none bg-[#fff] rounded-[6px] font-[Avenir-Next] font-normal text-[16px] px-4 sm:px-6 flex items-center justify-center hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <img src="/Images/apple.svg" alt="Apple" className="w-6 h-6" />
            </button>
            <button
              className="h-[52px] flex-1 sm:flex-none bg-[#fff] rounded-[6px] font-[Avenir-Next] font-normal text-[16px] px-4 sm:px-6 flex items-center justify-center hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <img src="/Images/playstore.svg" alt="Play Store" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <p className="font-[Avenir] text-[#FFFFFF] text-center font-normal text-sm sm:text-base md:text-[18px] leading-relaxed px-4">
          Power up your workflow with Setapp, a<br className="hidden sm:block" />
          smart way to get apps.
        </p>

      </div>
      <img src="/Images/right.svg" alt="" className="hidden lg:block max-w-[200px] xl:max-w-none" />

    </section>
  );
};

export default HeroSection;
