"use client"

import Image from 'next/image'
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react'
import { DialogTitle } from '@radix-ui/react-dialog'


export const works = [
  "https://res.cloudinary.com/drynqkitl/image/upload/v1742759535/blue-full_xbfxvq.webp",
  "https://res.cloudinary.com/drynqkitl/image/upload/v1742766700/back_eqlayj.webp",
  "https://res.cloudinary.com/drynqkitl/image/upload/v1742766701/front_psgr3n.webp",
  "https://res.cloudinary.com/drynqkitl/image/upload/v1742766701/closeup_fftium.webp"
]

export default function ProductImage() {
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <div className="mx-auto md:mx-0 flex flex-col gap-4">
      <div className="w-89 md:w-98 h-109 md:h-120 rounded-[72px] flex justify-center items-center overflow-hidden">
        <Dialog>
          <DialogTrigger className='cursor-pointer'>
            <Image
              src={works[currentImage]}
              alt="merch"
              width={5000}
              height={5000}
              className="object-cover"
            />
          </DialogTrigger>
          <DialogContent className=''>
            <DialogTitle />
            <Image
              src={works[currentImage]}
              alt="merch"
              width={5000}
              height={5000}
              className="object-cover"
            />
          </DialogContent>
        </Dialog>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-89 md:98 mx-auto"
      >
        <CarouselContent>
          {works.map((src, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="p-1">
                <Card className='p-0 rouded-[22px] overflow-hidden'>
                  <CardContent
                    onClick={() => setCurrentImage(index)}
                    className="flex w-30 h-30 items-center justify-center p-0">
                    <Image
                      src={src}
                      alt='merch'
                      width={5000}
                      height={5000}
                      className='object-cover'
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
