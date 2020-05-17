const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/pzmxj7j/hats.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/wLSc20M/jackets.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/d5zgPGJ/sneakers.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/3fWpxkD/women-fashion.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/QMmgqgd/men-fashion.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;