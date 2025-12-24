import { useState } from "react";
import { ChevronLeft, ChevronRight, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      text: `Have been using Setapp for almost two years, and I have to say it's the
best and the most cost-effective way of having apps on Mac.`,
      name: "Arash Pourhabibi",
      username: "@ArashPourhabibi",
      image: "/Images/twitter.svg",
    },
    {
      text: `My favorites ❤️ from
@Setapp Ulysses,
CleanMyMac X, Paste,
MindNode, Swift
Publisher.`,
      name: "Mauricio Sanchez",
      username: "@m741s",
      image: "/Images/insta.svg",
    },
    {
      text: `For those of you that
wonder where I
discover/get all the
awesome apps for my Mac
that I use, a lot of them are
from Setapp!`,
      name: "Meredith Sweet",
      username: "@meredith.sweet.silberstein",
      image: "/Images/fb.svg",
    },
  ];


  const nextPage = () => setCurrentPage((prev) => (prev + 1) % 6);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + 6) % 6);

  return (
    <section className="bg-[#f5f5f0] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[130px] pt-12 sm:pt-16 md:pt-20 lg:pt-[120px] pb-6 sm:pb-8 md:pb-[25.49px]">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-[25px]">
        <p className="text-[#26262B] font-semibold text-2xl sm:text-3xl md:text-[36px] leading-tight md:leading-[47.88px] tracking-[0.5px] md:tracking-[1.3px]">
          Setapp in your words.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-[93px]">
          <p className="text-[#26262B] font-normal text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[32.04px]">
            What you say about how Setapp<br className="hidden sm:block" />
            powers you up.
          </p>
          <div className="flex flex-row gap-2 sm:gap-[10px]">
            <img src="/Images/fbb.svg" className="h-10 w-10 sm:h-12 sm:w-12 md:h-[48px] md:w-[48px]" alt="Facebook" />
            <img src="/Images/twitterr.svg" className="h-10 w-10 sm:h-12 sm:w-12 md:h-[48px] md:w-[48px]" alt="Twitter" />
            <img src="/Images/instaa.svg" className="h-10 w-10 sm:h-12 sm:w-12 md:h-[48px] md:w-[48px]" alt="Instagram" />
            <img src="/Images/youtubee.svg" className="h-10 w-10 sm:h-12 sm:w-12 md:h-[48px] md:w-[48px]" alt="YouTube" />
          </div>
        </div>
      </div>


      <div className="flex justify-end mb-4 sm:mb-[20px]">
        <div className="flex flex-row gap-6 sm:gap-8 md:gap-[46px]">
          <img src="/Images/leftchev.svg" onClick={prevPage} className="cursor-pointer w-6 sm:w-8 md:w-auto" />
          <img src="/Images/rightchev.svg" onClick={nextPage} className="cursor-pointer w-6 sm:w-8 md:w-auto" />
        </div>
      </div>




      <div className="flex gap-3 sm:gap-4 md:gap-[20px] flex-row overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-0 w-full rounded-[12px] sm:rounded-[15px] p-[6px] sm:p-[7px] bg-[#F5F5F5] flex-shrink-0 md:flex-shrink"
          >
            {/* Quote Box */}
            <div className="rounded-[8px] min-h-[250px] sm:min-h-[280px] md:h-[299.48px] bg-[#71719A] p-4 sm:p-5 md:p-[22px] md:pb-[38.98px] flex items-center">
              <p className="font-['Avenir'] font-medium text-lg sm:text-xl md:text-[26px] leading-relaxed md:leading-[36.92px] text-white whitespace-pre-line">
                {item.text}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 sm:px-5 md:px-[22px] pb-3 sm:pb-[13px] pt-6 sm:pt-8 md:pt-[38.5px]">
              <div>
                <p className="font-['Avenir-Bold'] font-semibold text-base sm:text-[18px] text-[#26262B]">
                  {item.name}
                </p>
                <p className="font-['Avenir'] text-xs sm:text-[14px] text-[#9F9F9F]">
                  {item.username}
                </p>
              </div>

              <img
                src={item.image}
                alt="twitter"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]"
              />
            </div>
          </div>
        ))}
      </div>





      {/* Page indicators */}
      <div className="flex justify-center gap-4 sm:gap-5 md:gap-[25px] mt-6 sm:mt-[24px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-[12px] md:h-[12px] rounded-full transition-colors ${i === currentPage ? 'bg-background' : 'bg-background/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
