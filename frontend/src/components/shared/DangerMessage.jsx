function DangerMessage({ error }) {
	return (
		<div
			className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6 mb-8"
			role="alert"
		>
			<strong className="font-bold">{error}</strong>
		</div>
	);
}

export default DangerMessage;
