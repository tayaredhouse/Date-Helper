const introLinesArray = ['Are you', 'Do you have', 
'If you were', 'I’m not',
 'If I were', 'Do you like', 'Is this', 'If looks could kill, you’d be'];
const bodyArray = ['sure you’re not tired?','a Snitch?','into chess?','a weapon','a trick?','a taser,','a magician?', 'a map? I just got lost', 'an electrician?',
 'a photographer,', 'a cat,', 'raisins?',
'a parking ticket?', 'a frog?', 'a Transformer,', 'an airport nearby?'];
const endingArray = ['You’ve been running through my mind all day.','because you\'re the finest catch here.', 'of mass destruction','because it’s the strangest thing, but every time I look at you, everyone else disappears.', 'in your eyes.', 'because you\'re lighting up my life.',
 'you’d be set to stun.','or is it my heart taking off?','because you\'re a treat!','Optimus Fine.', 'because I think you’ve just met your match.', 'but I can definitely picture us together.', 'I’d spend all nine of my lives kitten around with you.', 'how do you feel about a date?', 'Because you’ve got FINE written all over you.', 'you\'re ribbeting!'];

 //generates random number
const randomNumber = num => {
    return Math.floor(Math.random() * num)
};

//function that finds a random item in an array
const getRandArr = arr => {
  return arr[randomNumber(arr.length)];
};

//randomly selects from each array to form the pickup line
function pickupLine () {
let intro = getRandArr(introLinesArray);
let body = getRandArr(bodyArray);
let end = getRandArr(endingArray);
console.log(`Having a hard time thinking of something to say to your crush? How about:
 ${intro} ${body} ${end}
 ... or maybe not, cause that was kind of awkward. Let's try again!`);
};

pickupLine();
