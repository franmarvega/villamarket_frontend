const theme = {
  components: {
    Button: {
      base: 'px-4 py-2 rounded-md',
      variants: {
        solid: {
          base: 'bg-primary-500 text-white',
        },
      },
      sizes: {
        md: 'text-lg',
      },
    },
  },
  colors: {
    primary: {
      500: '#333333',
    },
    background: {
      light: '#ffffff',
      dark: '#121212',
    },
  },
};

export default theme;