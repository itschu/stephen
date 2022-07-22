import Button from "../button";

const Works = () => {
	const bg = {
		backgroundImage: "url(/works.jpg)",
		backgroundImage:
			"linear-gradient(107.93deg, rgba(17, 97, 191, 0.95) 0%, rgba(158, 181, 209, 0.282031) 0.01%, rgba(16, 95, 193, 0.95) 0.02%, rgba(30, 159, 145, 0.95) 100%, rgba(29, 154, 148, 0.95) 100%)",

		// backgroundPosition: "center",
		// backgroundSize: "cover",
	};
	return (
		<div
			id="works"
			className="py-14 md:py-16 px-6 md:px-10 h-fit flex flex-col gap-14 items-center "
			style={bg}
		>
			<h2 className="heading font-extrabold mb-10 md:mb-10 text-white self-start">
				Our Works
			</h2>

			<div
				className="grid grid-cols-10 md:grid-cols-11 gap-2 w-full"
				style={{ minHeight: 500 }}
			>
				<div className="bg-neutral-200 col-span-5 md:col-span-2 row-span-2 md:row-span-2"></div>
				<div className="bg-neutral-200 col-span-5 md:col-span-3 row-span-2 md:row-span-2"></div>
				<div className="bg-neutral-200 col-span-2 md:col-span-2 row-span-2 md:row-span-2"></div>
				<div className="bg-neutral-200 col-span-6 md:col-span-2 row-span-2 md:row-span-1"></div>
				<div className="bg-neutral-200 col-span-2 md:col-span-2 row-span-2 md:row-span-2"></div>

				<div className="bg-neutral-100 col-span-6 md:col-span-2 row-span-2 md:row-span-3"></div>
				<div className="bg-neutral-400 col-span-4 md:col-span-4 row-span-2 md:row-span-2"></div>
				<div className="bg-neutral-200 col-span-3 md:col-span-3 row-span-2 md:row-span-2"></div>
				<div className="bg-neutral-200 col-span-4 md:col-span-1 row-span-2 md:row-span-2"></div>
				<div className="bg-neutral-200 col-span-3 md:col-span-1 row-span-2 md:row-span-2"></div>
			</div>

			<Button text={"book a meeting"} color={"#000"} outline={false} />
		</div>
	);
};

export default Works;
