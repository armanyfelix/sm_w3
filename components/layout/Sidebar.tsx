import Link from 'next/link';
import { InboxIcon, BookOpenIcon, TemplateIcon, ChevronRightIcon, LightningBoltIcon, MusicNoteIcon, ClipboardCheckIcon, SunIcon, } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GlobeAltIcon, GlobeIcon, HomeIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';


function Sidebar({ expand, setExpand }) {
    const {theme, setTheme} = useTheme();

    return (
        <>
            <nav className={`fixed z-50 transition-width duration-700 bg-light dark:bg-gray-800 sm:top-0 bottom-0 sm:h-screen w-full  ${expand ? 'sm:w-56' : 'sm:w-14'}`}>
                <ul className={`sm:flex-col w-full sm:space-y-1 list-none p-0 m-0 flex items-center`}>
                    <div className="flex items-center w-full">
                        <h1 className={`${expand ? '' : 'hidden'} ml-5 text-2xl font-serif w-full`}>SM_W3</h1>
                        <ExpandBtn expand={expand} setExpand={setExpand} />
                    </div>
                    <div className={`${expand ? '' : 'ml-2'} hidden sm:inline w-full`}>
                        <SideButton
                            text="Home"
                            icon={<HomeIcon className="w-8 h-8" />}
                            tooltip="Home 🏡"
                            path="/"
                            expand={expand}
                        />
                    </div>
                    <SideButton
                        text="Explore"
                        icon={<GlobeIcon className="w-8 h-8" />}
                        tooltip="Explore 📬"
                        path="/explore"
                        expand={expand}
                    />

                    <div className="sm:hidden w-full">
                        <SideButton
                            text="Home"
                            icon={<HomeIcon className="w-8 h-8" />}
                            tooltip="Home 🏡"
                            path="/"
                            expand={expand} />
                    </div>
                    <SideButton
                        text="Pages"
                        icon={<BookOpenIcon className="w-8 h-8" />}
                        tooltip="Pages 📚"
                        path="/pages"
                        expand={expand} />
                </ul>
                <ul>
                    <li>
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                            <SunIcon className="w-8 h-8" />
                        </button>
                    </li>
                </ul>
                <Dropdown expand={expand} />
            </nav>
            <div onClick={() => setExpand(!expand)}
                className={`${expand ? 'fixed' : 'hidden'} top-0 left-0 w-full h-screen bg-gray-900 opacity-40 z-40`} >
            </div>
        </>
    )
}




function SideButton({ icon, text, path, tooltip, expand }) {

    const router = useRouter();

    return (
        <li className={`${expand ? 'px-2' : 'sm:w-12'} w-full flex items-center group`}>
            <Link href={path}>
                <a className={`p-2 flex w-full items-center no-underline rounded-xl justify-center sm:justify-start transition duration-500
                    ${router.pathname === path ? 'bg-gray-600 text-gray-300 hover:text-gray-100' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-300'}`}>
                    {icon}
                    <span className={` ${expand ? 'sm:inline' : ''} ml-2 hidden`}>{text}</span>
                </a>
            </Link>
            {/* Tooltip */}
            <span className={`${expand ? 'hidden' : ''}
                 w-auto p-2 m-2 min-w-max absolute bottom-14 sm:bottom-auto sm:left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100 origin-left`}>
                {tooltip}
            </span>
        </li>
    )

}

function Dropdown({ expand }) {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="hidden sm:flex flex-col m-2 group">
            <button onClick={() => setDropdown(!dropdown)} className={` w-full flex cursor-pointer flex-row items-center justify-between rounded-xl px-1 text-gray-500 hover:text-gray-700 hover:bg-gray-300`}>
                <ChevronRightIcon className={`${dropdown ? 'rotate-90' : 'rotate-0'} duration-500 w-7 h-7`} />
                <span className={`${expand ? 'sm:flex' : ''} hidden text-sm font-semibold`}>SHORTCUTS</span>
                <LightningBoltIcon className="w-6 h-6" />
            </button>
            <div className={`${dropdown ? 'sm:flex' : 'hidden'} ${expand ? 'm-4' : 'flex-col my-4'} items-center `}>
                <MusicNoteIcon className="w-6 h-6 mr-2" />
                <p className={expand ? 'text-base' : ' text-[10px]'}>dropdown 1</p>
            </div>
            <span className={`${expand ? 'hidden' : 'absolute'} w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100 origin-left`}>
                Shortcuts ⚡
            </span>
        </div>
    )
}

function ExpandBtn({ expand, setExpand }) {
    return (
        <div className=" hidden sm:flex group justify-self-end justify-end p-2  w-full">
            <button className={`hover:bg-gray-500 p-2 rounded-xl transition duration-500 ${expand ? 'rotate-180' : 'rotate-0'}`}
                onClick={() => setExpand(!expand)}>
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    className="svg-inline--fa w-6 h-6 fa-angle-double-right fa-w-14 fa-5x">
                    <g className="fa-group">
                        <path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                            className=" text-purple-400"
                        ></path>
                        <path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                            className="text-purple-500 "
                        ></path>
                    </g>
                </svg>
            </button>
            <span className={`${expand ? 'hidden' : 'absolute'} w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100 origin-left`}>
                Expand ➡
            </span>
        </div>
    )

}

export default Sidebar