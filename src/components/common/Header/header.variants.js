const header_variants = {
  inactive: {
    x: 0,
  },
  active: {
    x: "200px",
  },
};

const show_header_initial_state_variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export { header_variants, show_header_initial_state_variants };
