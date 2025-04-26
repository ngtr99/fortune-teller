

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10',
  'J', 'Q', 'K', 'A'
];
const description = {
  '2_of_hearts': 'A warm partnership or engagement. This is a very favorable card that indicates strength and support coming from a partner.', 
  '3_of_hearts': 'Love and happiness when the entire spread is generally favorable. In a difficult spread, this can indicate emotional problems and an inability to decide who to love.', 
  '4_of_hearts': 'Travel, change of home or business.', 
  '5_of_hearts': 'Jealousy; some ill-will from people around you.', 
  '6_of_hearts': 'A sudden wave of good luck. Someone takes care of you, takes warm interest in you.',
  '7_of_hearts': 'Someone whose interest in you is unreliable; someone with fickle affections for you. This card can indicate lovesickness.', 
  '8_of_hearts': 'Unexpected gift or visit; an invitation to a party.', 
  '9_of_hearts': 'The card of wishes. A wish/dream fulfilled. Look to the card just preceding this one to determine what the querent desires.', 
  '10_of_hearts': 'Good luck, success. This is an important card that suggests good fortune after difficulty.',
  'J_of_hearts': 'A warm-hearted friend. A fair-haired youth; or a young person with Water signs predominating in his or her chart. Often this points to a younger admirer.', 
  'Q_of_hearts': 'A fair-haired woman with a good nature; or a woman with Water signs predominating in her chart. Kind advice. Affectionate, caring woman. Sometimes, this card can indicate the mother or a mother figure.', 
  'K_of_hearts': 'A fair-haired man with a good nature; or a man with Water signs predominating in his chart. Fair, helpful advice. Affectionate, caring man. This man helps you out without much talk. His actions reveal his kindness and concern.', 
  'A_of_hearts': 'Love and happiness. The home, a love letter. This card is a particularly favorable card that indicates troubles and problems lifting.',
  '2_of_diamonds': 'A business partnership; a change in relationship; gossip.', 
  '3_of_diamonds': 'A legal letter. Be tactful with others in order to avoid disputes.', 
  '4_of_diamonds': 'Financial upswing; an older person may give good advice.', 
  '5_of_diamonds': 'Happiness and success. A change for the better. A birth, or good news for a child. A good time to start new projects.',
  '6_of_diamonds': 'Relationship problems, arguments. Separation.', 
  '7_of_diamonds': 'An argument concerning finances, or on the job. Generally expected to be resolved happily.', 
  '8_of_diamonds': 'New job; change in job situation. The young or the old may find love on a trip.', 
  '9_of_diamonds': 'A new business deal; travel; restlessness; a change of residence.',
  '10_of_diamonds': 'A change in financial status, often for the better.', 
  'J_of_diamonds': 'A youth, possibly in uniform. Or, a jealous person who may be unreliable. A person who brings news, generally negative, but relatively minor.', 
  'Q_of_diamonds': 'Fair-haired woman; or a woman with Earth predominating in her chart. A gossip.', 
  'K_of_diamonds': 'Fair-haired or graying man, or a man with Earth predominating in his chart. A man of authority, status, or influence.',
  'A_of_diamonds': 'Change; a message, often about money, and usually good news.', 
  '2_of_clubs': 'Obstacles to success; malicious gossip.', 
  '3_of_clubs': 'Love and happiness; successful marriage; a favorable long-term proposition. A second chance, particularly in an economical sense.', 
  '4_of_clubs': 'Beware of dishonesty or deceit; avoid blind acceptance of others at this time.', 
  '5_of_clubs': 'New friendships, alliances are made.',
  '6_of_clubs': 'Financial aid or success.', 
  '7_of_clubs': 'Business success, although there may be problems in love. A change in business that may have been expected or earned, such as a promotion.', 
  '8_of_clubs': 'Work/business problems that may have to do with jealousy. This is generally thought to be quite unfavorable.', 
  '9_of_clubs': 'Achievement; sometimes a wealthy marriage or a sudden windfall.', 
  '10_of_clubs': 'Business success. Good luck with money. A trip taken now may result in a new friend or love interest.', 
  'J_of_clubs': 'A dark-haired or fiery youth. Popular youth who is good-hearted and playful. Can also indicate an admirer.', 
  'Q_of_clubs': 'Dark-haired, confident woman; or a woman with Fire predominating in her chart. She may give you good advice.', 
  'K_of_clubs': 'Dark-haired, kind-hearted man; or a man with Fire predominating in his chart. A generous, spirited man.', 
  'A_of_clubs': 'Wealth, prosperity, unexpected money/gain. However, in a difficult spread, this money may disappear almost as quickly as it appears.',
  '2_of_spades': 'Breaks in relationships; deceit. A break in an important process in the querent’s life. If the question concerns a particular romantic interest, this is considered a warning card – infidelity or separation is quite likely.', 
  '3_of_spades': 'Breaks in relationships. Sometimes indicates that a third person is breaking into a relationship somehow.', 
  '4_of_spades': 'Small worries, problems. Financial difficulties, personal lows.', 
  '5_of_spades': 'Opposition and obstacles that are temporary; a blessing in disguise. Sometimes indicates a negative or depressed person.',
  '6_of_spades': 'Small changes and improvements.', 
  '7_of_spades': 'Advice that is best not taken; loss. There is some obstacle to success, and this indicates that obstacles may be coming from within the querent.', 
  '8_of_spades': 'Temptation, misfortune, danger, upsets.', 
  '9_of_spades': 'Illness, accident, bad luck. The querent is at his/her personal low.',
  '10_of_spades': 'Worry; bad news.', 
  'J_of_spades': 'A youth who is hostile or jealous.', 
  'Q_of_spades': 'Widowed or divorced woman; or a woman with Air predominating in her chart.', 
  'K_of_spades': 'Dark-haired man; or a man with Air predominating in his chart. An ambitious man, perhaps self-serving.',
  'A_of_spades': 'Misfortune; sometimes associated with death or, more often, a difficult ending.' 
};

