function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer p-5 bg-black text-white text-center">
			<p>Copyright &copy; {footerYear}, GreenCity</p>
		</footer>
	);
}

export default Footer;
