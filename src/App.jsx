import React, { useMemo, useState } from 'react';
import Timeline from './components/Timeline.jsx';
import PortfolioModal from './components/PortfolioModal.jsx';
import TimelineFilter from './components/TimelineFilter.jsx';

export default function App() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [showAll, setShowAll] = useState(false);
	const [filters, setFilters] = useState({
		recommended: false,
		playable: true,
		lowEffort: false,
		screenshotOnly: false,
		currentlyUnavailable: false
	});

	const timelineItems = useMemo(() => (
		[
            {
                href: "https://osthekake.github.io/rpg-game/",
                title: "RPG Game",
				linkNote: true,
                badges: ["preact", "nodejs", "websocket"],
                date: "2025-09-18",
                category: "Other Project",
                screenshots: [
                    {
                        src: '/screenshots/RPG Game/0.gif',
                        alt: "RPG Game gameplay"
                    }
                ],
                children: (
                    <p>
                        This is a multiplayer RPG game inspired by online tabletop systems like Roll20. It has a frontend and a backend component, and a shared library between them. Communication between the two is done through websockets.
                        There is no playable version of the game yet, but I have a working prototype.
                    </p>
                )
            },
            {
                href: "https://osthekake.github.io/chemist/",
                title: "Chemist",
                badges: ["react", "typescript", "robot3"],
                date: "2024-09-15",
                category: "Other Project",
                recommended: true,
                playable: true,
                screenshots: [
                    {
                        src: '/screenshots/Chemist/0.png',
                        alt: "Chemist main menu"
                    },
                    {
                        src: '/screenshots/Chemist/1.png',
                        alt: "Chemist gameplay"
                    }
                ],
                children: (
                    <p>
                        This is a game that is meant to simulate a sort of simple fantasy chemistry. The player is a chemist, and can mix chemicals to create new ones.
                        The idea was that you should play as a chemist, who receives orders from patients with various ailments, but that doesn't show up in the game as it is.
                        You need to deduce what is happening in your mixing bottle based on what you know about the chemicals, and the appearance of the mixture.
                        Graphics are very sparse for this one.
                    </p>
                )
            },
            {
                href: "https://osthekake.github.io/angular-smith/",
                title: "Bear Smith",
                badges: ["angular", "typescript", "piskel"],
                date: "2022-06-13",
                category: "Other Project",
                recommended: true,
                playable: true,
                screenshots: [
                    {
                        src: '/screenshots/Bear Smith/0.png',
                        alt: "Bear Smith main menu"
                    },
                    {
                        src: '/screenshots/Bear Smith/1.png',
                        alt: "Bear Smith gameplay"
                    },
                    {
                        src: '/screenshots/Bear Smith/2.png',
                        alt: "Bear Smith gameplay"
                    },
                    {
                        src: '/screenshots/Bear Smith/3.png',
                        alt: "Bear Smith gameplay"
                    }
                ],
                children: (
                    <>
                        <p>
                            This is a ambitious game that I have been working on for a while. The game is about a blacksmith in a world of rpg logic. The smith is also a bear, and there is a silly story. A lot of cute pixel art.
                        </p>
                        <p>
                            The game development is ongoing, and will probably never be finished. I tend to take long breaks from it, and then work on it way too much in short bursts.
                        </p>
                    </>
                )
            },
            {
                href: "https://osthekake.github.io/angular-navigator/angular-navigator/",
                title: "Angular Navigator",
                badges: ["angular", "typescript", "svg"],
                date: "2022-06-20",
                category: "Other Project",
                playable: true,
                screenshots: [
                    {
                        src: '/screenshots/Navigator Remake/0.png',
                        alt: "Angular Navigator gameplay"
                    }
                ],
                children: (
                    <p>
                        Remake of the game Navigator from my first Ludum Dare entry. This time made with Angular and TypeScript. The animations are done with CSS keyframes.
                    </p>
                )
            },
			{
				href: "https://osthekake.github.io/ld42/",
				title: "Out of Space inc",
				theme: "Out of Space",
				badges: ["javascript", "typescript", "excaliburjs"],
				date: "2018-08-13",
				category: "Ludum Dare",
                playable: true,
				screenshots: [
					{
						src: '/screenshots/Out of space/0.png',
						alt: "Out of Space Inc gameplay"
					}
				],
				children: (
					<p>
						Using <a href="https://excaliburjs.com/">excalibur.js</a>, I created this game about moving furniture using rocket technology.
						I was not happy with the UX here, and I didn't have the time to make a story or make the game the way I wanted. There is no strong tie-in with the theme.
						I wasted a lot of my time on trying to get click events working properly. Perhaps the framework was not as mature as one might wish.
					</p>
				)
			},
			{
				href: "http://osthekake.github.io/LD35/",
				title: "Werewolf",
				theme: "Shapeshifters",
				badges: ["html", "javascript", "jQuery", "bootstrap"],
				date: "2016-04-18",
				category: "Ludum Dare",
				recommended: true,
				playable: true,
				screenshots: [
					{
						src: '/screenshots/Werewolf/0.png',
						alt: "Werewolf management view"
					},
					{
						src: '/screenshots/Werewolf/1.png',
						alt: "Werewolf night cycle"
					}
				],
				children: (
					<p>After a couple of skipped Ludum Dares, and a few where I tried to participate, but didn't deliver, I made this for LD-35.
						The goal of this management/puzzle game is to eat or transform all the villagers. The various icons have meanings that 
						are not at all self-explainatory, and maybe even misleading. There is some help to be had if you click along the top.<br/>
						This is more or less a standard web-application.
					</p>
				)
			},
			{
				href: "http://osthekake.github.io/LD30/",
				title: "Connected Worlds",
				theme: "Connected Worlds",
                playable: true,
				badges: ["html", "javascript", "gimp", "git"],
				date: "2014-08-25",
				category: "Ludum Dare",
				screenshots: [
					{
						src: '/screenshots/Connected worlds/0.png',
						alt: "Connected Worlds faux browser"
					},
					{
						src: '/screenshots/Connected worlds/1.png',
						alt: "Connected Worlds clue interface"
					}
				],
				children: (
					<p>Second collaborative entry for LD-30. Features a faux browser where you as the player will click around the faux internet to gather 
						clues for a murder investigation. Not particularly self-explainatory. It is possible to gather all the clues, and win,
						but I forgot how. <br/>
						Uses the same kind of technology as the previous one, but doesn't have the same intensive render-loop.<br/>
						The game placed #77 in the innovation (jam) category.
					</p>
				)
			},
			{
				href: "https://www.dropbox.com/s/1cvhbf9bg6kbqfh/Aurora-release.zip?dl=0",
				title: "Aurora",
				linkNote: true,
				currentlyUnavailable: true,
				badges: ["java", "OpenGL", "GLSL"],
				date: "2011-12-19",
				category: "Other Project",
				children: (
					<p>
						This is a home-made graphics engine I made to experiment with shaders in GLSL. Originally I planned to make a northern 
						lights-shader, but in the end I got distracted, and made a bunch of other shaders. <br/>
						Needs java installed to run. Demo shows a globe with night- and day-sides and a movable light source.
					</p>
				)
			},
			{
				href: "http://osthekake.github.io/LD29/main",
				title: "Operation Adhesive Surface",
				theme: "Beneath the surface",
                playable: true,
				badges: ["html", "javascript", "gimp", "git"],
				date: "2014-04-28",
				category: "Ludum Dare",
				screenshots: [
					{
						src: '/screenshots/Adhesive Surface/0.png',
						alt: "Operation Adhesive Surface dialogue"
					},
					{
						src: '/screenshots/Adhesive Surface/1.png',
						alt: "Operation Adhesive Surface gameplay"
					}
				],
				children: (
					<p>My first collaborative Ludum Dare entry, for LD-29. Programming, concept, rough story and art by me.
						Use the keyboard arrows to move, and enter to select things. This is a small puzzle-adventure game, 
						made with html and javascript. Images are rendered to canvas, and the game is very poorly optimized. 
						It might cause your browser to use a lot of cpu.
					</p>
				)
			},
			{
				href: "http://ludumdare.com/compo/ludum-dare-28/?action=preview&uid=25639",
				title: "A boy and his rock",
				theme: "You only get one",
				linkNote: true,
				currentlyUnavailable: true,
				badges: ["java", "gimp"],
				date: "2013-12-15",
				category: "Ludum Dare",
				children: (
					<p>My second Ludum Dare entry, for LD-28. Requires that you download a jar and run locally. <br/>
						You must have java installed in order to play. The game is made using some of the code from the previous game.
						I discovered that platform mechanics are more difficult than you would think.
					</p>
				)
			},
			{
				href: "http://ludumdare.com/compo/ludum-dare-27/?action=preview&uid=25639",
				title: "Navigator",
				theme: "10 seconds",
				linkNote: true,
				currentlyUnavailable: true,
				badges: ["java", "gimp"],
				date: "2013-08-25",
				category: "Ludum Dare",
				children: (
					<p>My first ever Ludum Dare entry, for LD-27. Requires that you download a jar and run locally. <br/>
						You must have java installed in order to play. The game is created entirely from scratch by me, 
						using nothing but the Java SDK.
						The idea for this game was pretty good, and I later recreated it as a pure javascript game in 2022.
					</p>
				)
			},
			{
				href: "https://osthekake.github.io/hiscore/",
				title: "HISCORE",
				badges: ["Typescript"],
				date: "2024-09-06",
				category: "Other Project",
				lowEffort: true,
				children: (
					<p>A retro highscore table based on a json file. Created for Funktive stand at TDC 2024.</p>
				),
				screenshots: [
                    {
                        src: '/screenshots/Hiscore/0.png',
                        alt: "HISCORE demo"
                    }
                ],
			},
			{
				href: "https://osthekake.github.io/xord/",
				title: "Xord",
				badges: ["react"],
				date: "2025-04-18",
				category: "Other Project",
				lowEffort: true,
				children: (
					<p>Created a crossword for a scavenger hunt for niece and nephews. The whole thing was made in an evening.</p>
				),
				screenshots: [
                    {
                        src: '/screenshots/Xord/0.png',
                        alt: "Xord crossword"
                    }
                ],
			},
			{
				href: "",
				title: "RTS Game",
				linkNote: true,
				badges: ["react", "typescript"],
				date: "2023-06-20",
				category: "Other Project",
				children: (
					<p>Prototype of a RTS game. Made with React and TypeScript. The game features procedurally generated maps. Never got as far as to actually work on the concept I had in mind.</p>
				),
				screenshots: [
					{
						src: '/screenshots/RTS Game/0.png',
						alt: "Example generated map"
					},
				],
			},
			{
				href: "",
				title: "Map Generator",
				linkNote: true,
				badges: ["Scala"],
				date: "2021-04-07",
				category: "Other Project",
				children: (
					<p>Generated height maps with humidity and elevation. Features rivers and lakes, and a primitive lighting system.</p>
				),
				screenshots: [
					{
						src: '/screenshots/Orders Game/0.png',
						alt: "Example generated map"
					},
				],
			},
			{
				href: "http://osthekake.github.io/HexGame/main",
				title: "Rotating hexes game",
				badges: ["html", "javaScript"],
				date: "2015-05-01",
				recommended: true,
				playable: true,
				category: "Other Project",
				screenshots: [
					{
						src: '/screenshots/Rotating Hexes/0.png',
						alt: "Rotating hexes game board"
					}
				],
				children: (
					<p>This was made after I heard an idea someone had for a game with hexes and some sort of math problems. 
						I thought of a better idea in my humble opinion, and this is the result of that. Created with html and javascript. 
						Graphics are rendered on canvas, and animations are timed and programmed by hand.
					</p>
				)
			},
			{
				href: "https://brage.bibsys.no/xmlui/bitstream/handle/11250/252480/440517_ATTACHMENT01.zip?sequence=2&isAllowed=y",
				title: "Pythia",
				linkNote: true,
				badges: ["java", "python", "jython"],
				date: "2010-06-01",
				category: "Other Project",
				screenshots: [
					{
						src: '/screenshots/Pythia/0.png',
						alt: "Pythia gameplay"
					},
					{
						src: '/screenshots/Pythia/1.png',
						alt: "Pythia gameplay"
					},
					{
						src: '/screenshots/Pythia/3.png',
						alt: "Pythia gameplay"
					}
				],
				children: (
					<p>My master thesis. Collaboration with another student. 
						This is a game where you have to program Python in order to progress.
					</p>
				)
			}
		].sort((a, b) => new Date(b.date) - new Date(a.date))
	), []);

	const filteredItems = useMemo(() => {
		if (showAll) {
			return timelineItems;
		}

		const hasActiveFilters = Object.values(filters).some(v => v);
		if (!hasActiveFilters) {
			return timelineItems;
		}

		return timelineItems.filter(item => {
			const isLinkDead = Boolean(item.linkNote) || !item.href || item.href.trim() === '';
			const hasScreenshotOnly = isLinkDead && !item.currentlyUnavailable;

			// If any filter is active, the item must match at least one active filter
			if (filters.recommended && item.recommended) return true;
			if (filters.playable && item.playable) return true;
			if (filters.lowEffort && item.lowEffort) return true;
			if (filters.screenshotOnly && hasScreenshotOnly) return true;
			if (filters.currentlyUnavailable && item.currentlyUnavailable) return true;

			return false;
		});
	}, [timelineItems, filters, showAll]);

	const handleFilterChange = (key, value) => {
		setFilters(prev => ({
			...prev,
			[key]: value
		}));
	};

	const handleShowAllChange = (value) => {
		setShowAll(value);
	};

	return (
		<div className="container">
			<div className="jumbotron-header">
				<h1>Portfolio for Andreas Johnsen</h1>
				<div className="jumbotron-right">
					<img src="https://s.gravatar.com/avatar/b66aef7f00250adf6ff5bc070d10b8bd?s=80" className="img-thumbnail"/>
					<a href="https://github.com/Osthekake" className="github-link" target="_blank" rel="noopener noreferrer">
						<svg className="github-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
						</svg>
						Osthekake
					</a>
					<a href="https://www.linkedin.com/in/andreas-johnsen-805a37106/" className="github-link linkedin-link" target="_blank" rel="noopener noreferrer">
						<svg className="github-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
						LinkedIn
					</a>
				</div>
			</div>
			<div className="jumbotron">
				<p className="lead">This is a portfolio of various games and hobby project made by me. Some of these are made for the game jam Ludum Dare, and others are not. 
					The point of this portfolio is to collect and showcase my skills outside of work experience.</p>
				<p className="lead">Ludum Dare is a 48 hour game jam that happens globally, three times a year. Participants have to create an entire game by themselves in 48 hours. In later years I have joined the 72 hour jam, which allows for collaboration.</p>
				<p className="lead">Unfortunately, I have lost some of the binaries and screenshots for older Ludum Dare entries, as the file hosting service I used for them has been discontinued.</p>
				<p className="text-muted">Alongside jam entries, I experiment with other gameplay ideas and technology prototypes.</p>
			</div>
			<TimelineFilter 
				filters={filters} 
				showAll={showAll}
				onFilterChange={handleFilterChange} 
				onShowAllChange={handleShowAllChange}
			/>
			<Timeline items={filteredItems} onSelect={setSelectedItem} />
			<PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
		</div>
	);
}

