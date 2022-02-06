import Link from "next/link"
import SearchIcon from "@heroicons/react/outline/SearchIcon"
import { PencilIcon, UserCircleIcon } from "@heroicons/react/outline"
import Create from "../Create";
import { useState } from "react";



function Header() {
  const [create, setCreate] = useState(false);
  const [username, setUsername] = useState('');
  console.log(username);


  return (
    <nav className="dark:bg-gray-800 flex sticky top-0 w-full min-h-[3.5rem] justify-between px-10 py-2 ">

      <section className="w-1/3 flex justify-between items-center">
        <div className="flex">
          <Link href="/">
            <a className="text-2xl font-semibold font-serif dark:text-gray-200">
              SM_W3
            </a>
          </Link>
        </div>
      </section>

      <section className="w-1/3 flex justify-center ">
        <div className="flex bg-gray-300 rounded-l-lg drop-shadow-lg">
          <input className="py-2 px-3 min-w-full bg-transparent outline-none" placeholder="Search some shit" />
          <button className="p-2 h-full bg-gray-300 rounded-r-lg">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="w-1/3 flex items-center justify-end">

        {
          !username ? (
            <div className=" flex list-none items-center font-mono text-lg font-semibold tracking-tighter space-x-4">
              <li>
                <button className=" bg-zinc-600">
                  <img src={`https://avatars.dicebear.com/api/:avataaars/${username}.svg`} className="w-9 h-9" />
                </button>
              </li>
              <li>
                <Link href="/">
                  <button onClick={() => { setCreate(!create) }} className="p-2 bg-red-600 rounded-lg " >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                </Link>
                {create && <Create />}
              </li>
            </div>
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

      </section>

    </nav>
  )
}




export default Header

