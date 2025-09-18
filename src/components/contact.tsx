import Image from "next/image";
import Link from "next/link"

export default function Contact () {
    return (
        <div id="contact" className="flex flex-col items-center mt-20">
            <h1 className="md:text-4xl text-3xl text-center">Canais para contato</h1>
            <div className="flex justify-between w-1/2 md:w-1/8 mt-10">
            <Link href="mailto:girlstech.time@gmail.com">
                <Image alt="Email" width={80} height={100} src="/e-mail.png"></Image>
            </Link>
            <Link href="https://www.instagram.com/somos.techgirls">
                <Image alt="Email" width={80} height={100} src="/instagram.png"></Image>
            </Link>
            </div>
            <h1 className="md:text-3xl text-2xl text-center mt-10" >Acesse nosso Instagram</h1>
            <p className="md:text-xl text-base text-center mb-6">Aponte a camêra do seu celular</p>
            <Image className=""  alt="QR Code Instagram" width={400} height={150} src="/qrcode.png"></Image>
        </div>
    )
}