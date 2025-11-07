import React, { useEffect, useState } from 'react';
import LudumDareTheme from './LudumDareTheme.jsx';
import StatusPill from './StatusPill.jsx';

export default function PortfolioModal({ item, onClose }) {
	const [currentShot, setCurrentShot] = useState(0);

	useEffect(() => {
		setCurrentShot(0);
	}, [item]);

	if (!item) {
		return null;
	}

	const handleBackdropClick = (event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	const isLinkDead = Boolean(item.linkNote);
	const handleVisitClick = (event) => {
		if (isLinkDead) {
			event.preventDefault();
		}
	};

	const screenshots = item.screenshots || [];
	const hasMultipleShots = screenshots.length > 1;
	const activeShot = screenshots[currentShot];

	const goPrev = () => {
		setCurrentShot((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
	};

	const goNext = () => {
		setCurrentShot((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="portfolio-modal-backdrop" onClick={handleBackdropClick}>
			<div className="portfolio-modal" role="dialog" aria-modal="true" aria-labelledby="portfolio-modal-title">
				<button type="button" className="portfolio-modal-close" onClick={onClose} aria-label="Close">
					&times;
				</button>
				<header className="portfolio-modal-header">
					<h2 id="portfolio-modal-title">{item.title}</h2>
					<div className="portfolio-modal-meta">
						<LudumDareTheme theme={item.theme} />
						<StatusPill type="recommended">{item.recommended ? 'Recommended' : null}</StatusPill>
						<StatusPill type="playable">{item.playable ? 'Playable' : null}</StatusPill>
						{item.date ? (<span className="timeline-date">{new Date(item.date).toLocaleDateString('en-GB')}</span>) : null}
					</div>
				</header>
				<div className="portfolio-modal-body">
					{item.children}
					{item.badges && item.badges.length ? (
						<div className="portfolio-modal-badges">
							{item.badges.map((badge, index) => (
								<span key={index} className="badge">{badge}</span>
							))}
						</div>
					) : null}
					{activeShot ? (
						<section className="portfolio-modal-gallery" aria-label="Project screenshots">
							<figure className="portfolio-gallery-figure">
								{hasMultipleShots ? (
									<>
										<button type="button" className="gallery-nav gallery-nav--prev" onClick={goPrev} aria-label="Previous screenshot">
											&#8249;
										</button>
										<button type="button" className="gallery-nav gallery-nav--next" onClick={goNext} aria-label="Next screenshot">
											&#8250;
										</button>
									</>
								) : null}
								<img src={activeShot.src} alt={activeShot.alt || `${item.title} screenshot ${currentShot + 1}`} />
								{activeShot.caption ? (<figcaption>{activeShot.caption}</figcaption>) : null}
								{hasMultipleShots ? (
									<div className="gallery-indicator">{currentShot + 1} / {screenshots.length}</div>
								) : null}
							</figure>
						</section>
					) : null}
				</div>
				<div className="portfolio-modal-footer">
					{isLinkDead ? (<span className="link-dead-note">(Link dead)</span>) : null}
					<a
						className={`btn ${isLinkDead ? 'btn-outline-secondary portfolio-link-dead' : 'btn-primary'}`}
						href={item.href}
						onClick={handleVisitClick}
						target={isLinkDead ? undefined : '_blank'}
						rel={isLinkDead ? undefined : 'noopener noreferrer'}
						aria-disabled={isLinkDead ? 'true' : 'false'}
					>
						Visit project
					</a>
				</div>
			</div>
		</div>
	);
}


