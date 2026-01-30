import React from 'react';

export default function About() {
	return (
		<div className="jumbotron">
			<div className="about-hero">
				<img src="/PXL_20251221_132115756.MP.jpg" className="about-hero-photo" alt="Andreas Johnsen" />
			</div>
			<h2>About the Artist</h2>
			<p className="lead">
				Hello! I'm Andreas Johnsen. I grew up and live in Norway, where I spend my time creating things,
				exploring technology, and pursuing various creative interests.
			</p>
			<p className="lead">
				I'm passionate about games, particularly role-playing games, fantasy, and science fiction. My interest in computer games
				has led me to participate in game jams like Ludum Dare, where I create complete games in 48-72 hours.
				These projects allow me to experiment with different technologies and game mechanics while working under
				time constraints. Some of my game projects include a multiplayer RPG inspired by online tabletop systems,
				a fantasy chemistry game, and various prototypes exploring different gameplay ideas.
			</p>
			<p className="lead">
				Beyond digital games, I enjoy creating things with my hands. I find wood carving to be very fun. On my
				Art gallery page, you can find examples of my wood carving projects.
				I've also done a lot of various small art projects. Recently I've even built an electronic calendar using a passive screen
				and Arduino.
			</p>
			<p className="lead">
				When I'm not coding, gaming or creating, I like to go hiking and travel, often combining the two. I'm interested
				in history, technology, and space. I have a (wild) badger living in my backyard, and I've made attempts at gardening,
				though I can't say I'm particularly successful at it. I have some interest in writing fiction, own several
				pieces of Lego, and have a guitar that I can make sounds on.
			</p>
			<p className="lead">
				My hobby work tends to be experimental and exploratory. I enjoy trying out new technologies, whether that's
				building graphics engines with GLSL shaders, creating procedurally generated maps, or experimenting with
				different web frameworks. Some projects get finished, many don't, but I find value in the process of
				creating and learning.
			</p>
			<p className="text-muted">
				Feel free to explore my portfolio to see examples of my games and artwork. Or check out my GitHub and
				LinkedIn profiles (linked in the header) if you are interested in me professionally.
			</p>
			<div className="about-signature">
				<img src="https://s.gravatar.com/avatar/b66aef7f00250adf6ff5bc070d10b8bd?s=80" className="about-signature-avatar img-thumbnail" alt="Andreas Johnsen" />
				<p className="about-signature-text">Kind regards,<br />Andreas Johnsen</p>
			</div>
		</div>
	);
}

