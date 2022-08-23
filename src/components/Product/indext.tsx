import styles from './styles.module.scss';

interface Props {
  id: string, 
  image: string,
  name: string,
  brand: string,
  price: string,
}

export function Product({ id, image, name, brand, price }: Props) {
  return (
    <div className={styles.productComponent}>
    <div className={styles.container}>
      <img src={image} alt={`Product id ${id}`}/>
      <p>{name}</p>
      <p>{brand}</p>
      <h2>R$ {price}</h2>
      </div>
    </div>
  )
}