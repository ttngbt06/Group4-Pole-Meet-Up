module.exports = {
  format_date: (date) => {
    // Format as mm/dd/yyyy
    return date.toLocaleDateString();
  },
  format_time: (date) => {
    return date.toLocaleString();
  },
  format_amount: (amount) => {
    // Format numbers with commas
    return parseInt(amount).toLocaleString();
  },
  // get_emoji: () => {
  //   const randomNum = Math.random();

    // Return a random emoji
    // if (randomNum > 0.7) {
    //   return `<span for="img" aria-label="lightbulb">💡</span>`;
    // } else if (randomNum > 0.4) {
    //   return `<span for="img" aria-label="laptop">💻</span>`;
    // } else {
    //   return `<span for="img" aria-label="gear">⚙️</span>`;
    // }
  // },
};
