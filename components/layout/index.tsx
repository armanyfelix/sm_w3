import React, { ReactNode, useState } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Header from './Header'

type Props = {
    children?: ReactNode
    title?: string
    description?: string
}

function Layout({ children, title = 'sm_w3', description = "ltimate descentralize social media" }: Props) {
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
                <script defer src="theme.js"></script>
                <link rel="icon" type="html" href="/favicon.html" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Sidebar expand={expand} setExpand={setExpand} />
            <div className="ml-0 flex flex-col z-40 sm:ml-14">
                <Header/>
                <main>
                    {children}
                </main>

            </div>
        </div >
    )
}

export default Layout