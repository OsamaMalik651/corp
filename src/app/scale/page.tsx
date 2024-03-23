import React from 'react'
import scaleImg from '/public/scale.jpg'
import Image from 'next/image'
import Hero from '@/components/Hero'
export default function ScalePage() {
    return (
        <Hero imgData={scaleImg} imgAlt='steel factory' title='Scale your app to infinity' />
    )
}
