import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
      {/* 배너 이미지 */}
      <div className="h-24 bg-gradient-to-r from-yellow-400 to-blue-500"></div>

      {/* 프로필 이미지 */}
      <div className="relative -mt-12 flex justify-center">
        <Image
          src={"/profile.jpeg"}
          fill
          alt="profile"
          className="size-24 rounded-full border-4 border-white"
          priority
        />
      </div>

      {/* 이름과 닉네임 */}
      <div className="mt-4 text-center">
        <h1 className="text-xl font-semibold">Inpa Dev 👨‍💻</h1>
        <p className="text-gray-500">@인파_</p>
      </div>
    </div>
  );
}
