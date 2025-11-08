import React from 'react';

export default function TimelineFilter({ filters, showAll, onFilterChange, onShowAllChange }) {
	const filterOptions = [
		{ key: 'recommended', label: 'Recommended' },
		{ key: 'playable', label: 'Playable' },
		{ key: 'lowEffort', label: 'Low Effort' },
		{ key: 'screenshotOnly', label: 'Screenshot Only' },
		{ key: 'currentlyUnavailable', label: 'Currently Unavailable' }
	];

	return (
		<div className="timeline-filter">
			<div className="timeline-filter-label">Filter by status:</div>
			<div className="timeline-filter-toggles">
				<div className="timeline-filter-toggles-left">
					{filterOptions.map(option => (
						<label 
							key={option.key} 
							className={`timeline-filter-toggle ${showAll ? 'timeline-filter-toggle--disabled' : ''}`}
						>
							<input
								type="checkbox"
								checked={filters[option.key] || false}
								onChange={(e) => onFilterChange(option.key, e.target.checked)}
								disabled={showAll}
							/>
							<span className="timeline-filter-toggle-label">{option.label}</span>
						</label>
					))}
				</div>
				<label className="timeline-filter-toggle timeline-filter-toggle--show-all">
					<input
						type="checkbox"
						checked={showAll}
						onChange={(e) => onShowAllChange(e.target.checked)}
					/>
					<span className="timeline-filter-toggle-label">Show all entries</span>
				</label>
			</div>
		</div>
	);
}

