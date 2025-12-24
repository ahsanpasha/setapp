import { Twitter, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Apps: ['How it Works', 'All Apps', 'Categories', 'Setapp for Teams', 'Blog', 'Setapp Mobile'],
    About: ['Company', 'Tech specs', 'Ty Developers', 'Terms of Use', 'Gift Cards', 'Student Discount', 'Affiliate Program', 'For Developers', 'Any App Ideas?'],
    'Categories and Topics': ['Setapp wonders desktop', 'Control Z is more', 'Uninstaller', 'GoodNotes alternatives', 'Desktop widgets', 'iPhone on Mac', 'Android on Mac'],
  };

  return (
    <footer className=" bg-[#2B2D32] border-t border-border px-[30px] sm:px-6 py-8 sm:py-10 ">

      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">


        <div className="max-w-md">
          <img src="/Images/footerlogo.svg" alt="footer logo" />

          <p className="mt-[78px] max-w-xs text-white font-['Avenir'] font-normal text-[16px] leading-[28.48px]">
            All prices are in USD. Unsubscribe at any time 🧡
          </p>


          <div className="flex mt-[24px] w-full max-w-[442px]">

            <input
              type="email"
              placeholder="Enter email"
              className="
            w-[388px]
            h-[50.23px]
            bg-[#404547]
            px-[12px]
            pt-[14px]
            pb-[14.23px]
            font-['Avenir']
            font-normal
            text-[16px]
            leading-[100%]
            text-white
            placeholder:text-[#9D9CA2]
            rounded-l-[6px]
            focus:outline-none
          "
            />

            <button
              className="
            w-[54px]
            h-[50.23px]
            bg-white
            border border-white
            rounded-r-[6px]
            flex items-center justify-center
            flex-shrink-0
            hover:bg-gray-200 active:scale-95 transition-all duration-200
          "
            >
              <img
                src="/Images/arrowwnew.svg"
                alt="submit"
                className="w-[16px] h-[16px]"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-['Avenir'] font-normal text-[16px] leading-[32px] text-white">
                {title}
              </h4>

              <ul className="space-y-[0.5px]">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-['Avenir'] font-normal text-[16px] leading-[32px] text-white hover:text-[#DF96AE] hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className="flex items-center justify-between mt-[41.24px]">

        <div className="flex items-center">

          <div className="flex items-center justify-center w-[41px] h-[26px] font-['Arial'] font-bold text-[11px] leading-[26px] uppercase bg-[#969799]">
            DMCA
          </div>

          <div className="flex items-center justify-center w-[83.44px] h-[26px] font-['Arial'] font-bold text-[11px] leading-[26px] uppercase bg-[#404547]">
            Protected
          </div>

        </div>


        <div className="flex items-center gap-[10px]">
          <img
            src="/Images/flagnew.svg"
            alt="English"
            className="w-[20px] h-[14px] object-cover"
          />
          <span className="font-['Arial'] font-normal text-[16px] text-white">
            English
          </span>
          <img
            src="/Images/arrowdown.svg"
            alt="English"
            className="w-[10px] h-[10px]"
          />
        </div>

      </div>

      <div className="mt-[40px]">

        <div className="border-t border-[#E5E5E5]" />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-6 gap-6">

          {/* LEFT TEXT */}
          <div>
            <p className="font-['Avenir'] font-normal text-[12px] leading-[21.36px] text-white">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland.
              Reg. 584165. VAT ID: IE3425001BH
            </p>
          </div> {/* This was the missing opening tag for the divider div */}

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-[10px]">
            <img src="/Images/icon1.svg" alt="icon" className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer" />
            <img src="/Images/icon2.svg" alt="icon" className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer" />
            <img src="/Images/icon3.svg" alt="icon" className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer" />
            <img src="/Images/icon4.svg" alt="icon" className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer" />
          </div>

        </div>
      </div>

      <div className="mt-[19px] flex gap-[12.67px]">
        <p className="font-['Avenir'] font-normal text-[12px] leading-[21.36px] text-[#969799] hover:text-white cursor-pointer transition-colors duration-200">
          Terms of Use
        </p>
        <p className="font-['Avenir'] font-normal text-[12px] leading-[21.36px] text-[#969799] hover:text-white cursor-pointer transition-colors duration-200">
          Privacy Policy
        </p>
      </div>



    </footer>

  );
};

export default Footer;
