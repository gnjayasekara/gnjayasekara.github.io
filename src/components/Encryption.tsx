import { createSignal } from "solid-js";
import { Motion } from "solid-motionone"; // SolidJS equivalent of Framer Motion
import "@/styles/global.css"; // Ensure your styles are properly imported

export const Encryption = () => {
  const [hovered, setHovered] = createSignal(false); // Signal for hover effects

  return (
    <div class="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      {/* Animated Text */}
      <div class="absolute w-auto h-auto top-0 z-[5]">
        <Motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          class="text-[40px] font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            & security.
          </span>
        </Motion.div>
      </div>

      {/* Lock Icon and Text */}
      <div class="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div
          class="flex flex-col items-center group cursor-pointer w-auto h-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            classList={{
              "translate-y-5 transition-all duration-200": true,
              "group-hover:translate-y-11": hovered(),
            }}
          />
          <img
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            class="z-10"
          />
        </div>

        <div class="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#0000008b] opacity-[0.9]">
          <h1 class="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      {/* Bottom Text */}
      <div class="absolute z-[20] bottom-[10px] px-[5px]">
        <div class="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      {/* Background Video */}
      <div class="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoplay
          playsinline
          preload="none"
          class="w-full h-auto"
        >
          <source src="/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
