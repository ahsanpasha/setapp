import React from 'react'

const JourneySection = () => {
  return (
    <section className="relative bg-[#FEFEFE]">

      {/* Upper Half Dark Background */}
      <div className="absolute top-0 left-0 w-full h-[50%] bg-[#2B2D32]"></div>

      {/* Content Container */}
      <div className="relative px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[55px] py-8 sm:py-10 md:py-12 lg:py-14 flex justify-center">

        {/* Full-width Card with background image */}
        <div
          className="w-full rounded-[12px] sm:rounded-[16px] md:rounded-[20px] z-10 bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-between px-5 sm:px-8 md:px-10 lg:px-[46px] xl:px-[91px] pt-8 sm:pt-12 md:pt-16 lg:pt-[64.8px] pb-12 sm:pb-16 md:pb-20 lg:pb-[142px]"
          style={{
            backgroundImage: "url('/Images/Section.png')",
          }}
        >

          {/* First Div: Text + Play Image */}
          <div className="flex flex-col max-w-full md:max-w-md lg:max-w-lg">
            <p className="font-['Avenir'] font-medium text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-relaxed sm:leading-loose md:leading-[36px] lg:leading-[40.04px] text-white mt-0 sm:mt-8 md:mt-16 lg:mt-[125px]">
              Musicians like Jason use Setapp to push the<br className="hidden sm:block" />
              limits of their creativity, dancing through tasks<br className="hidden sm:block" />
              for more time to play.
            </p>
            <p className="font-['Avenir'] font-normal text-sm sm:text-base md:text-[16px] leading-[100%] text-white mt-4 sm:mt-5 md:mt-[20px]">
              Jason Staczek
            </p>
            <img
              src="/Images/play.svg"
              alt="Play"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[74px] lg:h-[74px] object-contain mt-8 sm:mt-12 md:mt-16 lg:mt-[131px]"
            />
          </div>

          {/* Second Div: Two Arrow Images */}
          <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[46px] mt-8 md:mt-0 items-start md:items-center">
            <img
              src="/Images/arooooow.svg"
              alt="Previous"
              className="w-3 h-5 sm:w-[10px] sm:h-[18px] md:w-[12px] md:h-[20px] lg:w-[14px] lg:h-[24px] object-contain cursor-pointer hover:opacity-70 transition-opacity"
            />
            <img
              src="/Images/arooooow1.svg"
              alt="Next"
              className="w-3 h-5 sm:w-[10px] sm:h-[18px] md:w-[12px] md:h-[20px] lg:w-[14px] lg:h-[24px] object-contain cursor-pointer hover:opacity-70 transition-opacity"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default JourneySection
