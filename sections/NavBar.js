import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon } from "../components/Events3D";
import OpenNavBar from '../components/OpenNavBar';
import CloseNavBar from '../components/CloseNavBar';

export default function NavBar() {

    //extend and delimit navBar.
    const [ open, setOpen ] = useState(false);

    const { systemTheme, theme, setTheme } = useTheme();

    const navigations =[
      { label: 'About', path: '/' },
      { label: 'Projects', path: '/Projects' },
    ];
  
    const renderThemeChanger = () => {

      const currentTheme = theme === 'system' ? systemTheme : theme;

      if (currentTheme === 'dark') {
        return (
          <SunIcon onClick={() => setTheme('light')} />
        )
      } else {
          return (
            <MoonIcon onClick={() => setTheme('dark')} />
          )
      }
    }

    //Close the navBar extended.
    function closeNav(){
      let nav = document.getElementById('hideNav')
      nav.classList.add('hidden')
    }

    //Open the navBar delimited.
    function openNav(){
      let nav = document.getElementById('hideNav')
      nav.classList.remove('hidden')
    }

    return (
        <nav className="bg-transparent_screen shadow-r_b_shadow fixed backdrop-blur-sm w-[100vw] z-20"> {/*z-20 to make the navBar superimposed on the other elements*/}
            <div className="flex justify-between items-center sm:w-[80vw] lg:w-[60vw] mx-auto h-12 px-4">
                <div onClick={() => setOpen(false)}>
                  <div className="text_color font-Silkscreen">
                    <Link href="/" onClick={closeNav}>Angelo Lima</Link>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {renderThemeChanger()}
                  <div onClick={()=>setOpen(!open)}>
                      {open ?
                      <CloseNavBar onClick={closeNav} />
                      :
                      <OpenNavBar onClick={openNav} />
                      }
                  </div>
                </div>
            </div>
            <div id="hideNav" className="hidden text_color pb-2 tracking-wider text-justify">
              <div className="flex justify-evenly lg:justify-center lg:gap-16">  
                    {navigations.map((nav, index) => (
                      <div onClick={() => setOpen(!open)} key={index}>
                        <Link href={nav.path} onClick={closeNav}>{nav.label}</Link>
                      </div>
                    ))}
              </div>
            </div>
        </nav>
    )
}