import Button from "../button";

const backgroundStyle = {
	backgroundSize: "cover",
	backgroundPosition: "center",
	filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4))",
};

const Welcome = () => {
	return (
		<div
			className={`py-16 md:py-32 px-6 md:px-0 flex items-center justify-center gap-10`}
		>
			<div className="hidden md:flex gap-5 items-center">
				<div
					className="relative welcome-shadow"
					style={{
						width: 314,
						height: 504,
						background: "url(/about-1.jpg)",
						...backgroundStyle,
					}}
				/>
				<div
					className="relative"
					style={{
						width: 301,
						height: 413,
						background: "url(/about-2.jpg)",
						...backgroundStyle,
					}}
				/>
				<div
					className="relative"
					style={{
						width: 217,
						height: 305,
						background: "url(/about-3.jpg)",
						...backgroundStyle,
					}}
				/>
			</div>
			<div className="flex flex-col gap-5 items-start">
				<h3 className="text-xl md:text-3xl font-extrabold text-black">
					Welcome to StephensWare
				</h3>
				<p
					style={{
						maxWidth: "50ch",
						lineHeight: "175%",
						fontSize: 17,
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<Button text={"book a meeting"} color={"#000"} />
			</div>
		</div>
	);
};

export default Welcome;
