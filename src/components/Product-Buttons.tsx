import Robot from "@/assets/svg/robot.svg"
import Pouch from "@/assets/svg/pouch.svg"
import { Button } from './ui/button'
import Image from 'next/image'

export default function ProductButtons() {
    return (
        <div className="font-turret-road flex gap-6 mt-3 md:mt-8">
            <Button
                className="w-41"
                variant="accent">
                <Image
                    src={Robot}
                    alt="robot"
                />
                <span className="uppercase font-extrabold">Buy Now</span>
            </Button>
            <Button
                className="w-41"
                variant="white">
                <Image
                    src={Pouch}
                    alt="pouch"
                />
                <span className="uppercase font-extrabold">Add to Pouch</span>
            </Button>
        </div>
    )
}
