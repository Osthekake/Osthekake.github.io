import React from 'react';

export default function LudumDareTheme({ theme }) {
	if (!theme) {
		return null;
	}

	return (
		<div className="ludum-dare-theme">
			<span className="ludum-dare-theme-label">Ludum Dare Theme</span>
			<span className="ludum-dare-theme-value">{theme}</span>
		</div>
	);
}

