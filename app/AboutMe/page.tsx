import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";
function page() {
  return (
    <div className=" pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px] ">
      <div className=" w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center   justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div>
      <div className=" w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px] ">
        <div className=" text-gray-400 text-[14px]">Sun Aug 13 2022</div>
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade ">
          Hey I am founder of Quantum Shield, Ryan Golden
        </div>
        <div className=" text-gray-300    animate-slideright ">
          Ryan is a multi-vendor certified network engineer, who has experience in quantum algorithms and recieved his certification from IBM for Quantum Computation using Qiskit v0.2x, he is also serial entrprenuer who has operated a plethora of succesful businesses including an AI derivative hedge fund, asset recovery company and now a quantum cybersecurity company. He studied Telecommunications at the University of Florida where he learned about how technology has advanced throughout the decades and the humongous impact it has made on peoples lives. He then went on to pursue higher education and stuided quantum algorithms, quantum physics and sattelite enginering at the Michigan Insitute of Technology (MIT) under Peter Shors tutalage. Ryan would 
          then go on to team up with a group of highly skilled physicist, mathematicians, engineers, chemist and visionaries who want to make the world a better place. 
        </div>
        <div>
          <div className="text-[20px]  my-[15px]  animate-slideright ">
            <span className="monospace">Our Mission: </span>
            <span className="text-rose-600"> Autonomous AI  Defense </span> ,
            <span className="text-emerald-500"> Quantum Security </span> ,
            <span className=" text-[#F48024]"> Responsive Solutions </span>
          </div>
        </div>
        <div className="text-gray-300  animate-slideright">
          At QuantumShield Cybersecurity, our mission is to empower individuals and organizations with unparalleled proteciton
          in the digital realm through cutting-edge quantum ai technologies and algorithms. We recognize that traditional cybersecurity measures are no longer sufficient to combat the evolving threat landscape. As the world becomes
          increasingly interconnected and reliant on digital infrastruce, the potential for cyberattacks has grown expontially. At QuantumShield, we are dedicated to harnassing the power of    <span className="text-sky-500"> Quantum-resistant algorithms </span> and,
          <span className="text-yellow-500"> post-quantum cryptography. </span>
        </div>
        <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
         Our Vision
        </div>
        <div className="mt-4  animate-slideright    leading-[30px] monospace text-[16px] 800:text-[20px]">
          At QuantumShield our vision is guided by a strong set of  {" "}
          <span className=" text-blue-500 ">Ethics</span> and{" "}
          <span className=" text-yellow-500"> Responsibility</span> to protect 
          your companies data and network infrastrcutrue from attacks like <span className=" text-cyan-500">Malware,</span>{" "}
          <span className="  text-teal-500"> DDoS,</span> or
          <span className="text-[#433a74] "> Backdoor Viruses. </span>. As we emabrk on this journey, our focus remains resolute: to empower and protect people in a quantum-powered world. 
          We understand that the evolving nature of cyber threats demands continous adaptation and innovation, and we pledge to reamin at the 
          forefront of this ever-changing landsacpe. Together, with our parters and stakeholders, we will usher in a new era of qunatum cyberescuirty that secures the digital realm for generations to come.
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade  ">
          Board of Directors 
        </div>
        <div className=" text-gray-300  my-[15px]  animate-slideright">
        <span className="text-rose-600 text-[20px]"> Chairman - JT Foxx: </span> JT Foxx is a global entrepreneur and investor doing business in 55 countries and has clients in 104 amassing over a 9-figure portfolio. His projects include owning his own social media company, tech investments, owning malls, multi-unit apartments, hotel, single family homes & development, global entertainment & experiential companies.
        </div>
        <div className=" text-gray-300  my-[15px]  animate-slideright">
        <span className="text-emerald-500 text-[20px]"> Cheif Operating Officer (COO) - Adam Coffee: </span> Adam Coffey is a military veteran and engineer who is a private equity expert who has bought and sold over 80 companies witha 9-figure net worth in the process. He runs Advisory Guru, a private equity consultancy firm that coaches business to become extremely valuable in the marketplace in order for acquistions to occur, and is a best selling offer. 
        He sits on the board of over 20 companies, guiding them to remain lucrative and innovative in any economic condition. 
        </div>
        <div className=" text-gray-300  my-[15px]  animate-slideright">
        <span className="text-[#F48024] text-[20px]"> Industry Expert - Peter Shor: </span> Peter is a professor of applied mathematics, quantum computation, and quantum information at Michigan Institute of Technology. Peter Shor was the pioneer of the Shors algorithm which is a qunatum algorithm that efficiently modifies large intergers into their prime factors. This algorithm demonstrates the ability for the quantum computer to crack complex algorithms such as the WPA2 AES 128 + 256 utilizing prime factorization 
        and also has the capability to generate a new type of quantum algorithm. 
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Backend Data Secuirty
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
        Welcome to the forefront of data protection with QuantumShield V3, the latest evolution in backend server security software. Designed to address the ever-growing threats to your critical infrastructure,
         QuantumShield V3 combines cutting-edge quantum technologies with advanced cybersecurity measures, ensuring the highest level of protection for your backend servers. Say goodbye to vulnerabilities and embrace a new era of uncompromising security.
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade ">
          Mobile Application 📱
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
        Experience a new era of mobile data security with QuantumGuard Mobile -   an innovative application designed to empower you with unmatched protection for your sensitive information, ensuring your data remains shielded against evolving threats. With the growing complexities of cybersecurity,
        traditional methods are no longer sufficient. QuantumGuard Mobile harnesses the power of quantum technologies to safeguard your data in an ever-connected world.
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade ">
          Desktop Software 🪟🍎
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
        Experience the future of data security with QuantumSecure Desktop Suite a cutting-edge software solution designed to provide unparalleled protection for your sensitive information. As the threat landscape evolves, traditional encryption methods are facing challenges from emerging quantum computing capabilities. 
        QuantumSecure Desktop Suite rises to the occasion by harnessing the power of quantum technologies to fortify your data against current and future threats. Utilzing Quantum Key Distribution and Quantum-Safe Algorithms your data
        will have the utmost secuirty and integrity, making your data communicaiton and network impenetrable. 
        </div>
        <Link
          href={"/Project"}
          className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] "
        >
          See our 
          <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
            Solutions
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default page;
