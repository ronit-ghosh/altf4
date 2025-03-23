"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import Polygon from "@/assets/svg/Polygon.svg"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProductSize() {
    const [size, setSize] = useState("M")

    return (
        <div className="flex gap-4 items-center font-unbounded">
            <span className="flex gap-2">
                <Image
                    src={Polygon}
                    alt="polygon"
                    width={5000}
                    height={5000}
                    className="w-5"
                />
                <span>Blue</span>
            </span>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        Size
                        <span>
                            <ChevronDown />
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32 text-center font-unbounded">
                    <DropdownMenuLabel>Select Size</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={size} onValueChange={setSize}>
                        <DropdownMenuRadioItem value="S">XS</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="S">S</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="M">M</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="L">L</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="XL">XL</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>

                </DropdownMenuContent>
            </DropdownMenu>

            <Button size="icon">{size}</Button>
        </div>
    )
}
