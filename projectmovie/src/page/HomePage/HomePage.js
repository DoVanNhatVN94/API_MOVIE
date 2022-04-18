import React from 'react'
import BookTicker from '../../component/common/BookTicker'
import CarouselListMovie from './CarouselListMovie'

export default function HomePage() {
  return (
    <div>
      <CarouselListMovie/>
      <BookTicker/>
    </div>
  )
}
