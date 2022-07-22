import Link from "next/link";
import styles from "../../styles/Nav.module.css";

const Nav = () => {
	return (
		<div className="flex items-center justify-between mx-6 md:mx-20 pt-10 absolute top-0 right-0 left-0 z-10 ">
			<div
				id="logo"
				className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white"
			></div>

			<ul className="gap-12 items-center hidden md:flex">
				<li className={`${styles.navLinks} ${styles.active}`}>
					<Link href={"#"}>
						<a className=" nav-menu">Home</a>
					</Link>
				</li>

				<li className={`${styles.navLinks}`}>
					<Link href={"#"}>
						<a className="">Services</a>
					</Link>
				</li>

				<li className={`${styles.navLinks}`}>
					<Link href={"/#about"}>
						<a className="">About</a>
					</Link>
				</li>

				<li className={`${styles.navLinks}`}>
					<Link href={"#"}>
						<a className="">Contact</a>
					</Link>
				</li>
			</ul>

			<div className="block md:hidden text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Nav;
