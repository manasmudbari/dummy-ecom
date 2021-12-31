import { useState } from "react";
import ShippingDetailsForm from "./forms/shippingDetailes";
import styles from "./shipping.module.scss";
const FormAndSummary = () => {
	const [status, setStats] = useState("shipping");
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.detailesCard}>
					<div className={styles.progesStatus}>
						<span style={{ color: " #3182CE" }} className={styles.text}>
							Account
						</span>
						<span
							style={
								status === "shipping"
									? { color: "#3182CE" }
									: { color: "#2D3748" }
							}
							className={styles.text}
						>
							Shipping
						</span>
						<span
							style={
								status === "payment"
									? { color: "#3182CE" }
									: { color: "#2D3748" }
							}
							className={styles.text}
						>
							Payment
						</span>
					</div>
					<div className={styles.formWapper}>
						<ShippingDetailsForm />
					</div>
				</div>
				<div className={styles.summaryCard}></div>
			</div>
		</div>
	);
};

export default FormAndSummary;
