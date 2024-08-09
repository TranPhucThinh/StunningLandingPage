'use client'

import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

import CheckIcon from '@/assets/check.svg'

const pricingTiers = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 19,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
]

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="title-gradient text-center">Pricing</h2>
          <p className="description-gradient mt-5 text-[22px] leading-[30px] text-center">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 items-center mt-10">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                className={twMerge(
                  'card',
                  inverse && 'bg-black border-black text-white/60'
                )}
                key={index}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={twMerge(
                      'text-[18px] font-bold leading-7 tracking-tighter text-black/50',
                      inverse && 'text-white/50'
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text"
                        animate={{
                          backgroundPositionX: '-100%',
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                          repeatType: 'loop',
                        }}
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span
                    className={twMerge(
                      'text-4xl leading-9 font-bold tracking-tighter text-black',
                      inverse && 'text-white'
                    )}
                  >
                    ${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      'tracking-tight font-bold text-black/50',
                      inverse && 'text-white/50'
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    'btn btn-primary w-full mt-[30px]',
                    inverse && 'bg-white text-black'
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
