const Input = ({ type, placeholder, required, onchange, value, done }) => {
	return (
		<div style={{ width: "100%", height: "59px", position: "relative" }}>
			<input
				style={{
					width: "100%",
					height: "59px",
					background: "#E2E8F0",
					border: "none",
					borderRadius: "5px",
					padding: "20px 18px",
					fontStyle: "normal",
					fontWeight: 500,
					fontSize: "16px",
					color: "#2D3748",
				}}
				value={value}
				type={type}
				placeholder={placeholder}
				required={required}
				onChange={(e) => onchange(e.target.value)}
			/>

			{done === false && done !== undefined && (
				<img
					src='circle-fill.svg'
					style={{ position: "absolute", top: "32%", right: "17px" }}
				/>
			)}
			{done === true && done !== undefined && (
				<img
					src='checkgreen.svg'
					style={{
						position: "absolute",
						top: "35%",
						right: "19px",
						width: "20px",
						height: "20px",
					}}
				/>
			)}
		</div>
	);
};

export default Input;
