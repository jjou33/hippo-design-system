/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        height: "calc((100vh - 113px))", // 70% of remaining height
        marginTop: "10px",
      }}
    >
      <div className="relative size-full w-full">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/heroBackground.gif"
            alt="Hero Background"
            fill
            sizes={"(max-width: 780px) 100vw, 80vw"}
            priority
            unoptimized
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Welcome to Our Platform</h1>
          <p className="mb-6 text-xl">
            Discover amazing features and experiences!
          </p>
          <a
            href="#explore"
            className="rounded bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-600"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
