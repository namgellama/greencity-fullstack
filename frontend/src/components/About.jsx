import AboutImg from '../assets/about-img.jpg';

function About() {
	return (
		<section className="lg:w-[1200px] mx-auto mt-12 mb-6 text-black px-2">
			<h1 className="text-4xl lg:text-5xl font-bold mb-2 text-center">
				About Us
			</h1>
			<div className="grid px-4 lg:grid-cols-1fr-2fr items-center gap-4">
				<img
					className="hidden lg:block w-[400px] h-[280px] object-cover"
					style={{ boxShadow: '2px 3px 13px 3px #111' }}
					src={AboutImg}
					alt="About us image"
				/>
				<div className="text-xl font-semibold ml-0 mt-6 lg:ml-5 mb-5 text-justify md:px-8 lg:pl-8">
					<p>
						GreenCity, established in 2022 in Lalitpur, Nepal, is a socially
						responsible company that specializes in importing environmentally
						friendly products. Our mission is to provide high-quality,
						sustainable products that have a minimal environmental impact while
						promoting green living and environmental awareness in our community.
						With a focus on the local market and a commitment to our global
						responsibility, GreenCity is dedicated to making a positive impact
						both at home and abroad.
						<span className="inline lg:hidden">
							&nbsp; Join us in our mission to create a greener future and
							contact us today to learn more about how we can help you!
						</span>
						<span className="hidden lg:block">
							GreenCity is a provider of quality products and services to
							businesses and individuals. Our commitment to excellence and
							customer satisfaction has made us a trusted partner for all our
							clients. Join us in our mission to create a greener future and
							contact us today to learn more about how we can help you!
						</span>
					</p>
				</div>
				<div className="flex justify-center md:hidden lg:hidden ">
					<img
						className="w-[400px] h-[280px] object-cover"
						style={{ boxShadow: '2px 3px 13px 3px #111' }}
						src={AboutImg}
						alt="About us image"
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
