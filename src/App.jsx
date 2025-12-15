import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Definition from './components/Definition';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App =() => {
    return (
        <main>
            <Navbar></Navbar>
            <Hero></Hero>
            <Definition></Definition>
        </main>
       
    )
}

export default App