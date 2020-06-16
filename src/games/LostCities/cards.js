const values = [0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const suits = [0, 1, 2, 3, 4];

export default function createDeck() {
  const cards = [];
  suits.forEach((suit) => {
    values.forEach((val) => {
      cards.push({value: val, suit: suit})
    });
  });
  return cards;
}
