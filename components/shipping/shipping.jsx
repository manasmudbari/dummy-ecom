import { useState } from "react";
import CustomLabel from "../common/CustomLebel";
import Input from "../common/input";
import PaymentDetailsForm from "./forms/paymenyDetails";
import ShippingDetailsForm from "./forms/shippingDetailes";
import styles from "./shipping.module.scss";
const FormAndSummary = () => {
	const [status, setStatus] = useState("shipping");
	const [coponCode, setCoponCode] = useState("");
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
						{status === "shipping" && <ShippingDetailsForm />}
						{status === "payment" && <PaymentDetailsForm />}
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
				<div className={styles.summaryCard}>
					<h3>Order Summary</h3>
					<img src='headphone.png' />
					<div className={styles.nameAndqty}>
						<h5>Sony wireless headphones</h5>
						<div className={styles.qtyWrapper}>
							<div className={styles.icon}>-</div>
							<div className={styles.qty}>1</div>
							<div className={styles.icon}>+</div>
						</div>
					</div>
					<h5>$320.45</h5>
					{status === "shipping" && (
						<div className={styles.copponWrapper}>
							<CustomLabel text='Gift Card / Discount code' />
							<div className={styles.inputAndButton}>
								<div className={styles.input}>
									<Input
										type='text'
										onchange={setCoponCode}
										value={coponCode}
									/>
								</div>
								<div className={styles.button}>Apply</div>
							</div>
						</div>
					)}
					{status === "payment" && (
						<div className={styles.cardWrapper}>
							<img src='tablet1.png' alt='card' />
							<div className={styles.cashback}>
								<div className={styles.text}>
									Earn 5% cashback with this purchase
								</div>
								<p>
									Click <span>here</span> to activate
								</p>
							</div>
						</div>
					)}

					<div className={styles.bottom}>
						<div className={styles.propAndVale}>
							<div className={styles.prop}>Sub total</div>
							<div className={styles.value}>$316.55</div>
						</div>
						<div className={styles.propAndVale}>
							<div className={styles.prop}>Tax</div>
							<div className={styles.value}>$3.45</div>
						</div>
						<div className={styles.propAndVale}>
							<div className={styles.prop}>Shipping</div>
							<div className={styles.free}>Free</div>
						</div>
						<div className={styles.propAndVale}>
							<div className={styles.total}>Total</div>
							<div className={styles.value}>$320.45</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormAndSummary;
