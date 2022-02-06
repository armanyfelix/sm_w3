

function NewUser() {


  return (
    <>
      <h1 className="text-5xl font-extrabold mb-20">Create account</h1>
      <form className="flex flex-col text-xl space-y-4">
        <input type="text" id="username" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Username" />
        <input type="email" id="email" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Email" />
        <input type="password" id="pass" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Password" />
        <input type="password" id="confirmPass" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Confirm password" />
        <button type="submit" className="flex active:ring-4 ring-gray-700 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-300 dark:bg-gray-700 hover:brightness-90 dark:hover:bg-gray-800 items-center justify-evenly text-xl font-semibold w-full mx-auto rounded-lg p-3">
          Create account
        </button>
      </form>
    </>
  )
}

export default NewUser
