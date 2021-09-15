let projects = [
  {
    imgURL: "/images/convertor.png",
    imgALT: "My Project 1",
    title: "Temp Converter",
    techStack: "Python",
    description:
      "This is a program that converts temperature from celsius to fahrenheit and fahrenheit to celsius.",
    githubURL: "https://github.com/Khanya45/python-temp-convertor",
    liveProjectURL: "https://replit.com/join/qphjpcja-khanya45",
  },
  {
    imgURL: "/images/contactform.png",
    imgALT: "My Project 1",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description: "This is a form for sending an email to the admin",
    githubURL: "https://github.com/Khanya45/contact-form",
    liveProjectURL: "https://dazzling-thompson-3f7fef.netlify.app",
  },
  {
    imgURL: "/images/login.png",
    imgALT: "My Project 1",
    title: "Log In",
    techStack: "HTML/CSS",
    description: "This is a form for a user to enter their details to log in",
    githubURL: "https://codepen.io/KhanyaG/pen/KKwwBwL",
    liveProjectURL: "https://codepen.io/KhanyaG/details/KKwwBwL",
  },
  {
    imgURL: "/images/bmi.png",
    imgALT: "My Project 1",
    title: "BMI Calculator",
    techStack: "Python",
    description:
      "This is an application that calculates the Body Mass Index (BMI) of gym members.",
    githubURL: "https://github.com/Khanya45/python-BMI",
    liveProjectURL: "https://replit.com/@Khanya45/python-BMI#main.py",
  },
  {
    imgURL: "/images/slides.png",
    imgALT: "My Project 1",
    title: "Slides",
    techStack: "HTML/CSS",
    description: "This is a slide for testimonials that slides automatically",
    githubURL: "https://github.com/Khanya45/python-sum",
    liveProjectURL: "https://replit.com/join/kofcaemt-khanya45",
  },
  {
    imgURL: "/images/timeline.png",
    imgALT: "My Project 1",
    title: "Timeline",
    techStack: "HTML/CSS",
    description:
      "This is a timeline animation that fades left and right as you scroll down",
    githubURL: "https://github.com/Khanya45/timeline",
    liveProjectURL: "https://quirky-easley-d9dfc6.netlify.app/",
  },
  {
    imgURL: "/images/graphs.png",
    imgALT: "My Project 1",
    title: "Graphs",
    techStack: "Python",
    description:
      "The program computes the mean, standard deviation, and variance of a given array and displays the data in a form of a graph",
    githubURL: "https://github.com/Khanya45/python-sum",
    liveProjectURL: "https://replit.com/join/kofcaemt-khanya45",
  },
  {
    imgURL: "/images/calculator.png",
    imgALT: "My Project 1",
    title: "Calculator",
    techStack: "JavaScript",
    description:
      "This is a basic calculator that calculates anything, like a normal calculator",
    githubURL: "https://github.com/Khanya45/calculator",
    liveProjectURL: "https://calculatorkhanya.netlify.app/",
  },
  {
    imgURL: "/images/pokemon.png",
    imgALT: "My Project 1",
    title: "Pokemon UI",
    techStack: "JavaScript",
    description:
      "This program displays different pokemons and their description using an API",
    githubURL: "https://github.com/Khanya45/pokemon",
    liveProjectURL: "https://pokemon-by-khanya.netlify.app/",
  },
];

function createCard(card) {
  let createdCard = `<div class="card" techStack=${card.techStack} data-aos="fade-up"
  data-aos-anchor-placement="center-bottom">
      <img src="${card.imgURL}" alt="${card.imgALT}" />
      <div class="overlay">
        <h1>${card.title}</h1>
        <h2>${card.techStack}</h2>
        <p>
          ${card.description}
        </p>
        <div class="btnProject">
          <a href="${card.liveProjectURL}" target="_blank"
            ><button>LIVE</button></a
          >
          <a href="${card.githubURL}" target="_blank"
            ><button>CODE</button></a
          >
        </div>  
      </div>
    </div>
      `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("card");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
