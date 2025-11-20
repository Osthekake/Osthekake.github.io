import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import GamesPortfolio from './pages/GamesPortfolio.jsx';
import ArtGallery from './pages/ArtGallery.jsx';
import About from './pages/About.jsx';

export default function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<div className="jumbotron-header">
					<div className="jumbotron-header-top">
						<h1>Portfolio for Andreas Johnsen</h1>
						<Navigation />
					</div>
				</div>
				<Routes>
					<Route path="/" element={<GamesPortfolio />} />
					<Route path="/gallery" element={<ArtGallery />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<footer className="site-footer">
					<p className="copyright">© {new Date().getFullYear()} Andreas Johnsen. All rights reserved.</p>
				</footer>
			</div>
		</BrowserRouter>
	);
}
