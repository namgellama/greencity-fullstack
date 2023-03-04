import React from 'react';

function AlertMessage({ error }) {
	return (
		<div
			className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
			role="alert"
		>
			<p className="font-bold">Oops !!!</p>
			<p>{error}</p>
		</div>
	);
}

export default AlertMessage;
