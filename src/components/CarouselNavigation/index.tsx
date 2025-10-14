'use client'

import React from 'react'

interface CarouselNavigationProps {
  onPrevClick: () => void
  onNextClick: () => void
}

const CarouselNavigation = ({ onPrevClick, onNextClick }: CarouselNavigationProps) => {
  return (
    <>
      {/* Botão Anterior */}
      <button
        onClick={onPrevClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-background-dark shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
        aria-label="Anterior"
      >
        <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">⟵</span>
      </button>

      {/* Botão Próximo */}
      <button
        onClick={onNextClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-background-dark shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
        aria-label="Próximo"
      >
        <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">⟶</span>
      </button>
    </>
  )
}

export default CarouselNavigation
