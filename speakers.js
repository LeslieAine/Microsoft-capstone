const featuredSpeakersSection = document.querySelector('.speakers');

const featuredSpeakersList = [
  {
    name: 'Elon Musk',
    jobTitle: 'CEO Twitter',
    img: 'images/speakers/speaker1.jpg',
    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Danny Thompson',
    jobTitle: 'Senior Software Engineer @Google',
    img: 'images/speakers/speaker2.jpg',
    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Olawale Ayo',
    jobTitle: 'Product Manager @YouTube',
    img: 'images/speakers/speaker3.jpg',
    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Brad Traversy',
    jobTitle: 'Dev Rel @GitHub',
    img: 'images/speakers/speaker4.jpg',
    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Net Ninja',
    jobTitle: 'Product Manager @Andela Kenya',
    img: 'images/speakers/speaker5.jpg',
    about:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    name: 'Brandon Goldman',
    jobTitle: 'UX Engineer @Microsoft',
    img: 'images/speakers/speaker6.jpg',
    about:
      'Focusing on a common approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
];

featuredSpeakersList.forEach((speaker) => {
  const {
    name, jobTitle, img, about,
  } = speaker;

  featuredSpeakersSection.innerHTML += `
    <div class="speakers-container">
        <img class="speakers-icon" src="${img}" alt=${name}/>
        <div class="speakers-desc">
            <h3 class="speaker-name">${name}</h3>
            <p class="speaker-italics">${jobTitle}</p>
            <hr class="speaker-break" />
            <p class="speaker-desc">${about} </p>
        </div>
    </div>
  `;
});
