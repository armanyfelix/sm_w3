import { ViewListIcon, ViewGridIcon, FilterIcon } from "@heroicons/react/outline";

function Navbar({ setView }: any) {
  const options = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "React",
      value: "react",
    },
    {
      label: "Vue",
      value: "vue",
    }
  ];

  return (
    <div className="flex bg-gray-800 border-t-[1px] border-zinc-600 justify-between">
      <div className=" p-2 m-0 flex items-center">
        <FilterIcon className="h-6 w-6" />
        <div className="ml-2 space-x-2 text-white">
          {
            options.map((option) => (
              <button className="bg-neutral-800 border-2 border-neutral-700 hover:bg-neutral-700 px-3 py-0.5 rounded-2xl">
                {option.label}
              </button>
            ))
          }
        </div>
      </div>
      <div className="bg-zinc-600 px-2 flex items-center justify-end space-x-2">
        <button onClick={() => setView('list')} className="hover:bg-neutral-400  rounded-2xl p-1.5">
          <ViewListIcon className="w-6 h-6" />
        </button>
        <button onClick={() => setView('grid')} className="hover:bg-neutral-400 text-gray-100 rounded-2xl p-1.5">
          <ViewGridIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
