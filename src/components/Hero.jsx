import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from 'gsap/all';


const Hero = () => {

    useGSAP(()=> {
        const heroSplit = new SplitText ('.title', {type: 'lines'});
        const paragraphSplit = new SplitText ('.subtitle', {type: 'lines'});



        gsap.from(heroSplit.lines, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay:1,

        })
        console.log('SplitText:', SplitText);
    },[]);


    return (
        <>
        <section id="hero">
           <h1 className ='title'>Leberkrebs</h1>
           <h3 className='subtitle'>Eine interaktive Geschichte</h3>
           <p className='subtitle'>von LUISA FLAIG</p>

        </section>


         </>
    )

}
export default Hero
