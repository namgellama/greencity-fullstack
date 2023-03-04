function Contact() {
	return (
		<section className="w-full py-8">
			<h1 className="text-center text-4xl lg:text-5xl font-bold">Contact Us</h1>
			<form className="flex flex-col items-center py-6">
				<div className="container px-6 w-[375px] md:w-[550px] lg:w-[700px] flex flex-col mt-4 items-center">
					<label
						className="mb-3 text-xl font-semibold self-start"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="w-[100%] h-[42px] rounded-md border-2 border-gray-300 bg-gray-200 outline-0 p-4"
						type="text"
						id="name"
						autoComplete="off"
					/>
				</div>
				<div className="container px-6 w-[375px] md:w-[550px] lg:w-[700px] flex flex-col mt-4 items-center">
					<label
						className="mb-3 text-xl font-semibold self-start"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="w-[100%] h-[42px] rounded-md border-2 border-gray-300 bg-gray-200 outline-0 p-4"
						type="email"
						id="email"
						autoComplete="off"
					/>
				</div>
				<div className="container px-6 w-[375px] md:w-[550px] lg:w-[700px] flex flex-col mt-4 items-center">
					<label
						className="mb-3 text-xl font-semibold self-start"
						htmlFor="phone"
					>
						Phone
					</label>
					<input
						className="w-[100%] h-[42px] rounded-md border-2 bborder-gray-300 bg-gray-200 outline-0 p-4"
						type="text"
						id="phone"
						autoComplete="off"
					/>
				</div>
				<div className="container px-6 w-[375px] md:w-[550px] lg:w-[700px] flex flex-col mt-4 items-center">
					<label
						className="mb-3 text-xl font-semibold self-start"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						className="w-[100%] h-[130px] rounded-md border-2 border-gray-300 bg-gray-200 outline-0 p-4"
						id="message"
						autoComplete="off"
					/>
				</div>
				<div className="w-full flex justify-center mt-7">
					<input
						className="bg-[#111] text-[#fffbfb] uppercase cursor-pointer outline-0 border-0 w-[35%] md:w-[20%] lg:w-[10%] py-2 rounded-md"
						type="button"
						value="Send"
					/>
				</div>
			</form>
		</section>
	);
}

export default Contact;
