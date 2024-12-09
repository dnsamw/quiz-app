import { createSlice } from "@reduxjs/toolkit";
import { getQuestionData } from "./questionActions";
import { Answer } from "../../types/questions";

export interface QuestionDataSlice {
  loading: boolean;
  error: any;
  questionData: any;
  answerData: Answer[];
}

const initialState: QuestionDataSlice = {
  loading: false,
  error: null,
  questionData: [],
  answerData: [],
};

export const questionDataSlice = createSlice({
  name: "questionDataSlice",
  initialState,
  reducers: {
    setQuestionData: (state, action) => {
      state.questionData = action.payload;
    },
    updateAnswerData: (state, action) => {
      // add answer to the answerData array and replece if already exists by filtering out by action.payload.qId
      state.answerData = [
        ...state.answerData.filter(
          (ans: Answer) => ans.qId !== action.payload.qId
        ),
        action.payload,
      ];
    },
    setQuestionsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setQuestionsError: (state, action) => {
      state.error = action.payload;
    },
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
  setQuestionsError,
  updateAnswerData,
} = questionDataSlice.actions;

export default questionDataSlice.reducer;
