import { ReactElement, useState } from "react";
import Layout from "../components/layout/index";
import NestedLayout from "../components/layout/NestedLayout";
import ListView from "../components/views/home/ListView";
import GridView from "../components/views/home/GridView";
import Navbar from "../components/layout/Navbar";


function Home({ data }: { data: any }) {
  const [view, setView] = useState('list');
  return (
    <>
      <Navbar setView={setView} />
      <div className="container flex mx-auto justify-center">
        <div className="">
          {
            data.map((item: any) => {
              if (view === 'list') {
                return (
                  <ListView key={item.id} data={item} />
                )
              } else if (view === 'grid') {
                return (
                  <GridView key={item.id} data={item} />
                )
              }

            })
          }
        </div>
      </div>
    </>
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

Home.getLayout = function getLayout(home: ReactElement, setView: any) {
  return (
    <Layout>
      <NestedLayout setView={setView}>{home}</NestedLayout>
    </Layout>
  )
}

export default Home
