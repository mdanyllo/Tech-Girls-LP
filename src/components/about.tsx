"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/tg1.jpg",
  "/allure.jpeg",
  "/helena.jpeg",
  "/yoko.jpeg",
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
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <h1 className="text-4xl mb-6">Conheça-nos</h1>

      {/* Carrossel */}
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

      <div className="w-70 mt-6">
        <p className="text-center">
          Lorem ipsum dolor sit amet. Et quidem dolorem non nulla
          reprehenderit sit ratione quia est consequatur illo...Lorem ipsum dolor sit amet. Et quidem dolorem non nulla
          reprehenderit sit ratione quia est consequatur illo...
        </p>
      </div>
    </div>
  );
}
