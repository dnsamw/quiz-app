import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuestionsDataService } from "../../services/questionService";

export const getQuestionData = createAsyncThunk(
  "get-question-data",
  async (_, { rejectWithValue }) => {
    try {
      console.log("getQuestionData - ACTION");

      const res = await QuestionsDataService.getQuestionData();
      console.log({res});
      
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
