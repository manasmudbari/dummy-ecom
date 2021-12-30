import Nav from "../nav/nav";
import styles from "./layout.module.scss";
const Layout1 = ({ children }) => {
	return (
		<div className={styles.main}>
			<Nav />
			{children}
		</div>
	);
};

export default Layout1;
