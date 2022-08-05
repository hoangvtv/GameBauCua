import { add_comment } from "../types/FakeBookType";

const initialState = {
  comments: [
    {
      name: "Yone",
      content: "Hi ! yasuo !",
      avatar: `https://i.pravatar.cc/150?u=yone`,
    },
    {
      name: "Yasuo",
      content: "Hi ! brother !",
      avatar: `https://i.pravatar.cc/150?u=yasuo`,
    },
  ],
};

const FakeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_comment: {
      state.comments = [...state.comments, action.userComment];

      return { ...state };
    }
    default:
      return state;
  }
};

export default FakeBookReducer;
