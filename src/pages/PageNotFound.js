import PageNotFoundBot from '../components/PageNotFoundBot/PageNotFoundBot'
import { Helmet } from 'react-helmet'

export default function PageNotFound() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>404 Page not found | Ewabey</title>
        <meta name="description" content="Welcome to Ewabey - Your Destination for Professional Website Creation Services. Whether You're a Business or Individual, Ewabey Offers Tailored Solutions to Bring Your Online Vision to Life. Place Your Order Today and Let Our Expert Team Build the Website of Your Dreams!"/>
        <meta name="keywords" content="Website creation, Web design services, Business websites, Personal websites, Custom website development, Professional web development, Online presence, Website building platform, Web design solutions, Affordable website design, Freelance web designer, Freelance web developer, Freelance website builder, Freelance web design services, Hire freelance web developer"/>
        <meta name="author" content="Goutam Halder" />
        <meta name="robots" content="index, follow"/>

        <link rel="canonical" href="https://www.ewabey.com/page-not-found"/>

        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/estore-cc97f.appspot.com/o/img%2FEwabey.ico?alt=media&token=d4180596-eb19-4fae-ac95-790c6d122a9f"
          type="image/x-icon"
        />
      </Helmet>
      <PageNotFoundBot/>
    </div>
  )
}
