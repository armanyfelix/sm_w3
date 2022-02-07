import Link from "next/link"
import SearchIcon from "@heroicons/react/outline/SearchIcon"
import { BellIcon, ChatIcon, PencilIcon, UserCircleIcon } from "@heroicons/react/outline"
import Create from "../Create";
import { useState } from "react";
import ChatDrop from "../chat/dropdown";



function Header() {
  const [create, setCreate] = useState(false);
  const [username, setUsername] = useState('');
  const [chat, setChat] = useState(false);
  console.log(username);


  return (
    <header className="dark:bg-gray-800 flex sticky top-0 w-full min-h-[3.5rem] justify-between px-10 py-2 ">

      <div className="w-1/3 flex justify-between items-center">
        <div className="flex">
          <Link href="/">
            <a className="text-2xl font-semibold font-serif dark:text-gray-200">
              SM_W3
            </a>
          </Link>
        </div>
      </div>

      <div className="w-1/3 flex justify-center ">
        <div className="flex bg-gray-700 rounded-l-md drop-shadow-lg">
          <input className="py-2 px-3 min-w-full bg-transparent outline-none" placeholder="Search some shit" />
          <button className="p-2 h-full bg-gray-900 rounded-r-md">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="w-1/3 flex items-center justify-end">
        {
          !username ? (
            <ul className=" flex list-none items-center space-x-2">
              <li>
                <button onClick={() => { setCreate(!create) }} className="p-2 bg-red-600 rounded-lg ">
                  <p className="h-6 px-2 font-mono flex items-center">Create</p>
                </button>
                {/* {create && <Create />} */}
              </li>
              <li>
                <button onClick={() => setChat(!chat)} className="p-2 bg-gray-600 rounded-lg " >
                  <ChatIcon className="w-6 h-6" />
                </button>
                {chat && <ChatDrop/>}
              </li>
              <li>
                <button className="p-2 bg-gray-600 rounded-lg " >
                  <BellIcon className="w-6 h-6" />
                </button>
              </li>
              <li>
                <button className="">
                  <img src={`https://avatars.dicebear.com/api/:avataaars/${username ? username : 'armany8'}.svg`} className="w-9 h-9" />
                </button>
              </li>

            </ul>
          ) : (
            <div className="mr-2 flex font-mono text-lg font-semibold tracking-tighter space-x-4">
              <li>
                <Link href="/newUser">
                  <a>Join</a>
                </Link>
              </li>
              <li>
                <Link href="/auth">
                  <a>Log In</a>
                </Link>
              </li>
            </div>
          )
        }

      </div>

    </header>
  )
}




export default Header

