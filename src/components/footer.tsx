// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <div className="text-sm text-gray-400">
         🌟 © {new Date().getFullYear()} TechGirls — Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
