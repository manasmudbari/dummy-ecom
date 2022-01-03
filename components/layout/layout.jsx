import Head from "next/head";
import Nav from "../nav/nav";
import styles from "./layout.module.scss";
const Layout1 = ({ children }) => {
	return (
		<div className={styles.main}>
			<Head>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Inter'
				/>
			</Head>
			<Nav />
			{children}
		</div>
	);
};

export default Layout1;
