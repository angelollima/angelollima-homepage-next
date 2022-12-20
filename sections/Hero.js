import Image from 'next/image'

import Button from '../components/Button'

import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'

export default function Hero() {

    return (
        <main className="w-[80vw] sm:w-[60vw] lg:w-[40vw] mx-auto space-y-6">
            <div className="flex justify-center">
                <div className="border rounded-full shadow-r_b_shadow">
                    <Image 
                        src="/../public/img/Angelo.jpeg"
                        priority={true}
                        alt="Angelo photo"
                        width="160"
                        height="160"
                        className="rounded-full border-8 border-transparent"
                    />
                </div>
            </div>

            <div className="bg-transparent_screen rounded-lg">
                <div className="w-[60vw] sm:w-[40vw] lg:w-[20vw] mx-auto py-2 text-center text_color">
                    <p>Hi, I'm a full-stack developer</p>
                    <p>based in Brazil</p>
                </div>
            </div>

            <div className="space-y-1 flex flex-col items-center text_color">
                <p className="font-Silkscreen">Angelo Antonio L.S. Filho</p>
                <p className="text-xs pb-6">Junior Programmer ( Student / Developer / Monitor )</p>
            </div>

            <div className="text_color text-sm">
                <div className="flex flex-col space-y-1 tracking-wide text-justify">
                    <p className="text-[17px] font-semibold">Bio</p>
                    <div className="flex space-x-6">
                        <p>2001</p>
                        <p>-</p>
                        <p>Born in Espirito Santo, Brazil.</p>
                    </div>
                    <div className="flex space-x-6">
                        <p>2022 to 2023</p>
                        <p>-</p>
                        <p>Studying IT at IFES.</p>
                    </div>
                    <div className="flex space-x-6">
                        <p>2022 to present</p>
                        <p>-</p>
                        <p>Working as a monitor in programming course.</p>
                    </div>
                </div>
            </div>

            <div className="text_color text-sm">
                <div className="space-y-1 tracking-widest text-justify">
                    <p className="text-[17px] font-semibold">About</p>
                    <p>
                        Programming student and full-stack developer
                        with a passion for creating solutions for everyday challenges.
                        I love the feeling of seeing a project leaving the paper and going to the screens.
                    </p>
                </div>
            </div>

            <div className="flex justify-center gap-3 text-xs min-[450px]:text-sm text_color pt-6">
                <Button text="Visit my Github" href="https://github.com/angelollima" icon={<GoMarkGithub />} />
                <Button text="Visit my Linkedin" href="https://www.linkedin.com/in/angelollima/" icon={<BsLinkedin />} />
            </div>
        </main>
    )
}