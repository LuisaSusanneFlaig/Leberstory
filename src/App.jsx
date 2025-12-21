import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Definition from './components/Definition';
import Leber from './components/Leber';
import Deutschland from './components/Deutschland';
import Organe from './components/Organe';
import Sectionsechs from './components/Sectionsechs';
import Sectionsieben from './components/Sectionsieben';
import Sectionacht from './components/Sectionacht';
import Sectionneun from './components/Sectionneun';
import Sectionzehn from './components/Sectionzehn';
import Sectionelf from './components/Sectionelf';
import Sectionzwoelf from './components/Sectionzwoelf';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App =() => {
    return (
        <main>
            <Navbar></Navbar>
            <Hero></Hero>
            <Definition></Definition>
            <Leber></Leber>
            <Deutschland></Deutschland>
            <Organe></Organe>
            <Sectionsechs></Sectionsechs>
            <Sectionsieben></Sectionsieben>
            <Sectionacht></Sectionacht>
            <Sectionneun></Sectionneun>
            <Sectionzehn></Sectionzehn>
            <Sectionelf></Sectionelf>
            <Sectionzwoelf></Sectionzwoelf>

            
        </main>
       
    )
}

export default App