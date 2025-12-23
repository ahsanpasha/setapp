import { Button } from "@/components/ui/button";
import { Apple, Monitor } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="pt-[118px] pb-[147px] bg-[#26262B] flex flex-row align-end justify-center gap-[75px]"
    >
      <img src="/Images/left.svg" alt="" />
      <div className="flex flex-col items-center justify-center">
        <img src="/Images/biglogo.svg" alt="" />


        <p className="font-[Avenir-Bold] font-bold text-[64px] leading-[67.84px] tracking-[1px] text-center align-middle">
          Dozens of apps.
          <br />
          One subscription.
          <br />
          $9.99
        </p>

        <div className="flex flex-row gap-[20px] mt-[48px] mb-[27.5px]">
          <button
            className="h-[52px] bg-[#fff] rounded-[6px] font-[Avenir] text-[#26262B] font-normal  text-[16px] px-6 flex items-center justify-center hover:opacity-90 transition"
          >
            Try free for 7 days
          </button>

          <button
            className="h-[52px] bg-[#fff] rounded-[6px] font-[Avenir-Next] font-normal text-[16px] px-6 flex items-center justify-center hover:opacity-90 transition"
          >
            <img src="/Images/apple.svg" alt="" />
          </button>
          <button
            className="h-[52px] bg-[#fff] rounded-[6px] font-[Avenir-Next] font-normal text-[16px] px-6 flex items-center justify-center hover:opacity-90 transition"
          >
            <img src="/Images/playstore.svg" alt="" />
          </button>
        </div>
        <p className="font-[Avenir] text-[#FFFFFF] text-center font-normal  text-[18px]">
          Power up your workflow with Setapp, a<br />
          smart way to get apps.
        </p>

      </div>
      <img src="/Images/right.svg" alt="" />

    </section >
  );
};

export default HeroSection;
