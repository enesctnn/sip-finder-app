import styles from './EmptyBasketFeedback.module.scss'

export  function EmptyBasketFeedback() {
	return (
		<section className={styles['empty-basket-section']}>
		<h2 className={styles['empty-basket-title']}>
			Your basket is empty.
		</h2>
		<p>
			You can fill your basket with the cocktails you want and store
			them for later.
		</p>
	</section>
	)
}
