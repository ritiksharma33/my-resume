import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const container = useRef(null);

  useGSAP(() => {
    // We target all elements with the class .counter-number inside our container
    const bars = gsap.utils.toArray(".counter-number");

    bars.forEach((bar, index) => {
      const item = counterItems[index];

      gsap.to(bar, {
        innerText: item.value,
        duration: 2,
        snap: { innerText: 1 }, // Forces whole numbers
        scrollTrigger: {
          trigger: bar,
          start: "top 85%", // Starts when the number is 85% down the screen
        },
        onUpdate: function() {
          // Optional: Add formatting or suffix during update if needed
          // bar.innerHTML = Math.ceil(this.targets()[0].innerText) + item.suffix;
        },
        onComplete: () => {
          // Ensures the final value and suffix are perfectly set
          bar.innerHTML = `${item.value}${item.suffix}`;
        },
      });
    });
  }, { scope: container });

  return (
    <div id="counter" ref={container} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            {/* 1. We removed CountUp component - it was blocking GSAP */}
            {/* 2. We start at 0 so GSAP has a number to animate from */}
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;