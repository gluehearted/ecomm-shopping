import React from 'react'
import Image from 'next/image'

const rewards = [
  {
    id: 1,
    tier: 'Bronze',
    icon: '/icons/crown.svg',
    color: 'bg-amber-600',
    points: '0-999',
    benefits: [
      '5% cashback on all purchases',
      'Free standard shipping',
      'Access to exclusive deals',
      '24/7 customer support'
    ],
    requirements: 'New customers start here'
  },
  {
    id: 2,
    tier: 'Silver',
    icon: '/icons/crown.svg',
    color: 'bg-gray-400',
    points: '1000-2499',
    benefits: [
      '8% cashback on all purchases',
      'Free express shipping',
      'Priority customer support',
      'Birthday month bonus',
      'Early access to sales'
    ],
    requirements: 'Spend $1000+ to unlock'
  },
  {
    id: 3,
    tier: 'Gold',
    icon: '/icons/crown.svg',
    color: 'bg-yellow-400',
    points: '2500-4999',
    benefits: [
      '12% cashback on all purchases',
      'Free premium shipping',
      'VIP customer support',
      'Exclusive product launches',
      'Personal shopping assistant',
      'Extended return period'
    ],
    requirements: 'Spend $2500+ to unlock'
  },
  {
    id: 4,
    tier: 'Platinum',
    icon: '/icons/crown.svg',
    color: 'bg-purple-500',
    points: '5000+',
    benefits: [
      '15% cashback on all purchases',
      'Free worldwide shipping',
      'Dedicated account manager',
      'Invitation to VIP events',
      'Custom product bundles',
      'Lifetime warranty upgrade'
    ],
    requirements: 'Spend $5000+ to unlock'
  }
]

export default function RewardsList() {
  return (
    <div className="container max-w-[1130px] mx-auto mt-[50px] pb-[100px]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0D5CD7] to-[#FFC736] rounded-[20px] p-8 mb-12 text-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 flex shrink-0 rounded-full bg-white/20 items-center justify-center">
            <Image src="/icons/dollar-circle.svg" alt="rewards" width={32} height={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Earn Points with Every Purchase</h2>
            <p className="text-white/90">Join our loyalty program and unlock exclusive benefits</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1 Point</div>
            <div className="text-sm text-white/80">per $1 spent</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100 Points</div>
            <div className="text-sm text-white/80">= $1 cashback</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">No Expiry</div>
            <div className="text-sm text-white/80">points never expire</div>
          </div>
        </div>
      </div>

      {/* Rewards Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="bg-white rounded-[20px] border border-[#E5E5E5] p-6 hover:ring-2 hover:ring-[#FFC736] transition-all duration-300"
          >
            <div className="text-center mb-6">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${reward.color} flex items-center justify-center`}>
                <Image 
                  src={reward.icon} 
                  alt={reward.tier} 
                  width={40} 
                  height={40}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{reward.tier}</h3>
              <div className="inline-block bg-[#EFF3FA] px-3 py-1 rounded-full">
                <span className="text-sm text-[#0D5CD7] font-medium">
                  {reward.points} points
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-black mb-3">Benefits:</h4>
              <ul className="space-y-2">
                {reward.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FFC736] mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-[#616369] leading-5">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-[#616369] italic">{reward.requirements}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFC736] flex items-center justify-center text-2xl font-bold text-white">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Shop & Earn</h3>
            <p className="text-[#616369]">Make purchases and automatically earn points</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFC736] flex items-center justify-center text-2xl font-bold text-white">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Unlock Benefits</h3>
            <p className="text-[#616369]">Reach thresholds to unlock exclusive rewards</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFC736] flex items-center justify-center text-2xl font-bold text-white">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Redeem & Save</h3>
            <p className="text-[#616369]">Use points for cashback and special offers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
