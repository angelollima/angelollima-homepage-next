//Importing layouts
import { KeyboardMobile, KeyboardPc } from './Events3D';

//Importing providers
import WindowSize from '../providers/WindowSize';

export default function Keyboad({ className }) {

    const [widthSize] = WindowSize();

    return (
        <div className={`h-40 lg:h-72 ${className}`}>
            <div className="flex justify-center">
                <div>
                    {widthSize < "1024" ? (
                    <KeyboardMobile />
                    ): (
                    <KeyboardPc />
                    )}
                </div>
            </div>
        </div>
    )
}
