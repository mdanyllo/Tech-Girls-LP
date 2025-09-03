"use client";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="md:text-4xl text-center text-3xl">Conheça os nossos projetos</h1>
            <div className="flex md:flex-row flex-col justify-center gap-14 md:gap-10 mt-6">
            <Image className="rounded-sm" src="/allure.jpeg" alt="Allure" width="236" height="250"></Image>
            <Image className="rounded-sm" src="/yoko.jpeg" alt="Yoko" width="240" height="250"></Image>
            <Image className="rounded-sm" src="/helena.jpeg" alt="Helena" width="250" height="260"></Image>
            <Image className="rounded-sm" src="/ivy.jpeg" alt="Ivy" width="240" height="250"></Image>
            </div>
        </div>
    )
}