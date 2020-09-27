const insertion = (card) => {
    for (let i = 0; i < card.length; i++) {
      let k = i;
      for (let j = i - 1; j >= 0; j--) {
        if (card[j] > card[k]) {
          [card[k], card[j]] = [card[j], card[k]];
          k--;
        } else {
          break;
        }
      }
    }
  };