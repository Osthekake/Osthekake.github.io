 import React from 'react';
import LudumDareTheme from './LudumDareTheme.jsx';
import StatusPill from './StatusPill.jsx';
 
export default function PortfolioItem({ href, title, theme, linkNote, badges = [], date, category, children, onSelect, recommended, playable, currentlyUnavailable, lowEffort, titleImage, titleStyle }) {
	const isLinkDead = Boolean(linkNote) || !href || href.trim() === '';

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
			style={titleImage ? { backgroundImage: `url("${titleImage}")` } : {}}
		>
			<div className="timeline-item-content">
				<div className="timeline-header">
					<div className="timeline-title">
						<h3><a href={href} onClick={handleItemClick} className={titleStyle}>{title}</a></h3>
						<StatusPill type="recommended">{recommended ? 'Recommended' : null}</StatusPill>
						<StatusPill type="playable">{playable ? 'Playable' : null}</StatusPill>
						<StatusPill type="low-effort">{lowEffort ? 'Low Effort' : null}</StatusPill>
						<StatusPill type="screenshot-only">{isLinkDead && !currentlyUnavailable ? 'screenshot only' : null}</StatusPill>
						<StatusPill type="currently-unavailable">{currentlyUnavailable ? 'currently unavailable' : null}</StatusPill>
					</div>
					{date ? (<span className="timeline-date">{new Date(date).toLocaleDateString('en-GB')}</span>) : null}
				</div>
				<LudumDareTheme theme={theme} />
				{children}
				{badges.length > 0 ? (
					<div><i>{badges.map((b, i) => (<span key={i} className="badge">{b}</span>))}</i></div>
				) : null}
			</div>
		</li>
	);
 }
 
 
