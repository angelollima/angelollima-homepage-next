//Importing components from Next/React
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

//Importing icons from React-Icons
import { GoMarkGithub } from 'react-icons/go';
import { MdFindInPage } from 'react-icons/md';

//Importing layouts
import Button from '../../components/Button';
import ImageSwiper from '../../components/ImageSwiper';

//Importing images
import MemoryGameBack from '../../public/img/memory-game-back.png';
import MemoryGameFront from '../../public/img/memory-game-front.png';
import LandingPageDark from '../../public/img/landing-page-dark.png';
import LandingPageCreateDark from '../../public/img/landing-page-create-dark.png';
import LandingPageLight from '../../public/img/landing-page-light.png';
import LandingPageCreateLight from '../../public/img/landing-page-create-light.png';
import Watch from '../../public/img/watch.png';

export function MemoryGame() {
    return (
<       div className="space-y-4">
            <h1 className="text-[15px] font-semibold text-center">Memory Game</h1>
            {/*Carousel*/}
            <ImageSwiper className="rounded-lg z-20">
                <SwiperSlide><Image src={MemoryGameBack} className="rounded-lg" alt='Memory Game Back Card'/></SwiperSlide>
                <SwiperSlide><Image src={MemoryGameFront} className="rounded-lg" alt='Memory Game Front Card'/></SwiperSlide>
            </ImageSwiper>
            <p>Memory Games buid in ReactJs.</p>

            <div className="flex justify-evenly">
                <Button href="https://angelollima-memory-game.vercel.app/" text="Visit the site" icon={<MdFindInPage size={16}/>} />
                <Button href="https://github.com/angelollima/memory-game" text="View code" icon={<GoMarkGithub />} />
            </div>
        </div>
    )
}

export function LandingPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-[15px] font-semibold text-center">Landing Page</h1>
            {/*Carousel*/}
            <ImageSwiper className="rounded-lg z-20">
                <SwiperSlide><Image src={LandingPageDark} className="rounded-lg" alt='Landing Page mode Dark'/></SwiperSlide>
                <SwiperSlide><Image src={LandingPageCreateDark} className="rounded-lg" alt='Landing Page mode Light'/></SwiperSlide>
                <SwiperSlide><Image src={LandingPageLight} className="rounded-lg" alt='Landing Page mode Light'/></SwiperSlide>
                <SwiperSlide><Image src={LandingPageCreateLight} className="rounded-lg" alt='Landing Page mode Light'/></SwiperSlide>
            </ImageSwiper>
            <p>Landing Page created with the aim of welcoming the customer in a clean and cozy way.</p>

            <div className="flex justify-evenly">
                <Button href="https://angelollima-landing-page.vercel.app/" text="Visit the site" icon={<MdFindInPage size={16}/>} />
                <Button href="https://github.com/angelollima/landing-page" text="View code" icon={<GoMarkGithub />} />
            </div>
        </div>
    )
}

export function DigitalWatch() {
    return (
        <div className="space-y-4">
            <h1 className="text-[15px] font-semibold text-center">Digital Watch</h1>
            {/*carousel*/}
            <ImageSwiper className="rounded-lg z-20">
                <SwiperSlide><Image src={Watch} className="rounded-lg" alt='Digital Watch'/></SwiperSlide>
                <SwiperSlide><Image src={Watch} className="rounded-lg" alt='Digital Watch'/></SwiperSlide>
            </ImageSwiper>
            <p>Clock made as base model for screen lock</p>

            <div className="flex justify-evenly">
                <Button href="https://angelollima.github.io/digitalWatch/" text="Visit the site" icon={<MdFindInPage size={16} />} />
                <Button href="https://github.com/angelollima/digitalWatch" text="View code" icon={<GoMarkGithub />} />
            </div>
        </div>
    )
}
