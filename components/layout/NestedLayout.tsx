import Navbar from "./Navbar"


function NestedLayout({ children, setView }: any ) {
  return (
    <>
      {/* <Navbar setView={setView}/> */}
      <main>{children}</main>
    </>
  )
}

export default NestedLayout
