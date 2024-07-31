document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})

const icons = [
  'fa-egg',
  'fa-stroopwafel',
  'fa-cheese',
  'fa-hotdog',
  'fa-drumstick-bite',
  'fa-apple-alt',
  'fa-ice-cream',
  'fa-fish',
  'fa-cookie',
  'fa-seedling'
];

let i = 0;

setInterval(() => {
  const iconElement = document.querySelector(".section-1-icons i");

  // Remove the current icon class
  iconElement.classList.remove(icons[i]);

  // Move to the next icon
  i = (i + 1) % icons.length;

  // Add the new icon class
  iconElement.classList.add(icons[i]);
}, 1000);
