import Hero from '@/components/Hero'
import React from 'react';
import performanceImg from "/public/performance.jpg";


export default function PerformancePage() {
    return (
        <Hero imgData={performanceImg} imgAlt='welding' title='Blazing fast Performance' />
    )
}
