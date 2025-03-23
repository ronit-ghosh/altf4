import Image from 'next/image'
import Cross from "@/assets/svg/cross.svg"
import Exclamation from "@/assets/svg/product-exclamation.svg"

export default function ProductPrice() {
    return (
        <div className="relative flex gap-7 font-turret-road text-xl">
            <span className="text-primary/60">Rs. 1,800</span>
            <Image
                src={Cross}
                alt="arrow"
                width={5000}
                height={5000}
                className="absolute top-2 -left-3.5 w-27"
            />
            <span className="">Rs. 1,499</span>
            <Image
                src={Exclamation}
                alt="arrow"
                width={5000}
                height={5000}
                className="absolute -top-1 left-47 w-3.5"
            />
        </div>
    )
}
