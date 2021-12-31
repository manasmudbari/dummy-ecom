import styles from "./dropdown.module.scss";
const Dropdown = ({ data }) => {
	return (
		<select className={styles.Dropdown} name='cars' id='cars'>
			{data.map((op, i) => {
				return (
					<option key={i + "df"} value={op}>
						{op}
					</option>
				);
			})}
		</select>
	);
};

export default Dropdown;
