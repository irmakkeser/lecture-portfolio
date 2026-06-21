/* ==========================================================================
   IRMAK - DIGITAL DESIGN PORTFOLIO & LECTURE SERIES
   INTERACTIVE LOGIC LAYER (JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       01. Academic Database for Artworks
       -------------------------------------------------------------------------- */
    const artworkData = {
        target: {
            title: "PLATE I. THE TARGET DYNAMICS",
            subtitle: "Vector Geometry and Concentric Balance",
            analysis: "A formal investigation into concentric radial symmetry and visual anchors. The composition explores vector weight distribution, utilizing precise center-focused anchors to draw the eye inward. It serves as a study for Module 01, demonstrating how high-contrast color bands interact to create visual stability in academic identity design.",
            module: "Module 01: Vector Mechanics",
            image: "images/target.png"
        },
        activex: {
            title: "PLATE II. THE ACTIVEX PORTAL",
            subtitle: "Isometric Projection and Dimensional Contrast",
            analysis: "An investigation into geometric overlap, typographic dominance, and corporate identity structure. The composition centers around a deep navy oval contrasted with a bold, white serif typeface. A layered, golden-yellow 'X' introduces visual depth and diagonal tension. Created for Module 02, this study highlights chromatic warmth and spatial hierarchy within modern corporate logo systems.",
            module: "Module 02: Isometric Spatial Theory",
            image: "images/activex.png"
        },
        starbucks: {
            title: "PLATE III. THE SIREN'S CHRONICLE",
            subtitle: "Circular Composition and Typographic Arc",
            analysis: "A study of typographic hierarchy wrapping along circular arcs, paired with organic-geometric synthesis. The outer circle utilizes custom kerning calculations to arch text seamlessly, while the inner siren portrait employs balanced organic shapes. This work illustrates key ligature clipping boundaries explored in Module 03.",
            module: "Module 03: Typographic Architecture",
            image: "images/starbucks.png"
        },
        chakra: {
            title: "PLATE IV. DUALITY OF CHAKRA",
            subtitle: "Organic Symmetries and Block Containment",
            analysis: "A formal exploration of minimalist block containment and negative space typography. The artwork is characterized by a rounded olive-drab rectangle enclosing the custom-styled 'Chakra' wordmark in high-contrast white. This design investigates visual weight, clean balance, and legibility constraints in modern brand guidelines.",
            module: "Module 03: Typographic Architecture",
            image: "images/chakra.png"
        },
        supermario: {
            title: "PLATE V. STELLAR SUPER MARIO",
            subtitle: "Overlapping Symmetries and Chromatic Rhythm",
            analysis: "A study of playful typographic geometry, letterform overlap, and primary color theory. The iconic wordmark employs bold, heavily shadowed letter outlines layered with signature green, blue, red, and yellow fills, accompanied by a dimensional star emblem. This composition deconstructs visual rhythm and emotional resonance in digital branding.",
            module: "Module 03: Typographic Architecture",
            image: "images/supermario.png"
        },
        dropbox: {
            title: "PLATE VI. ISOMETRIC DROPBOX",
            subtitle: "Isometric Space and Digital Portal Semiotics",
            analysis: "A deconstruction of isometric space and digital portal semiotics. The composition features the iconic blue and violet box symbol constructed at 30-degree isometric angles, representing virtual containment and cloud synchronization. This work serves as an exploration of clean vector branding and three-dimensional projection on a flat field.",
            module: "Module 02: Isometric Spatial Theory",
            image: "images/dropbox.png"
        },
        apple: {
            title: "PLATE VII. APPLE SYMMETRY",
            subtitle: "Organic Form and Typographic Integration",
            analysis: "An investigation of organic form and typography integration. The study presents two variations of the Apple icon: a high-contrast lime green silhouette paired with script serif lettering, and a deep crimson counterpart. The composition explores path clipping boundaries, visual balance, and organic geometry.",
            module: "Module 03: Typographic Architecture",
            image: "images/apple.png"
        },
        abba: {
            title: "PLATE VIII. STELLAR ABBA",
            subtitle: "Typographic Symmetry and Glam-Pop Semiotics",
            analysis: "A typographic symmetry study celebrating retro glam-pop visual culture. Featuring a mirrored B in the ABBA wordmark positioned against a three-dimensional yellow and blue gradient star, the work explores syntactic tension, letterform reflection, and stage lighting semiotics.",
            module: "Module 03: Typographic Architecture",
            image: "images/abba.png"
        },
        pasabahce: {
            title: "PLATE IX. PAŞABAHÇE FLUIDITY",
            subtitle: "Fluid Calligraphy and Organic Containment",
            analysis: "A study in fluid calligraphy and organic containment. The design presents a script wordmark layered over a stylized, sweeping crimson teardrop emblem. This composition explores calligraphic path curvature, foreground-background balance, and corporate branding fluidity.",
            module: "Module 03: Typographic Architecture",
            image: "images/pasabahce.png"
        },
        rollingstones: {
            title: "PLATE X. EXPRESSIVE STONES",
            subtitle: "Iconic Asymmetry and Curvilinear Typography",
            analysis: "An analysis of pop culture iconography, expressive typography, and organic asymmetry. The design integrates the legendary red tongue logo with a custom-bent serif title wrapped along the tongue's curvature. This study investigates the semiotic power of expressive brand marks and asymmetric visual anchors.",
            module: "Module 03: Typographic Architecture",
            image: "images/rollingstones.png"
        }
    };

    /* --------------------------------------------------------------------------
       02. Custom Fluid Cursor
       -------------------------------------------------------------------------- */
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursor-dot');
    
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;

    // Fast tracking for core dot, smooth lerp for outer ring
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    const renderCursor = () => {
        // Linear interpolation to make the outer cursor circle lag beautifully
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        requestAnimationFrame(renderCursor);
    };
    renderCursor();

    // Hover states for links and interactive assets
    const hoverElements = document.querySelectorAll('a, button, .gallery-item-wrapper, .lecture-card, .lightbox-close, .form-group input, .form-group select, .form-group textarea');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
            cursorDot.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            cursorDot.classList.remove('hovering');
        });
    });

    /* --------------------------------------------------------------------------
       03. Glass Header Scroll Handler
       -------------------------------------------------------------------------- */
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --------------------------------------------------------------------------
       04. Mobile Navigation Burger Menu
       -------------------------------------------------------------------------- */
    const navToggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMobileNav = () => {
        navToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // Prevent body scroll when drawer is open
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    navToggle.addEventListener('click', toggleMobileNav);
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMobileNav);
    });

    /* --------------------------------------------------------------------------
       05. Interactive 3D Frame Tilt & Glare Reflections
       -------------------------------------------------------------------------- */
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        const frame = card.querySelector('.wood-frame');
        const glare = card.querySelector('.specular-glare');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Mouse coordinates relative to card center
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);
            
            // Maximum tilt angle (degrees)
            const maxTilt = 10;
            
            // Calculate tilt angle based on mouse percentage from center
            const tiltX = -(y / (rect.height / 2)) * maxTilt;
            const tiltY = (x / (rect.width / 2)) * maxTilt;
            
            // Apply 3D rotation with perspective
            frame.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.025)`;
            
            // Specular reflections mapping
            if (glare) {
                // Calculate percentage position
                const px = (e.clientX - rect.left) / rect.width * 100;
                const py = (e.clientY - rect.top) / rect.height * 100;
                glare.style.transform = `translateX(0)`;
                glare.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 65%)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset to flat state
            frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            
            if (glare) {
                glare.style.transform = `translateX(-100%)`;
                glare.style.background = `linear-gradient(110deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 35%, rgba(255, 255, 255, 0.2) 48%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.05) 52%, rgba(255, 255, 255, 0) 100%)`;
            }
        });
    });

    /* --------------------------------------------------------------------------
       06. Museum Exhibition Lightbox Modal
       -------------------------------------------------------------------------- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxSubtitle = document.getElementById('lightbox-subtitle');
    const lightboxAnalysis = document.getElementById('lightbox-analysis');
    const lightboxModule = document.getElementById('lightbox-module');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxFrameEl = document.getElementById('lightbox-frame-el');
    
    const galleryItems = document.querySelectorAll('.gallery-item-wrapper');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            const data = artworkData[id];
            
            if (data) {
                // Populate museum card data
                lightboxImg.src = data.image;
                lightboxImg.alt = data.title;
                lightboxTitle.textContent = data.title;
                lightboxSubtitle.textContent = data.subtitle;
                lightboxAnalysis.textContent = data.analysis;
                lightboxModule.textContent = data.module;
                
                // Show modal
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scrolling
            }
        });
    });

    // Close Modal Functions
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Unlock background scrolling
        // Reset 3D frame rotations inside lightbox
        lightboxFrameEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close on clicking backdrop
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Lightbox Frame subtle 3D hover matching the grid frames
    lightboxFrameEl.addEventListener('mousemove', (e) => {
        const rect = lightboxFrameEl.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);
        const maxTilt = 8;
        const tiltX = -(y / (rect.height / 2)) * maxTilt;
        const tiltY = (x / (rect.width / 2)) * maxTilt;
        
        lightboxFrameEl.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.01)`;
    });

    lightboxFrameEl.addEventListener('mouseleave', () => {
        lightboxFrameEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

    /* --------------------------------------------------------------------------
       07. Hero Slideshow Animation
       -------------------------------------------------------------------------- */
    const slideshowImages = document.querySelectorAll('.slideshow-image');
    if (slideshowImages.length > 0) {
        let currentSlideIndex = 0;
        setInterval(() => {
            slideshowImages[currentSlideIndex].classList.remove('active');
            currentSlideIndex = (currentSlideIndex + 1) % slideshowImages.length;
            slideshowImages[currentSlideIndex].classList.add('active');
        }, 3000);
    }

});
