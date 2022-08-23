import Head from 'next/head';

import useSwr from 'swr'

import { Product } from '../components/Product/indext';

import styles from './home.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSwr<any>('/api/products', fetcher)

  if (error) return <div>Erro ao ler usuários</div>
  if (!data) return <div>Carregando...</div>

  return (
    <>
      {/* Desta forma é possível ter um título dinâmico para cada página */}
      <Head>
        <title>Produtos | Desafio Khipo</title>
      </Head>
      <Product />
    </>
  )
}
