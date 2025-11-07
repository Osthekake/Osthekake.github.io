import React from 'react';

export default function StatusPill({ type, children }) {
	if (!children) {
		return null;
	}

	const className = `status-pill status-pill--${type}`;
	return (
		<span className={className}>
			{children}
		</span>
	);
}

