import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../constants/index";

const RecentProjects = () => {
  const getStatusDetails = (status) => {
    switch (status) {
      case "live":
        return { color: "text-green-500", bg: "bg-green-500", label: "Live" };
      case "localhost":
        return { color: "text-yellow-500", bg: "bg-yellow-500", label: "Local" };
      case "development":
        return { color: "text-orange-500", bg: "bg-orange-500", label: "Dev" };
      default:
        return { color: "text-gray-400", bg: "bg-gray-400", label: "Pending" };
    }
  };

  return (
    <div className="py-20" id="projects">
      
       
      <h2 className="text-4xl font-semibold  bg-black text-white text-center">
        🚀 Projects
      </h2>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => {
          const status = getStatusDetails(item.status);
          return (
            <div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                /* Removed p-4 here to let the image go full width */
                className="block w-full h-full overflow-hidden rounded-3xl group bg-[#10132E] border border-white/[.1] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-purple/[.3]"
              >
                {/* Image Container - Height increased and padding removed */}
                <div className="relative flex items-center justify-center overflow-hidden h-[25vh] lg:h-[35vh] bg-[#13162D]">
                  <img src="/bg.png" alt="bgimg" className="absolute w-full h-full object-cover" />
                  
                  <img
                    src={item.img}
                    alt="cover"
                    /* Increased max-width and height to use the extra space */
                    className="z-10 absolute bottom-0 w-full h-full object-contain p-2"
                  />
                  
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/[0.1]">
                    <span className={`h-2 w-2 rounded-full animate-pulse ${status.bg}`} />
                    <span className={`text-xs font-medium ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* Content Container - Added px-6 to keep text aligned but off the edges */}
                <div className="px-6 mt-5">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 group-hover:text-purple transition-colors duration-300">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{ color: "#BEC1DD", margin: "1vh 0" }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center group-hover:translate-x-1 transition-transform duration-300">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check it out
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;