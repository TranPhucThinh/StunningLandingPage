'use client'

import ArrowIcon from '@/assets/arrow-right.svg'
import Spring from '@/assets/spring.png'
import Start from '@/assets/star.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const CallToAction = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="title-gradient">Sign up for free today</h2>
          <p className="description-gradient text-center mt-5 text-[22px] leading-[30px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={Start.src}
            alt="start"
            width={360}
            height={360}
            style={{
              translateY,
            }}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            src={Spring.src}
            alt="spring"
            width={363}
            height={363}
            style={{
              translateY,
            }}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex justify-center mt-10 gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
