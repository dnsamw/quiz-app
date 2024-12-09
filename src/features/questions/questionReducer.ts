import { createSlice } from "@reduxjs/toolkit";
import { getQuestionData } from "./questionActions";


export interface QuestionDataSlice {
  loading: boolean;
  error: any;
  questionData: any;
}

const initialState: QuestionDataSlice = {
  loading: false,
  error: null,
  questionData: [],
};

export const questionDataSlice = createSlice({
  name: "questionDataSlice",
  initialState,
  reducers: {
    setQuestionData: (state, action) => {
      state.questionData = action.payload;
    },
    setQuestionsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setQuestionsError: (state, action) => {
      state.error = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getQuestionData.pending, (state, _) => {
        state.loading = true;
      });
    builder.addCase(getQuestionData.fulfilled, (state, action) => {
        state.questionData = action.payload;
        state.loading = false;
      });
    builder.addCase(getQuestionData.rejected, (state, _) => {
        state.loading = false;
      });
  },
});

export const {
    setQuestionData,
    setQuestionsLoading,
    setQuestionsError
  } = questionDataSlice.actions;
  
  export default questionDataSlice.reducer;