const envelope = document.getElementById('envelope');
const envelopeTop = document.getElementById('envelope-top');
const invitationImage = document.getElementById('invitation-image');
const closeBtn = document.getElementById('close-btn');

// Envelope click event
envelope.addEventListener('click', () => {
    gsap.to(envelopeTop, {
        rotationX: -180,
        transformOrigin: "top",
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
            envelopeTop.style.display = 'none';
        }
    });

    setTimeout(() => {
        invitationImage.style.display = 'block';
        closeBtn.style.display = 'block';
    }, 500);
});

// Close button event
closeBtn.addEventListener('click', () => {
    invitationImage.style.display = 'none';
    closeBtn.style.display = 'none';
    gsap.to(envelopeTop, {
        rotationX: 0,
        opacity: 1,
        duration: 0.5,
        onStart: () => {
            envelopeTop.style.display = 'block';
        }
    });
});
