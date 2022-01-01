import { useState } from "react";
import CustomLabel from "../../common/CustomLebel";
import Dropdown from "../../common/dropdown";
import Input from "../../common/input";
import styles from "./paymentdetails.module.scss";
const PaymentDetailsForm = ({ status }) => {
	const [name, setName] = useState("123");
	const [cardNumber, setCardnumber] = useState();
	const [mm, setMm] = useState();
	const [yy, setYy] = useState();
	const [cvc, setCvc] = useState();
	const adrresses = ["123 , Electric avenue"];
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
				placeholder='Enter First line of address here'
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
					<CustomLabel text='CVC' />
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
