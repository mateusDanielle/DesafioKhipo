import Head from 'next/head';

import useSwr from 'swr'

import { Product } from '../components/Product/indext';
import { ProductProps } from '../interfaces/product';

import styles from './home.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSwr<ProductProps[]>('/api/products', fetcher)

  if (error) return <div>Erro ao ler usuários</div>
  if (!data) return <div>Carregando...</div>

  return (
    <>
      {/* Desta forma é possível ter um título dinâmico para cada página */}
      <Head>
        <title>Produtos | Desafio Khipo</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          {data.map(p => (
            <Product id={p.id} name={p.name} brand={p.brand} image={p.image} price={p.price} key={p.id} />
          ))}
        </div>
      </div>
    </>
  )
}
