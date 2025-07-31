document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-links li a');
    const sections = document.querySelectorAll('.section');
    const burger = document.querySelector('.burger');
    const navUl = document.querySelector('.nav-links');

    // Set home as active section by default
    document.querySelector('#home').classList.add('active');
    
    // Smooth scrolling and section switching
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Hide all sections and show target section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            navUl.classList.remove('active');
            burger.classList.remove('active');
            
            // Scroll to top of the section
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Burger menu toggle
    burger.addEventListener('click', function() {
        navUl.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Image expand on click
    const expandableImages = document.querySelectorAll('.expandable-img');
    expandableImages.forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('expanded');
            if (this.classList.contains('expanded')) {
                this.style.transform = 'scale(1.8)';
                this.style.zIndex = '100';
            } else {
                this.style.transform = 'scale(1)';
                this.style.zIndex = '1';
            }
        });
        
        // Return to normal scale when clicking outside
        document.addEventListener('click', function(e) {
            if (!img.contains(e.target) && img.classList.contains('expanded')) {
                img.classList.remove('expanded');
                img.style.transform = 'scale(1)';
                img.style.zIndex = '1';
            }
        });
    });
    
    surpriseBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Clear any existing content
    surpriseMessage.innerHTML = "";
    
    // Create image element
    const surpriseImg = document.createElement("img");
    surpriseImg.src = "img/catparty.gif"; // Replace with your image path
    surpriseImg.alt = "Surprise!";
    surpriseImg.style.maxWidth = "100%";
    surpriseImg.style.borderRadius = "0px";
    surpriseImg.style.marginBottom = "2px"; // Space between image and text
    
    // Create message element
    const messageText = document.createElement("p");
    messageText.textContent = "🎉click on the project's foto to expand🎉";
    messageText.style.textAlign = "center";
    messageText.style.fontSize = "1rem";
    messageText.style.color = "#2c3e50";
    messageText.style.marginTop = "5px";
    
    const disclaimerText = document.createElement("p");
    disclaimerText.textContent = "Disclaimer: not my works/fotos";
    disclaimerText.style.textAlign = "center";
    disclaimerText.style.fontSize = "0.8rem"; // Slightly smaller
    disclaimerText.style.color = "#95a5a6"; // Lighter color
    disclaimerText.style.fontStyle = "italic";
    disclaimerText.style.marginTop = "0";

    // Append messages to your container
    surpriseMessage.appendChild(surpriseImg);
    surpriseMessage.appendChild(messageText);
    surpriseMessage.appendChild(disclaimerText);
    
    // Show the message container
    surpriseMessage.classList.remove('hidden');
    surpriseMessage.classList.add('surprise-message');
    
    // Disable the button after click
    this.textContent = "meow!";
    this.disabled = true;
    this.style.backgroundColor = "#95a5a6";
});
    
    // Form submission
    const commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon :))`);
        
        // Reset form
        this.reset();
    });
    
    // Close expanded images when scrolling
    window.addEventListener('scroll', function() {
        expandableImages.forEach(img => {
            if (img.classList.contains('expanded')) {
                img.classList.remove('expanded');
                img.style.transform = 'scale(1)';
                img.style.zIndex = '1';
            }
        });
    });
});