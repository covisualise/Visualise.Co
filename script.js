
        // Button click handlers
        function handleClick(type) {
            if (type === 'primary') {
                // Create ripple effect
                createRipple(event.target);
                setTimeout(() => {
                    alert('Welcome! This is where your main action would happen.');
                }, 300);
            } else {
                createRipple(event.target);
                setTimeout(() => {
                    alert('Learn more section - perfect for additional information!');
                }, 300);
            }
        }

        // Ripple effect
        function createRipple(button) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Cursor follower
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursorFollower.style.left = e.clientX - 10 + 'px';
            cursorFollower.style.top = e.clientY - 10 + 'px';
        });

        // Enhanced button interactions
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                cursorFollower.style.transform = 'scale(1.5)';
                cursorFollower.style.background = 'rgba(255, 255, 255, 0.6)';
            });
            
            button.addEventListener('mouseleave', () => {
                cursorFollower.style.transform = 'scale(1)';
                cursorFollower.style.background = 'rgba(255, 255, 255, 0.3)';
            });
        });

        // Add parallax effect to particles
        document.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.5;
                particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
