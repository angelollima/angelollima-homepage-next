import Head from "next/head";
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import Keyboad from "./KeyBoard";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Angelollima - HomePage</title>
                <meta name="description" content="Portfolio about Angelo Lima, a junior developer always looking for development. This site was generated with Next.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen">
                <NavBar />
                <Keyboad className="pt-12"/>
                    <main className="flex-grow mt-28">
                        {children}
                    </main>
                <Footer />
            </div>
        </>
    )
}