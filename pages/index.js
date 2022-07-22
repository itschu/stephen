import About from "../components/about";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Welcome from "../components/welcome";
import Works from "../components/works";

const Index = () => {
	return (
		<div className={`font-body text-gray-700 `}>
			<Hero />
			<Welcome />
			<About />
			<Works />
			<Footer />
		</div>
	);
};

export default Index;
