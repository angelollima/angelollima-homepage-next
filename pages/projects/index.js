//Importing layouts
import Button from '../../components/Button';

//Importing icons
import { GoMarkGithub } from 'react-icons/go'

//Importing projects
import FrontEndProjects from './FrontEndProjects';
import BackEndProjects from './BackEndProjects';


export default function Projects() {
    return (
        <div className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] mx-auto space-y-6 text_color">

            <div className='text-center'>
                <h1 className="text-[20px] font-semibold">A selection of my best projects</h1>
                <p className="text-xs md:text-sm">Including this website</p>
            </div>

            <div className="flex justify-center gap-3 text_color">
                <Button href="https://github.com/angelollima/angelollima-homepage/" text="View code of this site" icon={<GoMarkGithub />} />
            </div>

            <div className="flex flex-col gap-8 text-center">
                <div id="front-end" className="space-y-4">
                    <h1 className="text-[17px] text-center underline font-semibold">Front-end Projects</h1>
                        <FrontEndProjects />
                </div>

                <div id="back-end" className="space-y-4">
                    <h1 className="text-[17px] text-center underline font-semibold">Back-end Projects</h1>
                        <BackEndProjects />
                </div>
            </div>
        </div>
    )
}
