import nasmoco from "../../../../assets/nasmoco.png";
import ram from "../../../../assets/ram.png";
import mrteknik from "../../../../assets/mrteknik.png";
import bpom from "../../../../assets/bpom.png";
import gofood from "../../../../assets/gofood.png";
import shoope from "../../../../assets/shoope.png";

export default function Client() {
  const logos = [nasmoco, ram, mrteknik, bpom, gofood, shoope];

  return (
     <section className="relative w-full py-10 bg-[#040414]/20 overflow-hidden">
      
      {/* 🔥 Overlay (biar sama kayak About) */}
      <div className="absolute inset-0 bg-[rgba(4,4,20,0.2)]"></div>

      {/* 🔥 Content */}
      <div className="relative z-10">
        

        <div className="relative w-full overflow-hidden">
          
          {/* Gradient kiri kanan (biar smooth & premium) */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#040414] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#040414] to-transparent z-10"></div>

          <div className="flex w-max animate-slide">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[140px] mx-6"
              >
                <img
                  src={logo}
                  alt={`client-${index}`}
                  className="object-contain w-auto h-12 transition duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}