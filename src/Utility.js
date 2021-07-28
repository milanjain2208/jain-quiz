function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
function importAll(r) {
    const keys = r.keys()
    keys.sort((firstEl, secondEl) => {
        if(firstEl.length<secondEl.length) {
            return -1
        }
        return firstEl>secondEl
    })
    return keys.map(r);
}
const images = importAll(require.context('./Images', false, /\.(png)$/));
const tirthIndex = shuffle(Array.from(Array(24).keys()))
const tirthankar = ["Rishabhanatha","Ajitanatha","Sambhavanatha","Abhinandananatha","Sumatinatha","Padmaprabha","Suparshvanatha","Chandraprabha",
                    "Pushpadanta", "Shitalanatha", "Shreyansanatha","Vasupujya","Vimalanatha","Anantanatha","Dharmanatha","Shantinatha","Kunthunatha",
                    "Aranatha","Mallinatha","Munisuvrata","Naminatha","Neminatha","Parshvanatha","Mahavira"]
export {shuffle,images, tirthankar, tirthIndex};
