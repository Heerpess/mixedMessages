// Mit Cards against humanity
// Zwei Arrays mit vielen Antworten

const blackCards = [
    "During his midlife crisis, my dad got really into ",
    "Money can't buy me love, but it can buy me ",
    "It is back! Only at McDonald's! The Burger with our special ingredient: ",
    "Your persistence is admirable, my dear Prince. But you cannot win my heart with ",
    "In his new self-produced album, Kanye West raps over the sounds of ",
    "Mamma Mia. Here I go again. My my! How can I resist ",
    "But before I kill you, Mr. Bond, I must show you ",
    "What's that smell?"
  ];
  
const whiteCards = [
    "Daddy issues.",
    "Magnets.",
    "Karen.",
    "Pixelated bukkake.",
    "Two Xanax and a bottle of wine.",
    "A bird that shits human turds.",
    "Man meat.",
    "Hot brown piss.",
    "A micropig wearing a tiny raincoat and booties.",
    "Lady Gaga.",
    "Getting cummed on.",
    "My balls on your face.",
    "The only gay person in a hundred kilometers.",
    "Vomiting mid-blowjob.",
    "The boners of the elderly."
  ];
  

const selectBlack = blackCards[Math.floor(Math.random() * blackCards.length)];
const selectWhite = whiteCards[Math.floor(Math.random() * whiteCards.length)];

function cardsAgainstHumanity() {
    console.log(selectBlack + selectWhite);
}

cardsAgainstHumanity();