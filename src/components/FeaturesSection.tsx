import { Play } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="px-[130px] pb-[108px] pb-[88.17px] bg-[#26262B]">
      <hr className="w-full h-[1px] bg-[#E5E5E5]" />

      <div className="flex flex-row justify-between mb-[88px] mt-[101px]">
        <p className="mb-[20px] font-['Avenir-Bold'] text-[#FFFFFF] font-semibold text-[36px] leading-[51.84px] tracking-[1px] ">
          What you get on Setapp.
        </p>

        <p className="font-['Avenir'] text-[#FFFFFF] font-normal text-[18px] leading-[32.04px] max-w-[520px]">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>


      <div className="bg-[#DF96AE]  rounded-[20px] pt-[60px] overflow-hidden">

        <div className="px-[60px] flex flex-row align-center gap-[32px]">
          <img src="/Images/com.svg" alt="" />
          <div className="flex flex-col justify-center align-center">
            <p className="font-[Avenir-Bold] font-semibold text-[26px] leading-[40.04px] text-[#26262B] align-middle">
              Keep your Mac clean
            </p>

            <p className="font-[Avenir] font-normal text-[18px] leading-[32.04px] text-[#26262B] align-middle">
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


      <div className="w-full flex flex-row align-center gap-[20px] mt-[20px]">
        <div className="w-[50%] bg-[#F4F0E4] rounded-[20px]">
          <img
            src="/Images/coderunner@2x.png.png"
            alt="Keep your Mac clean"
            className="w-full h-auto object-cover"
          />

          <div className="flex flex-col px-[60px] pb-[59.54px]">
            <img
              src="/Images/codex.svg"
              alt="Keep your Mac clean"
              className="w-[68px] h-[68px] mb-[19px] object-contain"
            />

            <p className="font-['Avenir-Bold'] font-semibold text-[26px] leading-[40.04px] text-[#26262B]">
              Write code
            </p>

            <p className="font-['Avenir'] font-normal text-[18px] leading-[32.04px] text-[#26262B]">
              Create applications in more than 25 languages
            </p>
          </div>



        </div>
        <div className="w-[50%] rounded-[20px] bg-[#384C75] pt-[60px]">
          <div className="flex flex-col px-[60px] pb-[52.46px]">
            <img
              src="/Images/circle.svg"
              alt="Keep your Mac clean"
              className="w-[68px] h-[68px] mb-[19px] object-contain"
            />

            <p className="font-['Avenir-Bold'] font-semibold text-[26px] leading-[40.04px] text-white">
              Join meetings in a click
            </p>

            <p className="font-['Avenir'] font-normal text-[18px] leading-[32.04px] text-white">
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

      <div className="flex flex-row items-center justify-center mt-[100px] gap-[11px]">
        <img
          src="/Images/arrow.svg"
          alt=""
          className="w-auto h-auto"
        />

        <p className="font-['Avenir'] font-medium text-[20px] leading-[30px] tracking-[1.6px] text-center text-[#ffffff]">
          View all superpowers
        </p>
      </div>

      <div className="flex flex-row justify-between mb-[89px] mt-[88px]">
        <p className="mb-[20px] font-['Avenir-Bold'] text-[#FFFFFF] font-semibold text-[36px] leading-[51.84px] tracking-[1px] ">
          Your Setapp journey.
        </p>

        <p className="font-['Avenir'] text-[#FFFFFF] font-normal text-[18px] leading-[32.04px] max-w-[520px]">
          Type in your task into Setapp search and get instant app
          recommendations
        </p>
      </div>

      <hr className="w-full h-[1px] bg-[#E5E5E5]" />
    </section>

  );
};

export default FeaturesSection;
