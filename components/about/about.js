import Button from "../button";
import Image from "next/image";

const cardStyle = {
	background: "linear-gradient(154.98deg, #0E55C8 0%, #20A68B 100%)",
	borderRadius: "20px",
};

const About = () => {
	return (
		<div id="about" className="py-16 md:py-24 px-6 md:px-10">
			<h2 className="heading font-extrabold mb-10 md:mb-16 text-black">
				About Us.
			</h2>

			<div className="flex flex-col md:flex-row justify-center items-center gap-16">
				<div
					id="card"
					className="py-12 px-16 flex flex-col items-center"
					style={{ ...cardStyle }}
				>
					<div
						className="rounded-full h-64 w-64 mb-6"
						style={{
							background: "url(/main.jpg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>

					<h4 className="font-bold text-2xl mb-4 text-white">
						Stephen Smith
						<span className="block text-center text-sm font-medium">
							C.E.O
						</span>
					</h4>

					<div className="mb-6 flex gap-3 hidden">
						<div className="w-8 h-8 p-2 bg-white rounded-full relative">
							<div className="relative w-full h-full">
								<Image src={`/facebook.png`} layout="fill" />
							</div>
						</div>
						<div className="w-8 h-8 p-2 bg-white rounded-full ">
							<div className="relative w-full h-full">
								<Image src={`/instagram.png`} layout="fill" />
							</div>
						</div>
						<div className="w-8 h-8 p-2 bg-white rounded-full ">
							<div className="relative w-full h-full">
								<Image src={`/twitter.png`} layout="fill" />
							</div>
						</div>
					</div>

					<Button
						text={"book a meeting"}
						color={"#000"}
						outline={false}
					/>
				</div>

				<div
					id="about-write-up"
					className="flex flex-col gap-5 md:gap-10 items-start"
				>
					<h3 className="text-xl md:text-3xl font-extrabold text-black">
						What We Offer At StephenWare
					</h3>
					<p
						style={{
							maxWidth: "70ch",
							lineHeight: "175%",
							fontSize: 17,
						}}
						className="md:text-justify text-left"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum
						dolore eu fugiat nulla pariatur Excepteur sint occaecat
					</p>
					<div className="mb-6 flex gap-3">
						<div className="w-10 h-10 p-2 bg-white rounded-full relative">
							<div className="relative w-full h-full">
								<Image src={`/facebook.png`} layout="fill" />
							</div>
						</div>
						<div className="w-10 h-10 p-2 bg-white rounded-full ">
							<div className="relative w-full h-full">
								<Image src={`/instagram.png`} layout="fill" />
							</div>
						</div>
						<div className="w-10 h-10 p-2 bg-white rounded-full ">
							<div className="relative w-full h-full">
								<Image src={`/twitter.png`} layout="fill" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
