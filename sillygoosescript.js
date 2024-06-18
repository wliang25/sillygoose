document.addEventListener('DOMContentLoaded', () => {
  const polaroids = [
    {
        imgSrc: 'one.jpg',
        title: 'Polaroid 1',
        description: 'Description of Polaroid 1'
    },
    {
        imgSrc: 'two.jpg',
        title: 'Polaroid 2',
        description: 'Description of Polaroid 2'
    },
    {
        imgSrc: 'three.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'four.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'five.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'six.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'seven.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'eight.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'nine.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'ten.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'eleven.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twelve.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'thirteen.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'fourteen.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'fifteen.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'sixteen.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'seventeen.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'eighteen.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'nineteen.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twenty.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twentyone.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twentytwo.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twentythree.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twentyfour.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twentyfive.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twentysix.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    },
    {
        imgSrc: 'twentyseven.jpg',
        title: 'Polaroid 3',
        description: 'Description of Polaroid 3'
    }
  ];
  const polaroidContainter = document.getElementById('polaroid-container');
  polaroids.forEach((polaroid, index) => {
    const polaroidElement = document.createElement('div');
    polaroidElement.className = 'polaroid';
    polaroidElement.innerHTML = `
        <img src="imgs/${polaroid.imgSrc}" alt="${polaroid.title}">
        <div class="title">${polaroid.title}</div>
        <div class="caption">${polaroid.description}</div>
    `;
    polaroidContainter.appendChild(polaroidElement);
    setTimeout(() => {
        polaroidElement.classList.add('show');
    }, index * 1000); // Delay each polaroid by 500ms multiplied by its index
});
});