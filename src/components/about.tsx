"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/tg1.jpg",
  "/img1.jpg",
  "/img2.jpg",
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="flex flex-col justify-center items-center w-full mt-10">
      <h1 className="text-4xl mb-12">Conheça-nos</h1>

      <div className="relative w-90 md:w-full max-w-2xl md:h-72 h-52 overflow-hidden rounded-2xl shadow-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="w-82 md:w-1/2 flex flex-col gap-6 mt-10 md:mt-16">
        <p className="text-center md:text-xl">
          A Tech Girls é uma iniciativa criada em 2024 por estudantes do IEMA situado em São José de Ribamar, composta integralmente por mulheres. 
        </p>
        <p className="text-center md:text-xl">
        Atualmente, a equipe é formada pelas alunas Ana Luiza Leal Ramos, Daniela Júlia Leal, Ester Garcês e Kayla Rebeca Lopes, contando também com vagas abertas para novas integrantes que atuam de forma alternada nos eventos.
        </p>
        <p className="text-center md:text-xl">
        Nosso grupo participa de campeonatos de tecnologia, game jams e eventos acadêmicos, com o objetivo de estimular a inovação e o protagonismo feminino na área tecnológica.
        </p>
        <p className="text-center md:text-xl">
        Desenvolvemos projetos sob a orientação dos professores tutores Renata Maria Sousa Castro e Julio César Fernandes, produzindo jogos sustentáveis com narrativas originais que valorizam a cultura maranhense, exploram elementos de magia e ação, além de exaltar a riqueza dos povos indígenas.
      </p>
      </div>
    </div>
  );
}
