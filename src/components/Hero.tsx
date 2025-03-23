import Image from "next/image";
import { Button } from "./ui/button";
import FireSvg from "@/assets/svg/fire.svg"
import Exclamation from "@/assets/svg/exclamation.svg"
import Exclamation2 from "@/assets/svg/exclamation2.svg"
import PaavGang from "@/assets/svg/PaavGang.svg"
import Arrow from "@/assets/svg/arrow.svg"
import Link from "next/link";

export default function Hero() {

    const merchImages = [
        "https://res.cloudinary.com/drynqkitl/image/upload/v1742759535/black-half_ywdfra.webp",
        "https://res.cloudinary.com/drynqkitl/image/upload/v1742759535/blue-full_xbfxvq.webp",
        "https://res.cloudinary.com/drynqkitl/image/upload/v1742759535/black-full_kmxzgj.webp"
    ]

    return (
        <main className="w-full flex flex-col items-center pb-10">
            {/* logo and tagline */}
            <div className="flex flex-col gap-6 mt-8 justify-center items-center">
                <h1 className="w-52 md:w-96.5">
                    <Image
                        src="https://res.cloudinary.com/drynqkitl/image/upload/v1742750210/logo_eik8we.png"
                        alt="logo"
                        width={1000}
                        height={1000}
                    />
                </h1>
                <h3 className="text-center font-turret-road text-base font-bold">
                    ALTF4 YOUR OLD CLOTHS <br />
                    AND STEP UP STYLE WITH GOATED MERCHS
                </h3>
            </div>
            {/* merchs */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-7 mt-6.5">
                {
                    merchImages.map((src, i) => (
                        <div key={i} className={`
                            ${i === merchImages.length - 1 && "md:col-span-2 md:mx-auto lg:col-span-1"}
                            w-68 md:w-80 h-44 md:h-65 border rounded-[72px] overflow-hidden
                            flex justify-center items-center pt-24`}>
                            <Image
                                src={src}
                                alt="merch-image"
                                width={5000}
                                height={5000}
                                className="object-center"
                            />
                        </div>
                    ))
                }
                <span className="absolute lg:bottom-63 md:bottom-60 bottom-40 lg:-right-8 md:right-34 -right-10">
                    <Image
                        src={Exclamation}
                        alt="exclamation"
                        width={1000}
                        height={1000}
                        className="w-16"
                    />
                </span>
                <span className="absolute lg:bottom-61 md:bottom-57 bottom-36 lg:-right-9 md:right-33 -right-10">
                    <Image
                        src={Exclamation2}
                        alt="exclamation"
                        width={1000}
                        height={1000}
                        className="w-12"
                    />
                </span>
                <span className="absolute md:top-17 top-18 md:-left-26 -left-16">
                    <Image
                        src={PaavGang}
                        alt="exclamation"
                        width={1000}
                        height={1000}
                        className="w-16 md:w-24"
                    />
                </span>
                <span className="absolute top-22 md:-left-15 -left-9">
                    <Image
                        src={Arrow}
                        alt="exclamation"
                        width={1000}
                        height={1000}
                        className="w-16 md:w-24"
                    />
                </span>
            </div>
            {/* buttons */}
            <div className="w-full flex items-center justify-center gap-4 mt-12 ">
                <Link href='/product'>
                    <Button
                        className="w-42 flex items-center"
                        variant="accent">
                        <Image
                            src={FireSvg}
                            alt="button-image"
                        />
                        <span className="font-turret-road font-extrabold uppercase">Hot Seller</span>
                    </Button>
                </Link>
                <Link href='/product'>
                    <Button
                        className="w-42 flex items-center"
                        variant="white">
                        <span className="h-4 w-4 rounded-full bg-neutral-900" />
                        <span className="font-turret-road font-extrabold uppercase">See Products</span>
                    </Button>
                </Link>
            </div>
        </main>
    )
}
