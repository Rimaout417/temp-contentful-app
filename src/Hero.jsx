import heroImg from "./assets/hero.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						quas asperiores facilis dolores vero perferendis, officia placeat
						magnam incidunt voluptas quos totam, error tempora iure? Natus quae
						eaque deserunt, accusantium officia error explicabo nulla
						laudantium!
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman and the browser" className="img" />
				</div>
			</div>
		</section>
	);
};
export default Hero;
