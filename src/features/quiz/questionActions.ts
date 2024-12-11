import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuestionsDataService } from "../../services/questionService";

export const getQuestionData = createAsyncThunk(
  "get-question-data",
  async (_, { rejectWithValue }) => {
    try {
      const res = await QuestionsDataService.getQuestionData();    
      console.log({res});
         
      return res;
    } catch (err:unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return rejectWithValue(errorMessage);
    }
  }
);
