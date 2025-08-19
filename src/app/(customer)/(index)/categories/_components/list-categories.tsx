import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: '/icons/monitor.svg',
    productCount: 45,
    description: 'Latest electronic devices and gadgets'
  },
  {
    id: 2,
    name: 'Fashion',
    image: '/icons/crown.svg',
    productCount: 32,
    description: 'Trendy fashion items and accessories'
  },
  {
    id: 3,
    name: 'Home & Living',
    image: '/icons/house-2.svg',
    productCount: 28,
    description: 'Furniture and home decoration'
  },
  {
    id: 4,
    name: 'Sports',
    image: '/icons/game.svg',
    productCount: 23,
    description: 'Sports equipment and activewear'
  },
  {
    id: 5,
    name: 'Beauty',
    image: '/icons/cup.svg',
    productCount: 19,
    description: 'Beauty products and skincare'
  },
  {
    id: 6,
    name: 'Books',
    image: '/icons/note.svg',
    productCount: 15,
    description: 'Books, magazines, and educational materials'
  }
]

export default function ListCategories() {
  return (
    <div className="container max-w-[1130px] mx-auto mt-[50px] pb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/catalogs?category=${category.id}`}
            className="bg-white rounded-[20px] border border-[#E5E5E5] p-6 hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  width={32} 
                  height={32}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg leading-6 text-black group-hover:text-[#0D5CD7] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-[#616369] leading-5">
                  {category.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#0D5CD7] font-semibold">
                    {category.productCount} products
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#0D5CD7]"></div>
                  <span className="text-xs text-[#616369]">Available</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
