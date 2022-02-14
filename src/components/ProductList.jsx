import React from 'react'
import styles from "./Product.module.css";

export const ProductList = ({product}) => {
  return (
		<div className={styles.grid}>
			{product.map((elem) => (
				<div key={elem.id}>
					<div>{elem.title}</div>
					<div>₹ {elem.cost}</div>
					<div>
						<img
							src={elem.image}
							alt="ima1"
							className={styles.imageSize}
						/>
					</div>
					<div>{elem.category}</div>
				</div>
			))}
		</div>
  );
}
