// JavaScript untuk menambahkan interaktivitas
document.querySelectorAll('.accordion > summary').forEach((summary) => {
    summary.addEventListener('click', (event) => {
        const parentDetail = summary.parentElement;

        // Tutup semua detail lainnya di level yang sama
        document.querySelectorAll('.accordion').forEach((otherDetail) => {
            if (otherDetail !== parentDetail && otherDetail.tagName === 'DETAILS') {
                otherDetail.open = false;
            }
        });

        // Toggle the content display for the clicked accordion
        const content = parentDetail.querySelector('.content');
        // The 'open' attribute on <details> is toggled automatically by the browser.
        // We only need to ensure the content display is handled correctly based on the new state.
        // The CSS `details[open] .content { display: block; }` handles showing the content.
        // We need to explicitly hide it when closing if the CSS doesn't handle it perfectly with the animation.
        // However, the current setup with `display: none` and `display: block` in JS,
        // combined with the CSS `details[open] .content { display: block; }` and animation,
        // might cause a flicker or double handling.
        // Let's simplify the JS to only handle the closing of other accordions,
        // and let CSS manage the display and animation of the current accordion's content.

        // The original JS logic for content display toggle:
        // if (parentDetail.open) {
        //     // If it's about to close, hide content
        //     content.style.display = 'none';
        // } else {
        //     // If it's about to open, show content
        //     content.style.display = 'block';
        // }

        // To rely more on CSS for display and animation, we can remove the direct style.display manipulation here
        // and let the `details[open] .content { display: block; }` rule take over.
        // The `fadeIn` animation will then apply when `display` changes from `none` to `block`.
        // If you experience issues with the animation not playing on close,
        // you might need a more complex JS solution (e.g., adding/removing a class)
        // or a CSS-only solution using `max-height` and `overflow: hidden` for smooth transitions.
        // For now, the existing CSS `details[open] .content { display: block; }` combined with the animation
        // should work for opening. The `display: none` is the default.
    });
});

// Handle nested accordions separately to prevent closing parent when child is clicked
document.querySelectorAll('.sub-accordion > summary').forEach((summary) => {
    summary.addEventListener('click', (event) => {
        const parentDetail = summary.parentElement;

        // Only toggle the content display for the clicked sub-accordion
        // Similar to the main accordion, let CSS handle the display property
        // if (parentDetail.open) {
        //     content.style.display = 'none';
        // } else {
        //     content.style.display = 'block';
        // }
        // The CSS `details[open] .content { display: block; }` will manage this.
    });
});