const container = document.createElement('div');
container.className = 'card-container';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.gap = '10px';


for (let i = 0; i < 52; i++) {
const card = document.createElement('img');
card.src = 'card.png';
card.style.width = '50px';
card.style.height = '75px';
card.style.margin = '5px';
card.style.cursor = 'pointer';
card.addEventListener('mouseover', () => {
  card.style.transform = 'translateY(-5px)';
  card.style.transition = 'transform 0.2s';
});
card.addEventListener('mouseout', () => {
  card.style.transform = 'translateY(0)';
});
card.addEventListener('click', () => {
  card.style.transition = 'opacity 0.5s';
  card.style.display = 'none';
  setTimeout(() => {
    container.remove();}, 500);
  setTimeout(() => {
    descriptionContainer();}, 500);
});
container.appendChild(card);
}

document.body.appendChild(container);

const cardChoice = document.createElement('img');
cardChoice.className = 'card-choice';
cardChoice.style.display = 'none';
document.body.appendChild(cardChoice);

const cardDescription = document.createElement('div');
cardDescription.className = 'card-description';
cardDescription.style.display = 'none';
document.body.appendChild(cardDescription);

const descriptionContainer = function() {
  const randomIndex = Math.floor(Math.random() * 52);
  cardChoice.src = `cards/${ranks[randomIndex % 13]}_of_${suits[Math.floor(randomIndex / 13)]}.png`;  
  cardChoice.style.display = 'block';
  cardDescription.innerHTML = `${ranks[randomIndex % 13].toUpperCase()} OF ${suits[Math.floor(randomIndex / 13)].toUpperCase()} <br>`;
  cardDescription.innerHTML += `Your card's meaning: ${description[`${ranks[randomIndex % 13]}_of_${suits[Math.floor(randomIndex / 13)]}`]}`;
  cardDescription.style.display = 'block';
  document.querySelector('.return').style.display = 'block';
}

document.querySelector('.return').addEventListener('click', () => {
  cardChoice.style.display = 'none';
  cardDescription.style.display = 'none';
  document.querySelector('.return').style.display = 'none';
  const container = document.createElement('div');
  container.className = 'card-container';
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.gap = '10px';


  for (let i = 0; i < 52; i++) {
  const card = document.createElement('img');
  card.src = 'card.png';
  card.style.width = '50px';
  card.style.height = '75px';
  card.style.margin = '5px';
  card.style.cursor = 'pointer';
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.transition = 'transform 0.2s';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0)';
  });
  card.addEventListener('click', () => {
    card.style.transition = 'opacity 0.5s';
    card.style.display = 'none';
    setTimeout(() => {
      container.remove();}, 500);
    setTimeout(() => {
      descriptionContainer();}, 500);
  });
  container.appendChild(card);
  }

  document.body.appendChild(container);
});
