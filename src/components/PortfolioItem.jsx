 import React from 'react';
import LudumDareTheme from './LudumDareTheme.jsx';
import StatusPill from './StatusPill.jsx';
 
export default function PortfolioItem({ href, title, theme, linkNote, badges = [], date, category, children, onSelect, recommended, playable }) {
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
					<StatusPill type="recommended">{recommended ? 'Recommended' : null}</StatusPill>
					<StatusPill type="playable">{playable ? 'Playable' : null}</StatusPill>
				</div>
				{date ? (<span className="timeline-date">{new Date(date).toLocaleDateString('en-GB')}</span>) : null}
			</div>
			<LudumDareTheme theme={theme} />
			{children}
			{badges.length > 0 ? (
				<div><i>{badges.map((b, i) => (<span key={i} className="badge">{b}</span>))}</i></div>
			) : null}
		</li>
	);
 }
 
 
