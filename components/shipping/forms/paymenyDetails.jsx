import { useEffect, useState } from "react";
import CustomLabel from "../../common/CustomLebel";
import Dropdown from "../../common/dropdown";
import Input from "../../common/input";
import styles from "./paymentdetails.module.scss";
const PaymentDetailsForm = ({ status, checkcard }) => {
	const [name, setName] = useState("123");
	const [cardNumber, setCardnumber] = useState();
	const [called, setCalled] = useState(false);
	const [mm, setMm] = useState();
	const [yy, setYy] = useState();
	const [cvc, setCvc] = useState();

	const adrresses = ["123 , Electric avenue"];
	useEffect(() => {
		if (cardNumber !== undefined && called === false) {
			if (cardNumber.length > 5 && cardNumber.length < 7) {
				console.log("called");
				checkcard(cardNumber);
				setCalled(true);
			}
		} else if (cardNumber !== undefined && called === true) {
			if (cardNumber.length < 6) {
				console.log("called2");
				setCalled(false);
				checkcard(cardNumber);
			}
		}
	}, [cardNumber]);
	return (
		<form className={styles.formMain}>
			<h2>Payment Details</h2>
			<div className={styles.addressAndcardtype}>
				<span className={styles.typetext}>Use saved address</span>
				<Dropdown data={adrresses} />
			</div>
			<CustomLabel text='Name on card' />
			<Input
				type='text'
				placeholder='Enter Name here'
				onchange={setName}
				required={true}
				value={name}
				done
			/>
			<CustomLabel text='Card number' />
			<Input
				type='number'
				placeholder='Enter card number here'
				onchange={setCardnumber}
				required={true}
				value={cardNumber}
				pattern='[0-9.]+'
			/>
			<div className={styles.exprAndcvc}>
				<div className={styles.expr}>
					<CustomLabel text='Expiration' />
					<div className={styles.inputs}>
						<input
							className={styles.inputsm}
							type='number'
							placeholder='mm'
							onChange={(e) => setMm(e.target.value)}
							required={true}
							value={mm}
							min='1'
							max='12'
						/>

						<div className={styles.slash}>/</div>

						<input
							className={styles.inputsm}
							type='number'
							placeholder='yy'
							onChange={(e) => setYy(e.target.value)}
							required={true}
							value={yy}
							min='20'
							max='99'
						/>
					</div>
				</div>
				<div className={styles.cvcWrapper}>
					<div className={styles.labelWrapper}>
						<div className={styles.cvclabel}>
							<CustomLabel text='CVC' />
						</div>
						<img src='help.svg' alt='icon' />
					</div>
					<input
						className={styles.inputbb}
						type='number'
						max='999'
						placeholder='123'
						onChange={(e) => setCvc(e.target.value)}
						required={true}
						value={cvc}
						pattern='([0-9]|[0-9]|[0-9])'
						name='cvc'
					/>
				</div>
			</div>
		</form>
	);
};

export default PaymentDetailsForm;
