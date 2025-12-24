import { Play } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[130px] pb-12 sm:pb-16 md:pb-20 lg:pb-[108px] bg-[#26262B]">
      <hr className="w-full h-[1px] bg-[#E5E5E5]" />

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-[88px] mt-12 sm:mt-16 md:mt-20 lg:mt-[101px]">
        <p className="font-['Avenir-Bold'] text-[#FFFFFF] font-semibold text-2xl sm:text-3xl md:text-[36px] leading-tight md:leading-[51.84px] tracking-[0.5px] md:tracking-[1px]">
          What you get on Setapp.
        </p>

        <p className="font-['Avenir'] text-[#FFFFFF] font-normal text-base sm:text-[18px] leading-relaxed md:leading-[32.04px] max-w-full md:max-w-[520px]">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>


      <div className="bg-[#DF96AE] rounded-[12px] sm:rounded-[20px] pt-8 sm:pt-12 md:pt-[60px] overflow-hidden">

        <div className="px-4 sm:px-8 md:px-12 lg:px-[60px] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-[32px] mb-6 sm:mb-8">
          <img src="/Images/com.svg" alt="" className="w-12 sm:w-16 md:w-auto" />
          <div className="flex flex-col justify-center">
            <p className="font-[Avenir-Bold] font-semibold text-xl sm:text-2xl md:text-[26px] leading-tight md:leading-[40.04px] text-[#26262B]">
              Keep your Mac clean
            </p>

            <p className="font-[Avenir] font-normal text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[32.04px] text-[#26262B]">
              Remove junk, scan for malware, wipe email attachments
            </p>
          </div>
        </div>
        <img
          src="/Images/div.d-none.png"
          alt="Keep your Mac clean"
          className="w-full h-auto object-cover"
        />
      </div>


      <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-[20px] mt-4 sm:mt-[20px]">
        <div className="w-full md:w-[50%] bg-[#F4F0E4] rounded-[12px] sm:rounded-[20px] overflow-hidden">
          <img
            src="/Images/coderunner@2x.png.png"
            alt="Keep your Mac clean"
            className="w-full h-auto object-cover"
          />

          <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-[60px] pb-8 sm:pb-12 md:pb-[59.54px]">
            <img
              src="/Images/codex.svg"
              alt="Keep your Mac clean"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] mb-3 sm:mb-4 md:mb-[19px] object-contain"
            />

            <p className="font-['Avenir-Bold'] font-semibold text-xl sm:text-2xl md:text-[26px] leading-tight md:leading-[40.04px] text-[#26262B]">
              Write code
            </p>

            <p className="font-['Avenir'] font-normal text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[32.04px] text-[#26262B]">
              Create applications in more than 25 languages
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50%] rounded-[12px] sm:rounded-[20px] bg-[#384C75] pt-8 sm:pt-12 md:pt-[60px] overflow-hidden">
          <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-[60px] pb-8 sm:pb-10 md:pb-[52.46px]">
            <img
              src="/Images/circle.svg"
              alt="Keep your Mac clean"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] mb-3 sm:mb-4 md:mb-[19px] object-contain"
            />

            <p className="font-['Avenir-Bold'] font-semibold text-xl sm:text-2xl md:text-[26px] leading-tight md:leading-[40.04px] text-white">
              Join meetings in a click
            </p>

            <p className="font-['Avenir'] font-normal text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[32.04px] text-white">
              Quickly access links to your meetings from menu bar
            </p>
          </div>

          <img
            src="/Images/meeter@2x.png.png"
            alt="Keep your Mac clean"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] gap-2 sm:gap-[11px]">
        <img
          src="/Images/arrow.svg"
          alt=""
          className="w-4 sm:w-5 md:w-auto h-auto"
        />

        <p className="font-['Avenir'] font-medium text-base sm:text-lg md:text-[20px] leading-relaxed md:leading-[30px] tracking-[1px] sm:tracking-[1.6px] text-center text-[#ffffff]">
          View all superpowers
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-[89px] mt-12 sm:mt-16 md:mt-20 lg:mt-[88px]">
        <p className="font-['Avenir-Bold'] text-[#FFFFFF] font-semibold text-2xl sm:text-3xl md:text-[36px] leading-tight md:leading-[51.84px] tracking-[0.5px] md:tracking-[1px]">
          Your Setapp journey.
        </p>

        <p className="font-['Avenir'] text-[#FFFFFF] font-normal text-base sm:text-[18px] leading-relaxed md:leading-[32.04px] max-w-full md:max-w-[520px]">
          Type in your task into Setapp search and get instant app
          recommendations
        </p>
      </div>

      <hr className="w-full h-[1px] bg-[#E5E5E5]" />
    </section>

  );
};

export default FeaturesSection;
