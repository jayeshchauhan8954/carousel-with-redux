// reducers.js

const initialState = {
    currentIndex: 0,
    images: [
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/id/238/200/300',
        'https://picsum.photos/id/239/200/300',
        'https://picsum.photos/id/240/200/300',
        'https://picsum.photos/id/241/200/300'
    ]
};

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_IMAGE':
            return {
                ...state,
                currentIndex: (state.currentIndex + 1) % state.images.length
            };
        case 'PREV_IMAGE':
            return {
                ...state,
                currentIndex: (state.currentIndex - 1 + state.images.length) % state.images.length
            };
        default:
            return state;
    }
};

export default carouselReducer;
