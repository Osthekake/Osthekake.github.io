import React, { useState } from 'react';

export default function ArtGallery() {
	const [selectedImage, setSelectedImage] = useState(null);

	const gallerySections = [
		{
			name: "Bear Carving",
			description: "We found a branch that had been gnawed on by a beaver. I wanted to carve it into something. I found that the way it was shaped was slightly reminiscent of a bear.",
			images: [
				{
					src: "/pictures/bear carving 1.jpg",
					description: "It's starting to be more animal shaped, with a more defined head and body. The head is a bit on the big side."
				},
				{
					src: "/pictures/bear carving 2.jpg",
					description: "This is after the initial fur detailing. I wanted to use the existing twig hole for the snout. Unfortunately, I think maybe it looks a bit more like a pig than a bear..."
				},
				{
					src: "/pictures/bear carving 3.jpg",
					description: "I painted it with house paint. Here it is overlooking the fjord, and Skarnsundet."
				}
			]
		},
		{
			name: "Pixel Art Scenes",
			description: "I made these for one of my many game projects. I'm quite happy with how they turned out, so they get an entry in my art gallery as well as the game entry. Check out the game if you are interested! There are animations too. Pixel art is a very interesting medium. You are very limited in how your shapes and lines turn out, and I find I have to experiment a lot with single pixels, in order to get the expression that I want. I think proper pixel art should also have a limited colour palette.",
			images: [
				
				{
					src: "/Town.png",
					description: "A town scene in pixel art style. I uploaded the raw sprite sheet here, so you can see the day and night versions of the same scene."
				},
				{
					src: "/map.png",
					description: "This is the map on the wall of the adventurers guild. I'm quite happy with how the various elements on the map are familiar to anyone who has seen a real map. It makes it a cute facsimile."
				},
				{
					src: "/blueprint.png",
					description: "I wanted to hang this inside the workshop, but I think it ended up too big. (!) It's supposed to show instructions to build a furnace.",
					hasTransparentBg: true
				},
				{
					src: "/workshop-icon.png",
					description: "This is a worktable for a workshop. I think it will be familiar to anyone who has seen a real one too. Can you spot the pencil?",
					hasTransparentBg: true
				},
				{
					src: "/anvil.png",
					description: "An anvil in pixel art style.",
					hasTransparentBg: true
				},
				{
					src: "/harbor.png",
					description: "A harbor scene in pixel art style. The black divider makes a lot more sense when you see it inside the game."
				},
			]
		},
		{
			name: "Calendar Project",
			description: "I wanted to make an electronic calendar, using a passive screen that I purchased from China. I quite liked the aesthetic of the 4 colours, and since the screen is passive, I wanted to try to run the whole calendar on a 9V battery. I'm using an arduino to send the image to the screen, and there's also a Real Time Clock (RTC) chip, with a clock battery. The graphics are on an SD card, which is yet another chip. The project is more complex than I expected. There's also a whole suit of software for building the pieces for the picture (like month names and dates, etc) and a converter tool for illustrations.",
			images: [
				{
					src: "/pictures/calendar 1.jpg",
					description: "This is when I first made it load the correct day into the calendar."
				},
				{
					src: "/pictures/calendar 2.jpg",
					description: "Almost a month later, still in the prototype stage."
				},
				{
					src: "/pictures/calendar 3.jpg",
					description: "After this I had to wait for a different arduino to arrive, which supports low-power sleep mode. Updates may come in the future."
				}
			]
		},
		{
			name: "Wood Carvings",
			description: "Various non-bear wooden carvings. I find wood carving to be very fun, but I don't get to do it very often. It makes a huge mess, and it takes a lot of time to do the actual carving.",
			images: [
				{
					src: "/pictures/crocodile carving.JPG",
					description: "My father wanted me to carve the end of this log, which is a part of a log cabin he built. It was made too long by mistake, so we turned it into art. Most of the wood was removed by chainsaw. Details made with chisel."
				},
				{
					src: "/pictures/sword carving.JPG",
					description: "I tried carving a viking-esque pattern into this sword pommel. The whole sword is also carved by me, although the pommel and guard are made in two pieces and glued onto the handle/blade."
				}
			]
		},
		{
			name: "Tree Art",
			description: "My mother wanted me to decorate some bookshelves. I painted these simple paintings with oil paint.",
			images: [
				{
					src: "/pictures/birch tree.JPG",
					description: "A birch tree very common in the nature around this house."
				},
				{
					src: "/pictures/troll tree.JPG",
					description: "A fantastical troll tree. Growing up I used to look for \"trolls\" in the forest. I would find a lot of them in trees, or sleeping under the road or similar."
				}
			]
		},
		{
			name: "Leaf study",
			description: "Studies of leaves done with the paint brush in Photoshop.",
			images: [
				{
					src: "/leaf_by_osthekake_df73h9-fullview.jpg",
					description: "A leaf study."
				},
				{
					src: "/another_leaf_by_osthekake_df73hq-fullview.jpg",
					description: "Another leaf study."
				}
			]
		},
		{
			name: "WoW Fanart",
			description: "Fan art inspired by World of Warcraft.",
			images: [
				{
					src: "/wow_fanart_type_thing_by_osthekake_d37jycg-fullview.jpg",
					description: "World of Warcraft fan art."
				},
				{
					src: "/blizzard_by_osthekake_dsh4w2-414w-2x.jpg",
					description: "Blizzard-themed fan art."
				}
			]
		},
		{
			name: "D&D art",
			description: "Artwork inspired by Dungeons & Dragons.",
			images: [
				{
					src: "/cheer_on_by_osthekake_dh0mdh-375w-2x.jpg",
					description: "This is my rendition of our party in our D&D game in University."
				},
				{
					src: "/dragons_final_by_osthekake_df72xt-414w-2x.jpg",
					description: "I drew these dragons with pencil, using a picture in a D&D book as reference. Someone who is familiar with the art, will recognize them. Scanned and digitally coloured."
				},
			]
		},
		{
			name: "Fantasy art",
			description: "Various fantasy-themed artwork.",
			images: [
				{
					src: "/rain_by_osthekake_dyvhh6-375w-2x.jpg",
					description: "Someone with plate armour, big cloak and sword, out in the rain, looking badass."
				},
				{
					src: "/tower_by_osthekake_dtidse-414w-2x.jpg",
					description: "A tower on a very tiny island."
				},
				{
					src: "/battoujutsu_by_osthekake_dj7bu7-375w-2x.jpg",
					description: "Anime inspired action scene."
				},
				{
					src: "/wandering_the_void_by_osthekake_dpldqc-375w-2x.jpg",
					description: "Wandering the void. It's become something of an avatar for me."
				}
			]
		},
		{
			name: "Other Works",
			description: "Random works of art that you may find fun or interesting.",
			images: [
				{
					src: "/pictures/origami star destroyer.jpg",
					description: "An origami Imperial Star Destroyer."
				},
				{
					src: "/pictures/tattoo design.jpg",
					description: "I got inspired to make a tattoo design. I wanted to work with black and white, and negative spaces. I'm quite happy with the head and the body, but the wings and tailfeathers could do with some rework. On the left are examples of feathers that would require less ink."
				},
				{
					src: "/pictures/wolf miniatures.jpg",
					description: "I've painted a lot of warhammer minis. These wolves from Warhammer 40k are some of my favourites. I even used plaster to put snow on their bases. (Protip: plaster and plastic does not mix well)"
				}
			]
		}
	];

	const openImageModal = (sectionIndex, imageIndex) => {
		setSelectedImage({ sectionIndex, imageIndex });
	};

	const closeImageModal = () => {
		setSelectedImage(null);
	};

	const navigateImage = (direction) => {
		if (!selectedImage) return;

		const { sectionIndex, imageIndex } = selectedImage;
		const section = gallerySections[sectionIndex];
		let newSectionIndex = sectionIndex;
		let newImageIndex = imageIndex;

		if (direction === 'next') {
			if (imageIndex < section.images.length - 1) {
				newImageIndex = imageIndex + 1;
			} else if (sectionIndex < gallerySections.length - 1) {
				newSectionIndex = sectionIndex + 1;
				newImageIndex = 0;
			} else {
				// Wrap to first image
				newSectionIndex = 0;
				newImageIndex = 0;
			}
		} else {
			if (imageIndex > 0) {
				newImageIndex = imageIndex - 1;
			} else if (sectionIndex > 0) {
				newSectionIndex = sectionIndex - 1;
				newImageIndex = gallerySections[newSectionIndex].images.length - 1;
			} else {
				// Wrap to last image
				newSectionIndex = gallerySections.length - 1;
				newImageIndex = gallerySections[newSectionIndex].images.length - 1;
			}
		}

		setSelectedImage({ sectionIndex: newSectionIndex, imageIndex: newImageIndex });
	};

	const currentImage = selectedImage 
		? gallerySections[selectedImage.sectionIndex].images[selectedImage.imageIndex]
		: null;
	const currentSection = selectedImage 
		? gallerySections[selectedImage.sectionIndex]
		: null;
	const totalImages = gallerySections.reduce((sum, section) => sum + section.images.length, 0);
	const currentImageNumber = selectedImage 
		? gallerySections.slice(0, selectedImage.sectionIndex).reduce((sum, section) => sum + section.images.length, 0) + selectedImage.imageIndex + 1
		: 0;

	return (
		<>
			<div className="jumbotron">
				<h2>Art Gallery</h2>
				<p className="lead">Welcome to my art gallery. This collection includes pixel art from game projects, wood carvings, paintings, and various other creative experiments.</p>
			</div>

			{gallerySections.map((section, sectionIndex) => (
				<div key={sectionIndex} className="gallery-section">
					<div className="gallery-section-header">
						<h3>{section.name}</h3>
						<p className="gallery-section-description">{section.description}</p>
					</div>
					<div className="gallery-grid">
						{section.images.map((image, imageIndex) => {
							const hasTransparentBg = image.hasTransparentBg || false;
							const style = hasTransparentBg ? {} : { '--bg-image': `url("${image.src}")` };
							return (
								<div 
									key={imageIndex} 
									className={`gallery-item ${hasTransparentBg ? 'gallery-item--transparent' : ''}`}
									style={style}
									onClick={() => openImageModal(sectionIndex, imageIndex)}
								>
									<img 
										src={image.src} 
										alt={image.description}
										loading="lazy"
									/>
									<div className="gallery-item-overlay">
										<p className="gallery-item-description">{image.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			))}

			{selectedImage && (
				<div className="art-modal-backdrop" onClick={closeImageModal}>
					<div className="art-modal" onClick={(e) => e.stopPropagation()}>
						<header className="art-modal-header">
							<div className="art-modal-header-content">
								<h3>{currentSection.name}</h3>
								<p className="art-modal-image-description">{currentImage.description}</p>
							</div>
							<button 
								type="button" 
								className="art-modal-close" 
								onClick={closeImageModal}
								aria-label="Close"
							>
								&times;
							</button>
						</header>
						<div className="art-modal-body">
							<button 
								type="button" 
								className="art-modal-nav art-modal-nav--prev" 
								onClick={() => navigateImage('prev')}
								aria-label="Previous image"
							>
								&#8249;
							</button>
							<div className="art-modal-image-wrapper">
								<img 
									src={currentImage.src} 
									alt={currentImage.description}
								/>
								<p className="copyright copyright--modal">© {new Date().getFullYear()} Andreas Johnsen. All rights reserved.</p>
							</div>
							<button 
								type="button" 
								className="art-modal-nav art-modal-nav--next" 
								onClick={() => navigateImage('next')}
								aria-label="Next image"
							>
								&#8250;
							</button>
							<div className="art-modal-indicator">
								{currentImageNumber} / {totalImages}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
