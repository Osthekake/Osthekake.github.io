 import React from 'react';
 
export default function PortfolioItem({ href, title, theme, linkNote, badges = [], date, category, children, onSelect }) {
	const handleItemClick = (event) => {
		if (onSelect) {
			event.preventDefault();
			event.stopPropagation();
			onSelect();
		}
	};

	const handleKeyDown = (event) => {
		if ((event.key === 'Enter' || event.key === ' ') && onSelect) {
			event.preventDefault();
			event.stopPropagation();
			onSelect();
		}
	};

	return (
		<li
			className="timeline-item list-group-item"
			onClick={onSelect ? handleItemClick : undefined}
			onKeyDown={onSelect ? handleKeyDown : undefined}
			role={onSelect ? 'button' : undefined}
			tabIndex={onSelect ? 0 : undefined}
		>
			<div className="timeline-header">
				<div className="timeline-title">
					<h3><a href={href} onClick={handleItemClick}>{title}</a></h3>
					{category ? (<span className="timeline-category">{category}</span>) : null}
				</div>
				{date ? (<span className="timeline-date">{new Date(date).toLocaleDateString('en-GB')}</span>) : null}
			</div>
			{theme ? (<>Ludum Dare Theme: <strong>{theme}</strong></>) : null}
			{children}
			{badges.length > 0 ? (
				<div><i>{badges.map((b, i) => (<span key={i} className="badge">{b}</span>))}</i></div>
			) : null}
		</li>
	);
 }
 
 
