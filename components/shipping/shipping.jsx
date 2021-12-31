import { useState } from "react";
import ShippingDetailsForm from "./forms/shippingDetailes";
import styles from "./shipping.module.scss";
const FormAndSummary = () => {
	const [status, setStatus] = useState("shipping");
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
					<div className={styles.line}></div>
					<div className={styles.wapper}>
						<div className={styles.buttons}>
							<div className={styles.cancel}>Cancel order</div>
							{status === "shipping" && (
								<div
									onClick={() => setStatus("payment")}
									className={styles.button}
								>
									Payment
								</div>
							)}
							{status === "payment" && (
								<div
									onClick={() => setStatus("shipping")}
									className={styles.button}
								>
									Complete order
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={styles.summaryCard}></div>
			</div>
		</div>
	);
};

export default FormAndSummary;
