import Image from "next/image";
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="w-full h-50 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-400">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full gap-2 mt-10">
          <Image alt="Logo" src="/tech.png" width={300} height={300}></Image>
          <div className="flex gap-14">
            <Link className="cursor-pointer text-white hover:text-[#e8e7e7]" href="#about" scroll={true}>Sobre</Link>
            <Link className="cursor-pointer text-white hover:text-[#e8e7e7]" href="#projects">Projetos</Link>
            <Link className="cursor-pointer text-white hover:text-[#e8e7e7]" href="#contact" scroll={true}>Contato</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 hidden md:block">
        <div className="absolute w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px] opacity-50 top-10 left-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-50 bottom-20 right-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-400 rounded-full blur-[100px] opacity-40 top-1/2 left-1/3"></div>
      </div>
    </div>

  );
}
