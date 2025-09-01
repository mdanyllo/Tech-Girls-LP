import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-400">
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px] opacity-50 top-10 left-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-50 bottom-20 right-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-400 rounded-full blur-[100px] opacity-40 top-1/2 left-1/3"></div>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-10">
        <div className="flex flex-col justify-center items-center w-full">
            <Image alt="Logo" src="/tech.png" width={300} height={300}></Image>
        </div>
      </div>
    </div>

  );
}
