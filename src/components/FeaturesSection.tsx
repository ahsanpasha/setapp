import { Play } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="mx-[130px]">

      <div className="bg-[#DF96AE] mt-[88px] rounded-[20px] pt-[60px] overflow-hidden">

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
        </div>
        <div className="w-[50%] rounded-[20px] bg-[#384C75]">
          <div>

            <p>
              Join meetings in a click
            </p>
            <p>
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

    </section>

  );
};

export default FeaturesSection;
