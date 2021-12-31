const CustomLabel = ({ text }) => {
	return (
		<div
			style={{
				width: "100%",
				fontStyle: "normal",
				fontWeight: "500",
				fontSize: "16px",
				lineHeight: "19px",
				color: "#718096",
				margin: "18px 0px",
			}}
		>
			{text}
		</div>
	);
};

export default CustomLabel;
