import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import { SplitText } from 'gsap/all';
import Line from '/src/images/Line.svg'; 


const Hero = () => {



    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'lines' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        gsap.from(heroSplit.lines, {
            yPercent: 150,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 150,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        // Floating scroll indicator
        gsap.to('.scroll-indicator', {
            y: 10,             // move down 10px
            repeat: -1,        // infinite
            yoyo: true,        // move back up
            ease: 'power1.inOut',
            duration: 1,       // 1 second up/down
            delay: 2           // optional delay after initial animations
        });

        console.log('SplitText:', SplitText);
    }, []);

     const scrollToDefinition = () => {
    gsap.to(window, {
      scrollTo: '#definition',
      duration: 1.2,
      ease: 'power2.inOut',
    });
  };

    return (
        <>
            <section id="hero">
                <div className="flex flex-col items-center">
                    <h1 className='title pt-20'>Leberkrebs</h1>
                            <img 
                                src={Line} 
                                alt="Decorative line" 
                                className="mt-4 mb-6"
                            />
                    <h3 className='subtitle mt-10'>Eine interaktive Geschichte</h3>
                    <p className='subtitle'>von LUISA FLAIG</p>
                    <p className='subtitle scroll-indicator pt-50 cursor-pointer'
                    onClick={scrollToDefinition}>zum Beginnen Scrollen</p>
                </div>
            </section>
        </>
    );
}

export default Hero;
