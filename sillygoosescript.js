document.addEventListener('DOMContentLoaded', () => {
  const polaroids = [
    {
        imgSrc: 'one.jpg',
        title: '1/1/2023',
        description: 'Starting out the new year with a cutie patootie.'
    },
    {
        imgSrc: 'two.jpg',
        title: '1/7/2023',
        description: 'Cutie patootie being an awko taco with my babies.'
    },
    {
        imgSrc: 'three.jpg',
        title: '2/12/2023',
        description: 'Ramen Bowl and Dog Bowl... heh... heh...'
    },
    {
        imgSrc: 'four.jpg',
        title: '3/31/2023',
        description: 'At Arielle\'s Bday party being drunk cuties.'
    },
    {
        imgSrc: 'five.jpg',
        title: '4/7/2023',
        description: 'I don\'t remember the last time I had a fruit rollup - those were so good and fun to eat.'
    },
    {
        imgSrc: 'six.jpg',
        title: '5/6/2023',
        description: 'Post walk vibes~'
    },
    {
        imgSrc: 'seven.jpg',
        title: '5/27/2024',
        description: 'Ice cream cream puff sandwich found in Canada!'
    },
    {
        imgSrc: 'eight.jpg',
        title: '6/17/2023',
        description: 'Birthday weekend!'
    },
    {
        imgSrc: 'nine.jpg',
        title: '6/17/2023',
        description: 'Butterfly alert!'
    },
    {
        imgSrc: 'ten.jpg',
        title: '7/24/2023',
        description: 'When you just wanted a selfie with the babies, but I guess the big one counts as one too.'
    },
    {
        imgSrc: 'eleven.jpg',
        title: '7/19/2023',
        description: 'Great paddling babe, keep it up heehee.'
    },
    {
        imgSrc: 'twelve.jpg',
        title: '9/8/2023',
        description: 'Insert the eye rolling emoji here -_-'
    },
    {
        imgSrc: 'thirteen.jpg',
        title: '9/10/2023',
        description: 'Dem guns kekeke'
    },
    {
        imgSrc: 'fourteen.jpg',
        title: '10/22/2023',
        description: 'Morning post Murder Mystery Party'
    },
    {
        imgSrc: 'fifteen.jpg',
        title: '11/10/2023',
        description: 'SMOOCH <3 But it\'s my birthday so why am I the one smooching?'
    },
    {
        imgSrc: 'sixteen.jpg',
        title: '12/8/2023',
        description: 'Kyahhh, so cringe lol >/////<'
    },
    {
        imgSrc: 'seventeen.jpg',
        title: '12/16/2023',
        description: 'Merry Christmas bb gurl!'
    },
    {
        imgSrc: 'eighteen.jpg',
        title: '12/31/2023',
        description: 'Annual peaches snap to end the year!'
    },
    {
        imgSrc: 'nineteen.jpg',
        title: '1/1/2024',
        description: 'Heehee, getting less awko taco :)'
    },
    {
        imgSrc: 'twenty.jpg',
        title: '2/11/2024',
        description: 'Happy Chinese New Year!'
    },
    {
        imgSrc: 'twentyone.jpg',
        title: '2/14/2024',
        description: 'Valentines Day mask to end the night.'
    },
    {
        imgSrc: 'twentytwo.jpg',
        title: '3/2/2024',
        description: 'First international trip!! (Besides Canada)'
    },
    {
        imgSrc: 'twentythree.jpg',
        title: '3/4/2024',
        description: 'First catch of the trip! Woo!'
    },
    {
        imgSrc: 'twentyfour.jpg',
        title: '3/6/2024',
        description: 'Happiest Place on Earth with some matching ears heehee'
    },
    {
        imgSrc: 'twentyfive.jpg',
        title: '3/14/2024',
        description: 'hewo :3'
    },
    {
        imgSrc: 'twentysix.jpg',
        title: '3/17/2024',
        description: 'Cutie found outside temple'
    },
    {
        imgSrc: 'twentyseven.jpg',
        title: '4/30/2023',
        description: 'Happy 27th Pookie Bear! I love you <3'
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
    polaroidElement.onclick = () => {
      
    };
    polaroidContainter.appendChild(polaroidElement);
    setTimeout(() => {
      polaroidElement.classList.add('show');
    }, index * 1000); // Delay each polaroid by 500ms multiplied by its index
  });

  // Attempt at creating auto scroll as polaroids show on page
  // let scrollPosition = 0;
  // const scrollSpeed = 100;
  // const scrollInterval = setInterval(() => {
  //   scrollPosition += scrollSpeed;
  //   window.scrollTo(0, scrollPosition);
  //   if (scrollPosition >= document.body.scrollHeight - window.innerHeight) {
  //     clearInterval(scrollInterval); // Stop scrolling when at bottom
  //   }
  // }, 500);
});