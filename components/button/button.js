const Button = ({ text, icon = false, outline = true, color = "#fff" }) => {
	return (
		<button
			className={`flex items-center py-3 px-7 rounded-full gap-3`}
			style={{
				color,
				border: outline ? `1px solid ${color}` : `1px solid #fff}`,
				textTransform: "capitalize",
				fontSize: 15,
				backgroundColor: outline ? "transparent" : "#fff",
			}}
		>
			<span className={`${outline || "font-bold"}`}>{text}</span>
			{icon && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			)}
		</button>
	);
};

export default Button;
