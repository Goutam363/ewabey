import Navbar from "../components/Navbar/Navbar";
import HomeContent from '../components/HomeContent/HomeContent'
import FooterBottom from '../components/FooterBottom/FooterBottom'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div>
      <Helmet>
      <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>Ewabey</title>
        <meta name="description" content="Welcome to Ewabey - Your Destination for Professional Website Creation Services. Whether You're a Business or Individual, Ewabey Offers Tailored Solutions to Bring Your Online Vision to Life. Place Your Order Today and Let Our Expert Team Build the Website of Your Dreams!"/>
        <meta name="keywords" content="Website creation, Web design services, Business websites, Personal websites, Custom website development, Professional web development, Online presence, Website building platform, Web design solutions, Affordable website design, Freelance web designer, Freelance web developer, Freelance website builder, Freelance web design services, Hire freelance web developer"/>
        <meta name="author" content="Goutam Halder" />
        <meta name="robots" content="index, follow"/>

        <meta property="og:title" content="Ewabey"/>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Welcome to Ewabey - Your Destination for Professional Website Creation Services. Whether You're a Business or Individual, Ewabey Offers Tailored Solutions to Bring Your Online Vision to Life. Place Your Order Today and Let Our Expert Team Build the Website of Your Dreams!"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/estore-cc97f.appspot.com/o/img%2FEwabey.png?alt=media&token=3122afc3-0cd8-4546-ae52-dc82490aa3ce"/>
        <meta property="og:url" content="https://www.ewabey.com"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Ewabey"/>
        <meta name="twitter:description" content="Welcome to Ewabey - Your Destination for Professional Website Creation Services. Whether You're a Business or Individual, Ewabey Offers Tailored Solutions to Bring Your Online Vision to Life. Place Your Order Today and Let Our Expert Team Build the Website of Your Dreams!"/>
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/estore-cc97f.appspot.com/o/img%2FEwabey.png?alt=media&token=3122afc3-0cd8-4546-ae52-dc82490aa3ce"/>

        <link rel="canonical" href="https://www.ewabey.com"/>

        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/estore-cc97f.appspot.com/o/img%2FEwabey.ico?alt=media&token=d4180596-eb19-4fae-ac95-790c6d122a9f"
          type="image/x-icon"
        />
      </Helmet>
      <Navbar/>
      <HomeContent/>
      <FooterBottom/>
    </div>
  )
}
