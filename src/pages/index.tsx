import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      {/* Desta forma é possível ter um título dinâmico para cada página */}
      <Head>
        <title>Produtos | Desafio Khipo</title>
      </Head>
      <h1 className={styles.title}>Hello World</h1>
    </>
  )
}
