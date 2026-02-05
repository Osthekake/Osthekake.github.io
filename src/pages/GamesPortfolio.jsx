import React, { useMemo, useState } from 'react';
import Timeline from '../components/Timeline.jsx';
import PortfolioModal from '../components/PortfolioModal.jsx';
import TimelineFilter from '../components/TimelineFilter.jsx';

export default function GamesPortfolio() {
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
                href: "https://osthekake.com/rpg-game/",
                title: "RPG Game",
                badges: ["preact", "nodejs", "websocket"],
                date: "2025-09-18",
                category: "Other Project",
				playable: true,
				recommended: true,
				titleImage: '/screenshots/RPG Game/rewards.png',
				titleStyle: 'game-title-rpg',
                screenshots: [
                    {
                        src: '/screenshots/RPG Game/0.gif',
                        alt: "RPG Game, early gameplay"
                    },
                    {
                        src: '/screenshots/RPG Game/rewards.png',
                        alt: "Collect rewards to get stronger"
                    },
                    {
                        src: '/screenshots/RPG Game/character sheet.png',
                        alt: "Stat-based rpg mechanics"
                    }
                ],
                children: (<>
					<p className='blurb'>
						Fantasy rogue-like dungeon crawler game. You play as a hero who defeats enemies across crypts, taverns and ruins. Featuring multiplayer!
					</p>
                    <p>
                        This is a multiplayer RPG game inspired by online tabletop systems like Roll20. It has a frontend and a backend component, and a shared library between them. Communication between the two is done through websockets.
                        The game is very much in development, and constantly changing. No https for the link yet.
                    </p>
				</>
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
				titleImage: '/screenshots/Chemist/1.png',
				titleStyle: 'game-title-chemist',
                screenshots: [
                    {
                        src: '/screenshots/Chemist/0.png',
                        alt: "Chemist main menu"
                    },
                    {
                        src: '/screenshots/Chemist/1.png',
                        alt: "Chemist gameplay"
                    },
                    {
                        src: '/screenshots/Chemist/orders.png',
                        alt: "Order selection screen with simple and advanced chemistry orders"
                    },
                    {
                        src: '/screenshots/Chemist/flask.png',
                        alt: "Mixing flask being heated on a burner"
                    },
                    {
                        src: '/screenshots/Chemist/failed.png',
                        alt: "Order failed screen showing a destroyed flask and mixture contents"
                    }
                ],
                children: (<>
					<p className='blurb'>
						Fantasy chemistry simulator. Mix chemicals, heat or stir them. Try to puzzle out how to fill the orders.
					</p>
                    <p>
                        This is a game that is meant to simulate a sort of simple fantasy chemistry. You need to deduce what is happening in your mixing bottle based on what you know about the chemicals, and the appearance of the mixture.
                        The original idea was that you should play as a chemist, who receives orders from patients with various ailments, but that doesn't show up in the game as it is.
                        Graphics are very sparse for this one.
                    </p>
				</>
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
				titleImage: 'Town.png',
				titleStyle: 'game-title-bear-smith',
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
						<p className='blurb'>
							Play as a blacksmith in a world of fantasy rpg tropes.
						</p>
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
				titleImage: '/screenshots/Navigator Remake/0.png',
				titleStyle: 'game-title-navigator',
                screenshots: [
                    {
                        src: '/screenshots/Navigator Remake/0.png',
                        alt: "Angular Navigator gameplay"
                    }
                ],
                children: (<>
					<p className='blurb'>
						Find the path to the exit in this 10-second puzzler
					</p>
                    <p>
                        Remake of the game Navigator from my first Ludum Dare entry. This time made with Angular and TypeScript. The animations are done with CSS keyframes.
                    </p>
				</>
					
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
				titleImage: '/screenshots/Out of space/0.png',
				titleStyle: 'game-title-space',
				screenshots: [
					{
						src: '/screenshots/Out of space/0.png',
						alt: "Out of Space Inc gameplay"
					}
				],
				children: (<>
					<p className='blurb'>
						Moving house? Why not use rocket thrusters on the furniture?
					</p>
					<p>
						Using <a href="https://excaliburjs.com/">excalibur.js</a>, I created this game about moving furniture using rocket technology.
						I was not happy with the UX here, and I didn't have the time to make a story or make the game the way I wanted. There is no strong tie-in with the theme.
						I wasted a lot of my time on trying to get click events working properly. Perhaps the framework was not as mature as one might wish.
					</p>
				</>
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
				titleImage: '/screenshots/Werewolf/1.png',
				titleStyle: 'game-title-werewolf',
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
				children: (<>
					<p className='blurb'>
						Play as a rampaging (or sneaky) werewolf! The goal is to eat or turn everyone, in this web-based puzzle game.
					</p>
					<p>After a couple of skipped Ludum Dares, and a few where I tried to participate, but didn't deliver, I made this for LD-35.
						The goal of this management/puzzle game is to eat or transform all the villagers. The various icons have meanings that 
						are not at all self-explainatory, and maybe even misleading. There is some help to be had if you click along the top.<br/>
						This is more or less a standard web-application.
					</p>
				</>
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
				titleImage: '/screenshots/Connected worlds/0.png',
				titleStyle: 'game-title-connected',
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
				children: (<>
					<p className='blurb'>
						Solve the murder-mystery in an innovative immersive puzzle format.
					</p>
					<p>Second collaborative entry for LD-30. Features a faux browser where you as the player will click around the faux internet to gather 
						clues for a murder investigation. Not particularly self-explainatory. It is possible to gather all the clues, and win,
						but I forgot how. <br/>
						Uses the same kind of technology as the previous one, but doesn't have the same intensive render-loop.<br/>
						The game placed #77 in the innovation (jam) category.
					</p>
				</>
				)
			},
			{
				href: "https://www.dropbox.com/s/1cvhbf9bg6kbqfh/Aurora-release.zip?dl=0",
				title: "Aurora",
				linkNote: "Link dead",
				currentlyUnavailable: true,
				badges: ["java", "OpenGL", "GLSL"],
				date: "2011-12-19",
				category: "Other Project",
				children: (<>
					<p className='blurb'>
						GLSL Tech demo
					</p>
					<p>
						This is a home-made graphics engine I made to experiment with shaders in GLSL. Originally I planned to make a northern 
						lights-shader, but in the end I got distracted, and made a bunch of other shaders. <br/>
						Needs java installed to run. Demo shows a globe with night- and day-sides and a movable light source.
					</p>
				</>
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
				titleImage: '/screenshots/Adhesive Surface/0.png',
				titleStyle: 'game-title-adhesive',
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
				children: (<>
					<p className='blurb'>
						Charming and silly adventure style game.
					</p>
					<p>My first collaborative Ludum Dare entry, for LD-29. Programming, concept, rough story and art by me.
						Use the keyboard arrows to move, and enter to select things. This is a small puzzle-adventure game, 
						made with html and javascript. Images are rendered to canvas, and the game is very poorly optimized. 
						It might cause your browser to use a lot of cpu.
					</p>
				</>
				)
			},
			{
				href: "http://ludumdare.com/compo/ludum-dare-28/?action=preview&uid=25639",
				title: "A boy and his rock",
				theme: "You only get one",
				linkNote: "Link dead",
				currentlyUnavailable: true,
				badges: ["java", "gimp"],
				date: "2013-12-15",
				category: "Ludum Dare",
				titleStyle: 'game-title-boy-rock',
				children: (<>
					<p className='blurb'>
						A platformer where you get a single rock as your weapon. Better go pick that up again!
					</p>
					<p>My second Ludum Dare entry, for LD-28. Requires that you download a jar and run locally. <br/>
						You must have java installed in order to play. The game is made using some of the code from the previous game.
						I discovered that platform mechanics are more difficult than you would think.
					</p>
				</>
				)
			},
			{
				href: "http://ludumdare.com/compo/ludum-dare-27/?action=preview&uid=25639",
				title: "Navigator",
				theme: "10 seconds",
				linkNote: "Link dead",
				currentlyUnavailable: true,
				badges: ["java", "gimp"],
				date: "2013-08-25",
				category: "Ludum Dare",
				children: (<>
					<p className='blurb'>
						Find the path to the exit in this 10-second puzzler
					</p>
					<p>My first ever Ludum Dare entry, for LD-27. Requires that you download a jar and run locally. <br/>
						You must have java installed in order to play. The game is created entirely from scratch by me, 
						using nothing but the Java SDK.
						The idea for this game was pretty good, and I later recreated it as a pure javascript game in 2022.
					</p>
				</>
				)
			},
			{
				href: "https://osthekake.github.io/hiscore/",
				title: "HISCORE",
				badges: ["Typescript"],
				date: "2024-09-06",
				category: "Other Project",
				lowEffort: true,
				titleImage: '/screenshots/Hiscore/0.png',
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
				titleImage: '/screenshots/Xord/0.png',
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
				linkNote: "Link dead",
				badges: ["react", "typescript"],
				date: "2023-06-20",
				category: "Other Project",
				titleImage: '/screenshots/RTS Game/0.png',
				titleStyle: 'game-title-rts',
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
				linkNote: "Link dead",
				badges: ["Scala"],
				date: "2021-04-07",
				category: "Other Project",
				titleImage: '/screenshots/Orders Game/0.png',
				titleStyle: 'game-title-map-generator',
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
				href: "https://osthekake.com/HexGame/",
				title: "rotating hexes game",
				badges: ["html", "javaScript", "Three.js"],
				date: "2015-05-01",
				recommended: true,
				playable: true,
				category: "Other Project",
				titleImage: '/screenshots/Rotating Hexes/Screenshot From 2025-12-23 15-25-48.png',
				titleStyle: 'game-title-hexes',
				screenshots: [
					{
						src: '/screenshots/Rotating Hexes/Screenshot From 2025-12-23 15-25-48.png',
						alt: "Rotating hexes game board"
					},
					{
						src: '/screenshots/Rotating Hexes/Screenshot From 2026-01-04 09-58-59.png',
						alt: "Rotating hexes gameplay"
					}
				],
				children: (<>
					<p className='blurb'>
						Match 3 or more, and try to beat the highscore!
					</p>
					<p>This was made after I heard an idea someone had for a game with hexes and some sort of math problems. 
						I thought of a better idea in my humble opinion, and this is the result of that. Created with html and javascript. 
						Graphics are rendered on canvas, and animations are timed and programmed by hand.
					</p>
				</>
				)
			},
			{
				href: "https://brage.bibsys.no/xmlui/bitstream/handle/11250/252480/440517_ATTACHMENT01.zip?sequence=2&isAllowed=y",
				title: "Pythia",
				linkNote: "Link dead",
				badges: ["java", "python", "jython"],
				date: "2010-06-01",
				category: "Other Project",
				titleImage: '/screenshots/Pythia/1.png',
				titleStyle: 'game-title-pythia',
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
				children: (<>
					<p className='blurb'>
						Learn python programming through gaming!
					</p>
					<p>My master thesis. Collaboration with another student. 
						This is a game where you have to program Python in order to progress.
					</p>
				</>
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
			const isLinkDead = item.linkNote === "Link dead"
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

	const hasActiveFilters = !showAll && Object.values(filters).some(v => v);

	return (
		<>
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
			<Timeline items={filteredItems} onSelect={setSelectedItem} hasActiveFilters={hasActiveFilters} />
			<PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
		</>
	);
}

