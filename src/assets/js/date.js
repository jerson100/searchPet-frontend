const getDate = (text) => {
  const [, month, day, year] = new Date(text)
    .toDateString()
    .match(/[a-z]+ ([a-z]+) (\d{1,2}) (\d+)/i);
  return {
    day,
    month,
    year,
  };
};

export { getDate };
