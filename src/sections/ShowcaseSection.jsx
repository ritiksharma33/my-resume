import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaLocationArrow } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* FIRST PROJECT */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/product.png" alt="Productify App Interface" />
            </div>

            <div className="text-content">
              <h2>
                Productify – Product Showcase Web App
              </h2>

              <p className="text-white-50 md:text-lg">
                A full-stack app with Clerk authentication and CRUD features,
                allowing users to add, edit, and explore products with an
                interactive and clean interface.
              </p>

              {/* NEW CHECK IT OUT STYLE */}
              <a
                href="https://github.com/ritiksharma33/producto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-4 group"
              >
                <p className="text-sm text-purple">
                  Check it out
                </p>
                <FaLocationArrow
                  className="ms-3 group-hover:translate-x-1 transition-transform duration-300"
                  color="#CBACF9"
                />
              </a>
            </div>
          </div>

          {/* OTHER PROJECTS */}
          <div className="project-list-wrapper overflow-hidden">

            {/* REMINDO */}
            <div className="project" ref={libraryRef}>
              <div>
                <img src="/images/barindump.png" alt="Remindo" />
              </div>

              <h2>
                Remindo – Personal Memory & Note Storage System
              </h2>

              <a
                href="https://github.com/ritiksharma33/Remindo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-3 group"
              >
                <p className="text-sm text-purple">
                  Check it out
                </p>
                <FaLocationArrow
                  className="ms-3 group-hover:translate-x-1 transition-transform duration-300"
                  color="#CBACF9"
                />
              </a>
            </div>

            {/* TREASURE VAULT */}
            <div className="project" ref={ycDirectoryRef}>
              <div>
                <img src="/images/treasure.png" alt="Treasure Vault App" />
              </div>

              <h2>
                Treasure Vault – Turn YouTube Videos into Actionable Knowledge
              </h2>

              <a
                href="https://github.com/ritiksharma33/TreasureVault"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-3 group"
              >
                <p className="text-sm text-purple">
                  Check it out
                </p>
                <FaLocationArrow
                  className="ms-3 group-hover:translate-x-1 transition-transform duration-300"
                  color="#CBACF9"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;