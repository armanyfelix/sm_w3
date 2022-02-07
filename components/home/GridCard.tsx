import { UserCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";


function GridCard({ data }: { data: any }) {
  return (
    <>
      <div className="bg-slate-60 rounded-md flex flex-col shadow-lg m-2  justify-between ">
        <div>
          <img src={data.imageUrl} alt="content" className="w-full h-48 mx-auto" />
        </div>
        <p className=" text-justify mx-2">
          {data.description.split('').splice(0, 50)}
        </p>
        <div className="flex items-center">
          <UserCircleIcon className="w-12 h-12 mr-2" />
          <div>
            <p className="flex flex-col">
              <span className="mr-1 font-semibold text-md">{data.name}</span>
              <div className="">
                <span className=" text-ellipsis text-sm  font-semibold text-stone-200  ">4321 views</span>
                <span className="font-light text-ellipsis text-sm text-stone-200 italic "> - created date</span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GridCard;
