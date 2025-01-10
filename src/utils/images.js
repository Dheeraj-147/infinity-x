const getImagePath = (path) => {
  return `${process.env.PUBLIC_URL}/images${path}`;
};

export const images = {
  logo: getImagePath('/logo.png'),
  products: {
    getProductImage: (name) => getImagePath(`/products/${name}`),
    backgrounds: {
      explore: getImagePath('/backgrounds/explore-bg.png'),
    }
  }
}; 