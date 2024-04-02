import Head from 'next/head'
import { Poppins } from 'next/font/google'
import Banner from '@/ui/Banner'
import About from '@/ui/About'
import Plans from '@/ui/Plans'
import Solutions from '@/ui/Solutions'
import Community from '@/ui/Community'
import Functionalities from '@/ui/Functionalities'
import OurServices from '@/ui/OurServices'
import ACode from '@/ui/ACode'
import Footer from '@/ui/Footer'
import Header from '@/ui/Header'

const poppinsBold = Poppins({ subsets: ['latin'], style: 'normal', weight: '400' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Sistemas</title>
        <meta name="description" content="Code Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
      </Head>
      <main className={`main ${poppinsBold.className}`}>
        <Header />
        <Banner />
        <About />
        <Plans />
        <Community />
        <Solutions />
        <Plans />
        <Functionalities />
        <OurServices />
        <ACode />
        <Footer />

      </main>
    </>
  )
}
