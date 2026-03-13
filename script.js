// ====================== HAMBURGER MENU FINAL FIX ======================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) {
        console.error("❌ Hamburger or nav-links not found!");
        return;
    }

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        console.log("✅ Menu toggled! Active class:", navLinks.classList.contains('active'));
    });
});


// ====================== PRODUCTION PROJECT MODALS ======================
document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'flex';
    });
});

// Close modal when clicking ×
document.querySelectorAll('.modal-close').forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.modal').style.display = 'none';
    });
});

// Close when clicking outside the modal
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// ====================== CONTACT FORM ======================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate sending (in real life we can connect EmailJS later)
    setTimeout(() => {
        alert('✅ Message Sent Successfully!\n\nDr. Huzaifa will reply soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1200);
});