import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-auto scrollbar-hide bg-gradient-to-b from-white to-blue-50 scroll-smooth ">
      <section id="About" className="w-svh h-svh">
        <header className="flex flex-row justify-between items-center pt-5 px-8 backdrop-blur-sm bg-white/30 fixed w-full z-50">
          <div className="text-[38px] font-bold text-[#0047AB] hover:text-[#06377D] transition-colors duration-300">Portfolio</div>
          <div className="flex flex-row gap-16 justify-end">
            <a href="#About" className="text-black font-semibold text-[24px] hover:text-[#0047AB] transition-colors duration-300">
              About
            </a>
            <a href="#Skill" className="text-black font-semibold text-[24px] hover:text-[#0047AB] transition-colors duration-300">
              Skill
            </a>
            <a href="#Portfolio" className="text-black font-semibold text-[24px] hover:text-[#0047AB] transition-colors duration-300">
              Portfolio
            </a>
          </div>
        </header>
        <div className="w-full h-screen grid grid-cols-2 pt-20 ">
          <main className="flex flex-col justify-center h-svh w-svh px-20">
            <h1 className="text-[38px] text-black font-bold animate-fade-in">Hi, I'm</h1>
            <h1 className="text-[38px] text-[#06377D] font-bold ">
              Napus Samuanpho
            </h1>
            <h1 className="text-[38px] text-[#63666A] font-bold ">
              Software Engineer Year 2, MFU
            </h1>
            <div className="flex flex-row gap-[30px] mt-8">
              <div className="p-2 hover:scale-110 transition-transform duration-300">
                <a
                  href="https://github.com/Napus-BackendDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-[45px] h-[45px] text-gray-800 hover:text-[#0047AB] transition-colors duration-300" />
                </a>
              </div>
              <div className="p-2 hover:scale-110 transition-transform duration-300">
                <a
                  href="https://www.facebook.com/napus.sam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareFacebook className="w-[45px] h-[45px] text-blue-600 hover:text-[#0047AB] transition-colors duration-300" />
                </a>
              </div>
              <div className="p-2 hover:scale-110 transition-transform duration-300">
                <a
                  href="https://www.instagram.com/plum_ns/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-[45px] h-[45px] text-pink-600 hover:text-[#0047AB] transition-colors duration-300" />
                </a>
              </div>
            </div>
          </main>
          <div className="flex justify-end items-center pr-20"> 
            <img src="/profile.jpg" alt="napus" className="rounded-full w-[450px] h-[450px] object-cover shadow-2xl hover:shadow-blue-200 transition-shadow duration-300" />
          </div>
        </div>
      </section>

      <section id="Skill" className="min-h-screen justify-center items-center flex flex-col py-20 px-8 ">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-[38px] text-black font-bold mt-9 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#0047AB] after:rounded-full">Skill</h1> 
        </div>
        <h2 className="text-[24px] text-black font-semibold text-center mt-12">
          Programming Language
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-8 bg-white/50 backdrop-blur-sm rounded-[16px] p-8 shadow-lg">
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
              <img src="/P_Language/html.svg" alt="html" className="w-[50px] h-[50px]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300">HTML</h2>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            <img src="/P_Language/css.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> CSS </h2>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            <img src="/P_Language/javascrpit.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> JavaScript </h2>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            <img src="/P_Language/python.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> Python </h2>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            <img src="/P_Language/sql.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> Sql </h2>
          </div>

          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            <img src="/P_Language/java.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> Java </h2>
          </div>
        </div>
        <h2 className="text-[24px] text-black font-semibold text-center mt-12">
          Framework
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-8 bg-white/50 backdrop-blur-sm rounded-[16px] p-8 shadow-lg">
          <div className="flex flex-col justify-center items-center group ">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300" >
            <img src="/Framework/springboot.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> Spring Boot </h2>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300" >
            <img src="/Framework/react.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> React </h2>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300]" >
            <img src="/Framework/Vector.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> Expo </h2>
          </div>
        </div>
        <h2 className="text-[24px] text-black font-semibold text-center mt-12">
          Design Tool
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-8 bg-white/50 backdrop-blur-sm rounded-[16px] p-8 shadow-lg">
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300]" >
            <img src="/Design_Tool/figma.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> Figma </h2>
          </div>
          <div className="flex flex-col justify-center items-center group">
            <div className="p-4 bg-white rounded-[16px] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300]" >
            <img src="/Design_Tool/frammer.svg" alt="python" className="w-[50] h-[50]" />
            </div>
            <h2 className="text-[16px] text-black font-semibold mt-3 group-hover:text-[#0047AB] transition-colors duration-300"> Framer </h2>
          </div>
        </div>
        
      </section>

      <section id="Portfolio" className="w-full min-h-screen pt-20 px-8 pb-5 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-[38px] text-black font-bold mt-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#0047AB] after:rounded-full">Portfolio</h1> 
        </div>
        
        <div className="flex flex-col mt-12 max-w-6xl mx-auto">
          <h1 className="text-[24px] text-black font-semibold">MFU Active & New (Web App)</h1>
          <p className="text-[16px] text-gray-700 font-medium mt-3 w-full md:w-[70%]">
            A web app designed for MFU students to easily track student development activities, stay updated on the latest events, and collect participation hours—all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center group">
            <img src="/MFU/Signin.jpg" alt="Sign in" className="w-full h-auto rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center items-center group">
            <img src="/MFU/Dashboard.jpg" alt="python" className="w-[240] h-auto rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center items-center group">
            <img src="/MFU/Activites.png" alt="python" className="w-[230] h-auto rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center items-center group">
            <img src="/MFU/Calendar.jpg" alt="python" className="w-[255] h-auto rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </div>
        </div>

        <div className="flex flex-col mt-16 max-w-6xl mx-auto">
          <h1 className="text-[24px] text-black font-semibold">Fortune (Mobile Application)</h1>
          <p className="text-[16px] text-gray-700 font-medium mt-3 w-full md:w-[70%]">
            Fortune is a daily and monthly horoscope app with love, career, finance, and health readings. Auto-detects your zodiac sign based on birthdate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center group">
            <img src="/Fortune/Homepage.jpg" alt="Homepage" className="w-[137] h-auto rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center items-center group">
            <img src="/Fortune/Horoscope.jpg" alt="python" className="w-[120] h-auto rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center items-center group">
            <img src="/Fortune/Result.jpg" alt="python" className="w-[120] h-auto rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center items-center group">
            <img src="/Fortune/Profile.jpg" alt="python" className="w-[120] h-auto rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </div>
        </div>
      </section>
    </div>
  );
}
