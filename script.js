

console.log(  "U")


function countUp(element) {
    const target = +element.getAttribute('data-target');
    const speed = 200; 
    const updateCount = () => {
        const currentCount = +element.innerText;
        const increment = target / speed;
        
        if (currentCount < target) {
            element.innerText = Math.ceil(currentCount + increment);
            setTimeout(updateCount, 10);
        } else {
            element.innerText = target;
        }
    };
    updateCount();
}

function countUp(element) {
    const target = +element.getAttribute('data-target');
    const suffix = element.getAttribute('data-suffix') || ''; // Get the suffix or default to empty string
    const speed = 200;
    const updateCount = () => {
        const currentCount = +element.innerText.replace(suffix, ''); // Remove suffix during counting
        const increment = target / speed;
        
        if (currentCount < target) {
            element.innerText = Math.ceil(currentCount + increment) + suffix;
            setTimeout(updateCount, 10);
        } else {
            element.innerText = target + suffix;
        }
    };
    updateCount();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.count');
            counters.forEach(counter => countUp(counter));
            observer.disconnect(); 
        }
    });
}, { threshold: 0.5 }); 


observer.observe(document.querySelector('.stats'));