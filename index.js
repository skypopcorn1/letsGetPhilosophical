const greetings = [
  'Well, hello there. How long have you been there? Was I talking to myself again?',
  'Hey hey!',
  'Oh, hey, it\'s you again.',
  'Yo yo yo, waaaaazzzzzup!?',
  'Hi',
  'And he took the road less travelled, and it hurt man...Oh, hey there. Sorry I get lost in my own thoughts sometimes.',
];

const philosophies = [
  'Every minute of every day the trees are growing. The path you don\'t take today will only get harder to take tomorrow.',
  'Life is too short to remove a USB \'safely\'.',
  'You can carry a rabbit\'s foot for luck, but remember it didn\'t provide much luck for the rabbit.',
  'Sometimes your mouth is like a zipper. By the time you realise it is open, you\'ve already embarrased yourself.',
  'If it weren\'t for the last minute panic monster, nothing would get done.',
  'When life gives you melons, you might be dislexic.',
  'Be the person your dog thinks you are.',
  'Your life is based on a true',
  'Our society accepts that it is okay for a child to play with their mother’s breasts, but not their father’s testicles.',
  'An apple a day will keep anyone away if you throw it hard enough',
  'Life is short, smile while you still have teeth.',
];

const farewells = [
  'Adios mutha trucker!',
  'See ya!!',
  'Okay BYE!',
  'Hasta La Vista Baby!',
  'I\'ll be back',
  'Peace out dude',
  'Totes cool, lates.'
];

function createMsg(){
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const philosophy = philosophies[Math.floor(Math.random() * philosophies.length)];
  const farewell = farewells[Math.floor(Math.random() * farewells.length)];
  const lines = "\n.....................\n.....................\n";

  return greeting + lines + philosophy + lines + farewell;
}

console.log(createMsg());
