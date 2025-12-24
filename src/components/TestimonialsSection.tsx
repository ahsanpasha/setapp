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
    <section className=" bg-[#f5f5f0] px-[130px] pt-[120px] pb-[25.49px]">
      <div className="flex justify-between mb-[25px]">
        <p className="mb-[17.8px] text-[#26262B] font-semibold text-[36px] leading-[47.88px] tracking-[1.3px]">
          Setapp in your words.
        </p>
        <div className="flex flex-row gap-[93px]">
          <p className="text-[#26262B] font-normal text-[18px] leading-[32.04px]">
            What you say about how Setapp<br />
            powers you up.
          </p>
          <div className="flex flex-row gap-[10px]">
            <img src="/Images/fbb.svg" className="h-[48px] w-[48px]" alt="Facebook" />
            <img src="/Images/twitterr.svg" className="h-[48px] w-[48px]" alt="Twitter" />
            <img src="/Images/instaa.svg" className="h-[48px] w-[48px]" alt="Instagram" />
            <img src="/Images/youtubee.svg" className="h-[48px] w-[48px]" alt="YouTube" />
          </div>
        </div>
      </div>


      <div className="flex justify-end mb-[20px]">
        <div className="flex flex-row gap-[46px]">
          <img src="/Images/leftchev.svg" onClick={prevPage} />
          <img src="/Images/rightchev.svg" onClick={nextPage} />
        </div>
      </div>




      <div className="flex gap-[20px] flex-row flex">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-[15px] p-[7px] bg-[#F5F5F5]"
          >
            {/* Quote Box */}
            <div className="rounded-[8px] h-[299.48px] bg-[#71719A]  p-[22px] pb-[38.98px] pl-[22px]">
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
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
        ))}
      </div>





      {/* Page indicators */}
      <div className="flex justify-center gap-[25px] mt-[24px] ">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-[12px] h-[12px] rounded-full transition-colors ${i === currentPage ? 'bg-background' : 'bg-background/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
