/**
 *
 * @param {fecha1} d1 Fecha menor
 * @param {fecha2} d2 Fecha mayor
 * @returns {object} Devuelve un objeto que contiene los años, días, horas, minutos y segundos
 */
const differenceDates = (d1, d2) => {
  const d1_Milis = d1.getTime();
  const d2_Milis = d2.getTime();
  const diff = d2_Milis - d1_Milis;
  const segs = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (60 * 1000)) % 60);
  const hours = Math.floor((diff / (60 * 60 * 1000)) % 24);
  const days = Math.floor((diff / (24 * 60 * 60 * 1000)) % 30);
  const years = Math.floor(diff / (24 * 60 * 60 * 1000) / (30 * 12));
  return {
    years,
    days,
    hours,
    minutes,
    segs,
  };
};

/**
 *
 * @param {Date} publicationDate Fecha de publicación
 * @returns {string} Una cadena de texto mencionando hace cuando se ha realizado la publicación
 */
const getTweetPublicationDate = (publicationDate) => {
  const { days, hours, minutes, segs } = differenceDates(
    publicationDate,
    new Date()
  );
  //   console.log(days, hours, minutes, segs);
  if (days > 0) {
    return `${days} día${days > 1 ? "s" : ""} `;
  }
  if (hours > 0) {
    return `${hours} h`;
  }
  if (minutes > 0) {
    return `${minutes} m`;
  }
  if (segs > 30) {
    return `${segs} s`;
  }
  return "Hace instantes";
};

export { getTweetPublicationDate, differenceDates };
