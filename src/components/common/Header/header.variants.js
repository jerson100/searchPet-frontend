const header_variants = {
  inactive: {
    x: 0,
  },
  active: {
    x: "200px",
  },
};

const menu_mobile_variants = {
  container: {},
  paper: {
    inactive: {
      x: "-200px",
    },
    active: {
      x: 0,
    },
  },
  background: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
    },
  },
};

export { header_variants, menu_mobile_variants };
