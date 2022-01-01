import { useState } from "react";
import CustomLabel from "../../common/CustomLebel";
import Dropdown from "../../common/dropdown";
import Input from "../../common/input";
import styles from "./shippingDetailes.module.scss";
const ShippingDetailsForm = ({ status }) => {
	const [frstliadress, setFirstline] = useState("123");
	const [streetName, setStreetName] = useState("Electric avenue");
	const [postCode, setPostCode] = useState("Electric avenue");
	const shippingtypes = ["ABC - 123", "DSS - 167", "AJK- 765"];
	const adrresses = ["123 , Electric avenue"];
	return (
		<form className={styles.formMain}>
			<h2>Shipping Details</h2>
			<div className={styles.addressAndcardtype}>
				<span className={styles.typetext}>Use saved address</span>
				<Dropdown data={adrresses} />
			</div>
			<CustomLabel text='First line of address' />
			<Input
				type='text'
				placeholder='Enter First line of address here'
				onchange={setFirstline}
				required={true}
				value={frstliadress}
				done
			/>
			<CustomLabel text='Street name' />
			<Input
				type='text'
				placeholder='Enter Street name here'
				onchange={setStreetName}
				required={true}
				value={streetName}
				done
			/>
			<div className={styles.postCodeAndshipingtype}>
				<div className={styles.postcode}>
					<CustomLabel text='Postcode' />
					<Input
						type='text'
						placeholder='Enter Postcode here'
						onchange={setPostCode}
						required={true}
						value={postCode}
					/>
				</div>
				<div className={styles.shippingtype}>
					<CustomLabel text='Select shipping' />
					<Dropdown data={shippingtypes} />
				</div>
			</div>
		</form>
	);
};

export default ShippingDetailsForm;
