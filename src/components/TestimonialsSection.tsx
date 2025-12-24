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


  const nextPage = () => setCurrentPage((prev) => (prev + 1) % testimonials.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#FEFEFE] px-5 sm:px-8 md:px-12 lg:px-20 xl:px-[130px] pt-12 sm:pt-16 md:pt-20 lg:pt-[120px] pb-6 sm:pb-8 md:pb-[25.49px]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-[25px]">
        <p className="text-[#26262B] font-semibold text-2xl sm:text-3xl md:text-[36px] leading-tight md:leading-[47.88px] tracking-[1.3px]">
          Setapp in your words.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-[93px]">
          <p className="text-[#26262B] font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[32.04px]">
            What you say about how Setapp<br className="hidden sm:block" />
            powers you up.
          </p>
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-[10px]">
            <img src="/Images/fbb.svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-[48px] md:w-[48px] object-contain hover:scale-110 hover:brightness-110 transition-all duration-200 cursor-pointer" alt="Facebook" />
            <img src="/Images/twitterr.svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-[48px] md:w-[48px] object-contain hover:scale-110 hover:brightness-110 transition-all duration-200 cursor-pointer" alt="Twitter" />
            <img src="/Images/instaa.svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-[48px] md:w-[48px] object-contain hover:scale-110 hover:brightness-110 transition-all duration-200 cursor-pointer" alt="Instagram" />
            <img src="/Images/youtubee.svg" className="h-8 w-8 sm:h-10 sm:w-10 md:h-[48px] md:w-[48px] object-contain hover:scale-110 hover:brightness-110 transition-all duration-200 cursor-pointer" alt="YouTube" />
          </div>
        </div>
      </div>


      <div className="flex justify-end mb-4 sm:mb-5 md:mb-[20px]">
        <div className="flex flex-row gap-6 sm:gap-8 md:gap-[46px]">
          <img
            src="/Images/leftchev.svg"
            onClick={prevPage}
            className="w-[10px] h-[20px] sm:w-[12px] sm:h-[24px] md:w-[14px] md:h-[28px] lg:w-[10px] lg:h-[20px] cursor-pointer hover:opacity-100 hover:scale-125 active:scale-95 transition-all duration-200 object-contain"
            alt="Previous"
          />
          <img
            src="/Images/rightchev.svg"
            onClick={nextPage}
            className="w-[10px] h-[20px] sm:w-[12px] sm:h-[24px] md:w-[14px] md:h-[28px] lg:w-[10px] lg:h-[20px] cursor-pointer hover:opacity-100 hover:scale-125 active:scale-95 transition-all duration-200 object-contain"
            alt="Next"
          />
        </div>
      </div>




      {/* Mobile/Tablet: Show one card at a time */}
      <div className="lg:hidden">
        <div className="w-full rounded-[15px] p-[7px] bg-[#F5F5F5]">
          {/* Quote Box */}
          <div className="rounded-[8px] min-h-[250px] sm:min-h-[280px] md:min-h-[299.48px] bg-[#71719A] p-5 sm:p-6 md:p-[22px] md:pb-[38.98px]">
            <p className="font-['Avenir'] font-medium text-lg sm:text-xl md:text-[26px] leading-relaxed sm:leading-loose md:leading-[36.92px] text-white whitespace-pre-line">
              {testimonials[currentPage].text}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 sm:px-6 md:px-[22px] pb-3 sm:pb-4 md:pb-[13px] pt-6 sm:pt-8 md:pt-[38.5px]">
            <div>
              <p className="font-['Avenir-Bold'] font-semibold text-base sm:text-lg md:text-[18px] text-[#26262B]">
                {testimonials[currentPage].name}
              </p>
              <p className="font-['Avenir'] text-xs sm:text-sm md:text-[14px] text-[#9F9F9F]">
                {testimonials[currentPage].username}
              </p>
            </div>

            <img
              src={testimonials[currentPage].image}
              alt="social media"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-[20px] md:h-[20px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Desktop: Show all cards */}
      <div className="hidden lg:flex gap-[20px] flex-row">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-[15px] p-[7px] bg-[#F5F5F5]"
          >
            {/* Quote Box */}
            <div className="rounded-[8px] h-[299.48px] bg-[#71719A] p-[22px] pb-[38.98px] pl-[22px]">
              <p className="font-['Avenir'] font-medium text-[26px] leading-[36.92px] text-white whitespace-pre-line">
                {item.text}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-[22px] pb-[13px] pt-[38.5px]">
              <div>
                <p className="font-['Avenir-Bold'] font-semibold text-[18px] text-[#26262B]">
                  {item.name}
                </p>
                <p className="font-['Avenir'] text-[14px] text-[#9F9F9F]">
                  {item.username}
                </p>
              </div>

              <img
                src={item.image}
                alt="twitter"
                className="w-[20px] h-[20px] hover:scale-110 transition-transform duration-200 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>





      {/* Page indicators - only show on mobile/tablet */}
      <div className="flex lg:hidden justify-center gap-4 sm:gap-5 md:gap-[25px] mt-6 sm:mt-8 md:mt-[24px]">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-3 h-3 sm:w-[12px] sm:h-[12px] rounded-full transition-colors ${i === currentPage ? 'bg-[#26262B]' : 'bg-[#26262B]/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

