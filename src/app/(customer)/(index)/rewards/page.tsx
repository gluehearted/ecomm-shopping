import React from 'react'
import Navbar from '../_components/navbar'
import RewardsList from './_components/rewards-list'
import Image from 'next/image'

export default function RewardsPage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] h-[480px] -mb-[310px]">
        <Navbar />
      </header>
      <div id="title" className="container max-w-[1130px] mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">Shop</a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">Rewards</a>
          </div>
          <h1 className="font-bold text-4xl leading-9">Loyalty Rewards</h1>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div className="flex items-center">
            <div className="flex shrink-0">
              <Image src="/icons/Star.svg" alt="star" width={20} height={20} />
            </div>
            <div className="flex shrink-0">
              <Image src="/icons/Star.svg" alt="star" width={20} height={20} />
            </div>
            <div className="flex shrink-0">
              <Image src="/icons/Star.svg" alt="star" width={20} height={20} />
            </div>
            <div className="flex shrink-0">
              <Image src="/icons/Star.svg" alt="star" width={20} height={20} />
            </div>
            <div className="flex shrink-0">
              <Image src="/icons/Star-gray.svg" alt="star" width={20} height={20} />
            </div>
          </div>
          <p className="font-semibold">(4.8/5)</p>
        </div>
      </div>
      <RewardsList />
    </>
  )
}
