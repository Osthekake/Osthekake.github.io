import React from 'react';
import PortfolioItem from './PortfolioItem.jsx';

export default function Timeline({ items, onSelect, hasActiveFilters }) {
	let lastYear = null;
	return (
		<div className="timeline-wrapper">
			<ul className="timeline list-unstyled">
				{items.map((item, index) => {
					const year = item.date ? new Date(item.date).getFullYear() : null;
					const needsYear = year && year !== lastYear;
					lastYear = year ?? lastYear;
					return (
						<React.Fragment key={index}>
							{needsYear ? (
								<li className="timeline-year">{year}</li>
							) : null}
							<PortfolioItem
								href={item.href}
								title={item.title}
								theme={item.theme}
								linkNote={item.linkNote}
								badges={item.badges}
								date={item.date}
								category={item.category}
								recommended={item.recommended}
								playable={item.playable}
								currentlyUnavailable={item.currentlyUnavailable}
								lowEffort={item.lowEffort}
								titleImage={item.titleImage}
								titleStyle={item.titleStyle}
								onSelect={onSelect ? () => onSelect(item) : undefined}
							>
								{item.children}
							</PortfolioItem>
						</React.Fragment>
					);
				})}
			</ul>
			<p className="timeline-note">
				{hasActiveFilters
					? "Disable filters to see more entries. Older projects have been lost as they were never uploaded to GitHub."
					: "Older projects have been lost as they were never uploaded to GitHub."}
			</p>
		</div>
	);
}

