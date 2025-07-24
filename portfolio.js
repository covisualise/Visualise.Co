document.addEventListener('DOMContentLoaded', function() {
    // --- Navbar Scroll Functionality ---
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.onscroll = function() {
            if (window.scrollY > 50) { // Adjust this value as needed
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };
    }

    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times'); // Change icon to 'X'
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // --- New Video Playback Logic ---
    const videoContainers = document.querySelectorAll('.video-container');

    if (videoContainers.length > 0) {
        videoContainers.forEach(container => {
            const playButton = container.querySelector('.play-button-overlay');
            const video = container.querySelector('.video-player');

            if (playButton && video) {
                // Play video when the play button is clicked
                playButton.addEventListener('click', () => {
                    playButton.style.display = 'none'; // Hide the play button
                    video.style.display = 'block'; // Show the video element
                    video.play();
                });

                // Reset when video ends
                video.addEventListener('ended', () => {
                    playButton.style.display = 'flex'; // Show the play button again
                    video.style.display = 'none'; // Hide the video
                    video.currentTime = 0; // Reset video to the beginning
                });

                // Reset when video is manually paused by the user
                video.addEventListener('pause', () => {
                    if (video.currentTime > 0) {
                        playButton.style.display = 'flex';
                        video.style.display = 'none';
                    }
                });
            }
        });
    }

    // --- Scroll Animation ---
    const cards = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // --- Navbar Scroll Functionality ---
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.onscroll = function() {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };
    }

    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // --- New Video Playback Logic (Single video playback) ---
    const allVideos = document.querySelectorAll('.video-player');
    const allPlayButtons = document.querySelectorAll('.play-button-overlay');

    allPlayButtons.forEach(playButton => {
        playButton.addEventListener('click', () => {
            const videoId = playButton.getAttribute('data-video-id');
            const videoToPlay = document.getElementById(videoId);

            // Pause all other videos
            allVideos.forEach(video => {
                if (video !== videoToPlay && !video.paused) {
                    video.pause();
                    video.currentTime = 0;
                    // Find and show the play button for the paused video
                    const parentContainer = video.closest('.video-container');
                    const associatedPlayButton = parentContainer.querySelector('.play-button-overlay');
                    associatedPlayButton.classList.remove('hidden');
                }
            });

            // Start playing the clicked video
            playButton.classList.add('hidden'); // Hide this play button
            videoToPlay.play();
        });
    });

    allVideos.forEach(video => {
        // When a video ends, reset its state
        video.addEventListener('ended', () => {
            const parentContainer = video.closest('.video-container');
            const playButton = parentContainer.querySelector('.play-button-overlay');
            playButton.classList.remove('hidden');
            video.currentTime = 0;
        });

        // When a video is manually paused, reset its state
        video.addEventListener('pause', () => {
            if (video.currentTime > 0) {
                const parentContainer = video.closest('.video-container');
                const playButton = parentContainer.querySelector('.play-button-overlay');
                playButton.classList.remove('hidden');
            }
        });
    });

    // --- Scroll Animation ---
    const cards = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});

