import Link from "next/link"
import SearchIcon from "@heroicons/react/outline/SearchIcon"
import { BellIcon, ChatIcon, PencilIcon, UserCircleIcon } from "@heroicons/react/outline"
import Create from "../Create";
import { useState } from "react";
import ChatDrop from "../chat/chatMenu";
import NotificationsMenu from "../NotificationsMenu";
import UserMenu from "../userMenu";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ConfigMenu from "../ConfigMenu";



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
        <nav>
          {
            !username ? (
              <ul className=" flex list-none items-center space-x-2">
                <li>
                  <Create />
                </li>
                <li>
                  <ChatDrop />
                </li>
                <li>
                  <NotificationsMenu />
                </li>
                <li>
                  <UserMenu />
                </li>
                <li>
                  <ConfigMenu />
                </li>
              </ul>
            ) : (
              <ul className="mr-2 flex font-mono text-lg font-semibold tracking-tighter space-x-4">
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
              </ul>
            )
          }
        </nav>
      </div>

    </header>
  )
}




export default Header

