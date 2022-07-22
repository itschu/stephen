import styles from "../../styles/Hero.module.css";
import Button from "../button";
import Nav from "../nav";

const Hero = () => {
	return (
		<div className={`${styles.hero} h-screen relative flex items-center`}>
			<Nav />

			<div
				className={`${styles.heroTextWrapper} flex items-center md:items-start flex-col gap-8 md:gap-5 rounded-2xl p-5 py-12 md:px-16 m-5 md:ml-20 mt-20`}
			>
				<h1
					className="text-white font-black  font-body text-3xl md:text-5xl"
					style={{ lineHeight: "145%", maxWidth: "18ch" }}
				>
					Lorem Ipsum Dolor Lamar sit amit
				</h1>
				<p
					style={{
						lineHeight: "175%",
						maxWidth: "55ch",
						fontSize: 17,
					}}
					className="text-white font-light"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
				</p>
				<Button text={"Explore"} icon={true} />
			</div>
		</div>
	);
};

export default Hero;
