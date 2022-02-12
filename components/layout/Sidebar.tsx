import Link from 'next/link';
import { ChevronRightIcon, LightningBoltIcon, MusicNoteIcon, SunIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GlobeIcon, HomeIcon, LibraryIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';


function Sidebar({ expand, setExpand }) {

    return (
        <>
            <aside className={`fixed z-50 transition-width duration-700 bg-light dark:bg-gray-800 sm:top-0 bottom-0 sm:h-screen w-full  ${expand ? 'sm:w-56' : 'sm:w-14'}`}>
                <div className={`sm:flex-col w-full min-w-full sm:space-y-1 flex`}>
                    <div className="hidden sm:flex items-center w-full">
                        <h1 className={`${expand ? '' : 'hidden'} ml-5 text-2xl font-serif w-full`}>SM_W3</h1>
                        <ExpandBtn expand={expand} setExpand={setExpand} />
                    </div>
                    <div className="sm:flex hidden w-full justify-center">
                        <SideButton
                            text="Home"
                            icon={<HomeIcon className="w-8 h-8" />}
                            tooltip="Home 🏡"
                            path="/"
                            expand={expand}
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <SideButton
                            text="Explore"
                            icon={<GlobeIcon className="w-8 h-8" />}
                            tooltip="Explore 📬"
                            path="/explore"
                            expand={expand}
                        />
                    </div>
                    <div className="sm:hidden flex w-full justify-center">
                        <SideButton
                            text="Home"
                            icon={<HomeIcon className="w-8 h-8" />}
                            tooltip="Home 🏡"
                            path="/"
                            expand={expand} />
                    </div>
                    <div className="w-full flex justify-center">
                        <SideButton
                            text="Library"
                            icon={<LibraryIcon className="w-8 h-8" />}
                            tooltip="Library 📚"
                            path="/library"
                            expand={expand} />
                    </div>
                </div>
                <Dropdown expand={expand} />
            </aside>
            <div onClick={() => setExpand(!expand)}
                className={`${expand ? 'fixed' : 'hidden'} top-0 left-0 w-full h-screen bg-gray-900 opacity-40 z-40`} >
            </div>
        </>
    )
}


export default Sidebar

const SideButton = ({ icon, text, path, tooltip, expand }) => {

    const router = useRouter();

    return (
        <li className={`${expand ? 'px-2' : 'sm:w-12'} w-full flex items-center group`}>
            <Link href={path}>
                <a className={`p-2 flex w-full items-center no-underline rounded-xl justify-center sm:justify-start transition duration-500
                    ${router.pathname === path ?
                        'bg-gray-300 text-gray-700 hover:text-gray-500'
                        :
                        'text-gray-400 hover:text-gray-300 hover:bg-gray-600'
                    }`}>
                    {icon}
                    <span className={` ${expand ? 'sm:inline' : ''} ml-2 hidden`}>
                        {text}
                    </span>
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

const Dropdown = ({ expand }) => {
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

const ExpandBtn = ({ expand, setExpand }) => {
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

