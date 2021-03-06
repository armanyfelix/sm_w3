import { useState } from "react";
import Layout from "../components/layout/index";
import NestedLayout from "../components/layout/NestedLayout";
import ListView from "../components/home/ListCard";
import GridView from "../components/home/GridCard";
import Navbar from "../components/layout/Navbar";



function Home({ data }: { data: any }) {

  const [view, setView] = useState('list');

  return (
    <Layout>
      <Navbar setView={setView} />
      <div className="flex bg-gradient-to-tl to-cyan-700 via-indigo-700 from-purple-700 justify-center">
        <div>
          {
            view === 'list' && data.map((item: any) => {
              return <ListView key={item.id} data={item} />
            })
          }
          <div className={`${view === 'list' && 'hidden'} grid grid-cols-4 gap- `}>
            {
              view === 'grid' && data.map((item: any) => {
                return <GridView key={item.id} data={item} />
              })
            }
          </div>
        </div>
        <div className="mt-5 ml-5">
          <div className="p-2 rounded-md bg-yellow-500">
            <p className="text-center text-white">
              <span className="font-semibold"> {data.length} </span>
              <span className="font-light"> results found</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://pasteleriaaxiova-api.herokuapp.com/api/pasteles`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

// Home.getLayout = function getLayout(home: ReactElement, setView: any) {
//   return (
//     <Layout home>
//       <NestedLayout setView={setView}>{home}</NestedLayout>
//     </Layout>
//   )
// }

export default Home
