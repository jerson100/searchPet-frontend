const variantsTitle = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "ease",
    },
  },
};

const variantsContent = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "ease",
    },
  },
};

export { variantsContent, variantsTitle };
