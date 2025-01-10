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
  },
  education: {
    classroom: getImagePath('/education-classroom.jpg'),
    interactive: getImagePath('/classroom-interactive.png'),
    science: getImagePath('/classroom-science.png')
  },
  corporate: {
    meeting: getImagePath('/corporate-meeting.jpg'),
    workspace: getImagePath('/google-workspace.jpg')
  },
  banners: {
    unveiling: getImagePath('/unveiling.png')
  }
}; 