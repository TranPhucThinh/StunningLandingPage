'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import { useRef } from 'react'

export const ProductShowcase = () => {
  const productShowcaseRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={productShowcaseRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="title-gradient text-3xl md:text-[54px] md:leading-[60px] mt-5 text-center">
            A more effective way to track progress
          </h2>
          <p className="description-gradient text-[22px] leading-[30px] mt-5 text-center">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            className="hidden md:block absolute -right-36 -top-32"
            width={262}
            height={262}
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            className="hidden md:block absolute -left-36 bottom-24"
            width={248}
            height={248}
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  )
}
