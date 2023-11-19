import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Word {
  id: string;
  word: string;
}

interface WordState {
  words: Array<Word>;
  next: null | string;
  previous: null | string;
}

const initialState: WordState = {
  words: [],
  next: null,
  previous: null,
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setWords: (state, action: PayloadAction<Array<Word>>) => {
      state.words = action.payload;
    },
    setNext: (state, action: PayloadAction<null | string>) => {
      state.next = action.payload;
    },
    setPrevious: (state, action: PayloadAction<null | string>) => {
      state.previous = action.payload;
    },
  },
});

export const { setWords, setNext, setPrevious } = wordSlice.actions;

export default wordSlice.reducer;
