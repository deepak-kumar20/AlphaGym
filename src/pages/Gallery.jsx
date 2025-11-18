import React from 'react'
import GalleryGrid from '../components/GalleryGrid'
import useSmoothScroll from '../hooks/useSmoothScroll'

export default function Gallery(){
  useSmoothScroll()
  return (
    <div>
      <div className="py-8 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Gallery</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Glimpses of our facility, equipment, and community.</p>
      </div>
      <GalleryGrid />
    </div>
  )
}
