const theBeatlesPlay = (musicians, instruments) => {
  let beatlesArr = [];
  for (let i = 0; i < musicians.length; i++) {
        beatlesArr.push(musicians[i] + ' plays ' + instruments[i]);
      }
  return beatlesArr
  }

const johnLennonFacts = facts => {
  let j = 0;
  while (facts[j > facts.length]) {
    /*facts[j].concat('!!!');*/
    ++j;
  }
  return facts;
}
