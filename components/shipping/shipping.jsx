import { useEffect, useState } from "react";
import CustomLabel from "../common/CustomLebel";
import Input from "../common/input";
import PaymentDetailsForm from "./forms/paymenyDetails";
import ShippingDetailsForm from "./forms/shippingDetailes";
import styles from "./shipping.module.scss";
const cards = {
	601100: { cashback: "3%", imageLink: "discover.png" },
	601110: { cashback: "3%", imageLink: "discover.png" },
	651621: { cashback: "3%", imageLink: "discover.png" },
	655066: { cashback: "3%", imageLink: "discover.png" },
	659524: { cashback: "3%", imageLink: "discover.png" },
	601120: { cashback: "3%", imageLink: "discover.png" },
	601129: { cashback: "3%", imageLink: "discover.png" },
	601130: { cashback: "3%", imageLink: "discover.png" },
	601149: { cashback: "3%", imageLink: "discover.png" },
	601138: { cashback: "3%", imageLink: "discover.png" },
	517805: { cashback: "5%", imageLink: "capitalone.png" },
	510805: { cashback: "5%", imageLink: "capitalone.png" },
	512025: { cashback: "5%", imageLink: "capitalone.png" },
	515597: { cashback: "5%", imageLink: "capitalone.png" },
	515599: { cashback: "5%", imageLink: "capitalone.png" },
	517305: { cashback: "5%", imageLink: "capitalone.png" },
	520118: { cashback: "5%", imageLink: "capitalone.png" },
	524149: { cashback: "5%", imageLink: "capitalone.png" },
	526835: { cashback: "5%", imageLink: "capitalone.png" },
	528942: { cashback: "5%", imageLink: "capitalone.png" },
	540791: { cashback: "5%", imageLink: "capitalone.png" },
	379733: { cashback: "8%", imageLink: "american.png" },
	375987: { cashback: "8%", imageLink: "american.png" },
	414720: { cashback: "10%", imageLink: "chase.png" },
	418555: { cashback: "10%", imageLink: "chase.png" },
};

const FormAndSummary = () => {
	const [status, setStatus] = useState("shipping");
	const [coponCode, setCoponCode] = useState("");
	const [cardNum, setCardNumber] = useState();
	const [card, setCard] = useState();

	useEffect(() => {
		if (cardNum !== undefined) {
			const defiend = cards[cardNum];
			console.log("d", defiend);
			if (defiend) {
				setCard(cards[cardNum]);
			} else {
				setCard(undefined);
			}
		}
	}, [cardNum]);

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.detailesCard}>
					<div className={styles.progesStatus}>
						<span style={{ color: " #3182CE" }} className={styles.text}>
							Account
						</span>
						<img src='tick.svg' alt='icon ' />
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
						<img src='tick.svg' alt='icon ' />
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
						{status === "payment" && (
							<PaymentDetailsForm checkcard={setCardNumber} setcard={setCard} />
						)}
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
					{status === "payment" && card && (
						<div className={styles.cardWrapper}>
							<img src={card.imageLink} alt='card' />
							<div className={styles.cashback}>
								<div className={styles.text}>
									{`Earn ${card.cashback} cashback with this purchase`}
								</div>
								<p>
									Click <span>here</span> to activate
								</p>
							</div>
						</div>
					)}

					<div
						style={card ? {} : { marginTop: "60px" }}
						className={styles.bottom}
					>
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
