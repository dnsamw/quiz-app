import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuestionsDataService } from "../../services/questionService";

export const getQuestionData = createAsyncThunk(
  "get-question-data",
  async (_, { rejectWithValue }) => {
    try {
      const res = await QuestionsDataService.getQuestionData();      
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
