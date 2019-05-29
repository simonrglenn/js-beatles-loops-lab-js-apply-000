const theBeatlesPlay = (musicians, instruments) => {
  let beatlesArr = [];
  for (let i = 0; i < musicians.length; i++) {
        beatlesArr.push(musicians[i] + ' plays ' + instruments[i]);
      }
  return beatlesArr
  }

const johnLennonFacts = facts => {
  let j = 0;
  wowFacts = [];
  while (facts[j > facts.length]) {
    wowFacts.push(facts[j] + '!!!')
    ++j;
  }
  return facts;
}
