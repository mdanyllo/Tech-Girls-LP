"use client";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="text-4xl">Conheça os nossos projetos</h1>
            <div className="flex justify-center gap-10 mt-6">
            <Image className="rounded-sm" src="/allure.jpeg" alt="Allure" width="236" height="250"></Image>
            <Image className="rounded-sm" src="/yoko.jpeg" alt="Yoko" width="240" height="250"></Image>
            <Image className="rounded-sm" src="/helena.jpeg" alt="Helena" width="240" height="260"></Image>
            <Image className="rounded-sm" src="/ivy.jpeg" alt="Ivy" width="240" height="250"></Image>
            </div>
        </div>
    )
}