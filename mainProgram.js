const mainProgramsSection = document.querySelector('.main-program-container1');

const mainPrograms = [
  {
    icon: 'images/icons/lecture.png',
    program: 'web design',
    title: 'Lecture',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: 'images/icons/workshop.png',
    program: 'app development',
    title: 'Workshop',
    description: 'Bibendum neque egestas congue quisque egestas diam in.',
  },
  {
    icon: 'images/icons/exhibition.png',
    program: 'coding',
    title: 'Exhibition',
    description: 'In metus vulputate eu scelerisque felis imperdiet proin leo.',
  },
  {
    icon: 'images/icons/forum.png',
    program: 'coder',
    title: 'Forum',
    description: 'Fermentum et sollicitudin ac orci phasellus.',
  },
  {
    icon: 'images/icons/ignite.png',
    program: 'desktop',
    title: 'Ignite',
    description: 'Tristique senectus et netus et malesuada fames ac turpis. ',
  },
];

mainPrograms.forEach((item) => {
  const {
    icon, title, description, program,
  } = item;

  mainProgramsSection.innerHTML += `
    <div class="program-wrap">
        <div class="main-program">
            <img class="main-program-icon" src="${icon}" alt=${program}/>
            <h3 class="main-program-heading">${title}</h3>
            <p class="main-program-words">${description}</p>
        </div>
    </div>
  `;
});
