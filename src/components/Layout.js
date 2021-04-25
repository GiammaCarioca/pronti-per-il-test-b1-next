import Head from 'next/head'
import styles from '@/styles/Layout.module.css'

import Header from "./Header"
import Footer from "./Footer"

function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      <main className={styles.container}>
        {children}
      </main>

      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: "Pronti per il test B1",
  description: "Benvenuti al corso di preparazione per l'esame di certificazione dell'italiano",
  keywords: "esercizi, grammatica, italiano, lingua, certificazione, prova, esame",
}

export default Layout