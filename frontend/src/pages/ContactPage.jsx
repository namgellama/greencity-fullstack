import About from '../components/About';
import Contact from '../components/Contact';

function ContactPage() {
	return (
		<section className="grid grid-cols-1">
			<Contact />
			<About />
		</section>
	);
}

export default ContactPage;
