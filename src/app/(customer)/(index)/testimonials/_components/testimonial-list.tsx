import React from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: '/photos/p1.png',
    rating: 5,
    date: '2 days ago',
    comment: 'Amazing products and fast delivery! The quality exceeded my expectations. Will definitely shop here again.',
    product: 'iPhone 15 Pro',
    verified: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: '/photos/p2.png',
    rating: 5,
    date: '1 week ago',
    comment: 'Great customer service and competitive prices. The warranty coverage gives me peace of mind.',
    product: 'MacBook Air M2',
    verified: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: '/photos/p3.png',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Good selection of products. Shipping was a bit slow but overall satisfied with the purchase.',
    product: 'AirPods Pro',
    verified: true
  },
  {
    id: 4,
    name: 'David Kim',
    avatar: '/photos/p4.png',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Excellent experience! The product arrived in perfect condition and the price was unbeatable.',
    product: 'iPad Air',
    verified: true
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    avatar: '/photos/p1.png',
    rating: 5,
    date: '1 month ago',
    comment: 'Best online shopping experience ever! Fast delivery, great prices, and authentic products.',
    product: 'Apple Watch Series 9',
    verified: true
  },
  {
    id: 6,
    name: 'James Wilson',
    avatar: '/photos/p2.png',
    rating: 4,
    date: '1 month ago',
    comment: 'Very satisfied with my purchase. The website is easy to navigate and checkout was smooth.',
    product: 'iMac 24"',
    verified: true
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          src={index < rating ? "/icons/Star.svg" : "/icons/Star-gray.svg"}
          alt="star"
          width={16}
          height={16}
        />
      ))}
    </div>
  )
}

export default function TestimonialList() {
  return (
    <div className="container max-w-[1130px] mx-auto mt-[50px] pb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-[20px] border border-[#E5E5E5] p-6 hover:ring-2 hover:ring-[#FFC736] transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex shrink-0 rounded-full overflow-hidden">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  width={48} 
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-black">{testimonial.name}</h3>
                  {testimonial.verified && (
                    <div className="w-4 h-4 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center">
                      <Image src="/icons/tick-circle.svg" alt="verified" width={12} height={12} />
                    </div>
                  )}
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="text-xs text-[#616369]">{testimonial.date}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-[#616369] leading-5 mb-2">
                &quot{testimonial.comment}&quot
              </p>
              <div className="inline-block bg-[#EFF3FA] px-3 py-1 rounded-full">
                <span className="text-xs text-[#0D5CD7] font-medium">
                  Purchased: {testimonial.product}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
