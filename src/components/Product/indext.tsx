import styles from './styles.module.scss';

export function Product() {
  return (
    <div className={styles.productComponent}>
    <div className={styles.container}>
      <img src="http://loremflickr.com/640/480/fashion" alt="Product id 1"/>
      <p>Product Name 1</p>
      <p>Brand Name 1</p>
      <h1>R$ 765.00</h1>
      </div>
    </div>
  )
}