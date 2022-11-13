const containerVariants = {
  hidden: {
    y: "-100%",
    scale: 0,
    opacity: 0,
  },
  toBottom: {
    y: 0,
    opacity: 1,
    scale: 0.5,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
  scale: {
    scale: [0.5, 1.1, 1, 1.1, 1],
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

export { containerVariants };
