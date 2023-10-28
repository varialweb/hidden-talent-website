"use client"

import { motion } from "framer-motion"

export default function Hero({ listing }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center"
    >
      <img src={listing.fields.company.fields.logo.url} alt="" width="150" />
      <h1 className="text-[44px] md:text-[48px] leading-tight text-center">{listing.fields.jobTitle}</h1>
      <div className="flex flex-wrap justify-center gap-y-12 lg:justify-between items-end w-full max-w-2xl mx-auto p-8 mt-4">
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/building.svg" alt="" className="h-[32px] w-auto" />{listing.fields.company.fields.name}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/maps-and-flags.svg" alt="" className="h-[28px] w-auto" />{listing.fields.location}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src={listing.fields.jobType === 'Full-time' ? '/full-time.svg' : '/part-time.svg'} alt="" className="h-[32px] w-auto" />{listing.fields.jobType}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/money.svg" alt="" className="h-[32px] w-auto" />${listing.fields.compensation}</p>
      </div>
    </motion.div>
  )
}