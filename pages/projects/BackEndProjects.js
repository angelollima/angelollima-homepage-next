//Importing components from Next
import Image from 'next/image';

//Importing icons from React-Icons
import { GoMarkGithub } from 'react-icons/go';

//Importing layouts
import Button from '../../components/Button';

//Importing images
import Stickers from '../../public/img/Stickers.png';
import CalculatorPython from '../../public/img/CalculatorPython.png';

export function StickersGenerator() {
    return (
        <div className="space-y-4">
            <h1 className="text-[15px] font-semibold text-center">Stickers Generator</h1>
            <Image src={Stickers} alt="Stickers" title="Stickers Generator" className="w-full rounded-lg"/>
            <p>Sticker generator made in python with the aim of creating stickers to your computer from the mocki api, which has the 250 best movies according to the IMDb website</p>
            
            <div className="flex justify-center">
                <Button href="https://github.com/angelollima/stickers" text="View code" icon={<GoMarkGithub />} />
            </div>
        </div>
    )
}

export function Calculator() {
    return (
        <div className="space-y-4">
            <h1 className="text-[15px] font-semibold text-center">Calculator</h1>
            <Image src={CalculatorPython} alt="Calculator Python" title="Calculator Python" className="w-full rounded-lg"/>
            <p>Calculator built in python as a way of studies</p>

            <div className="flex justify-center">
                <Button href="https://github.com/angelollima/calculator" text="View code" icon={<GoMarkGithub />} />
            </div>
        </div>
    )
}
