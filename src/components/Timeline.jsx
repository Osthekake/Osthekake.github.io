import React from 'react';
import PortfolioItem from './PortfolioItem.jsx';

export default function Timeline({ items, onSelect }) {
	let lastYear = null;
	return (
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
							onSelect={onSelect ? () => onSelect(item) : undefined}
						>
							{item.children}
						</PortfolioItem>
					</React.Fragment>
				);
			})}
		</ul>
	);
}


