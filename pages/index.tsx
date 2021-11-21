import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cours Mines Nancy 2021</title>
        <meta name="description" content="Exercices de cours" />
      </Head>

      <main className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1>Cours HTML, CSS, Bootstrap</h1>

            <h2>Cours</h2>

            <ul>
              <li><Link href="cours/titres"><a>Titres</a></Link></li>
              <li><Link href="cours/paragraphes"><a>Paragraphes</a></Link></li>
              <li><Link href="cours/blog"><a>Blog</a></Link></li>
              <li><Link href="cours/liste"><a>Listes</a></Link></li>
              <li><Link href="cours/tableau"><a>Tableaux</a></Link></li>
              <li><Link href="cours/form"><a>Formulaires</a></Link></li>
              <li><a href="https://getbootstrap.com" target="_blank" rel="noreferrer">Bootstrap</a></li>
            </ul>

            <h2>Exercices</h2>

            <ul>
              <li><Link href="exercices/exercice1"><a>Exercice 1</a></Link></li>
              <li><Link href="exercices/exercice2"><a>Exercice 2</a></Link></li>
              <li><Link href="exercices/exercice3"><a>Exercice 3</a></Link></li>
              <li><Link href="exercices/exercice4"><a>Exercice 4</a></Link></li>
              <li><Link href="exercices/forum"><a>Forum</a></Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
