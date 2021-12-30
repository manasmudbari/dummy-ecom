import styles from "./nav.module.scss";
const Nav = () => {
	return (
		<nav className={styles.main}>
			<div className={styles.container}>
				<h1>DUMMY</h1>
				<div className={styles.menu}>
					<div className={styles.left}>
						<span className={styles.item}>Home</span>
						<span className={styles.item}>Shop</span>
						<span className={styles.item}>Contact</span>
						<span className={styles.item}>Help</span>
					</div>
					<div className={styles.right}>
						<span className={styles.item}>Account &#9660;</span>
						<span className={styles.item}>3 items</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
