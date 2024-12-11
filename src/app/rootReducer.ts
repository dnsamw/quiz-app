import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import questions, { QuestionDataSlice } from "../features/quiz/questionReducer";
import storage from "redux-persist/lib/storage/session";

export interface RootSliceType {
  quiz: QuestionDataSlice;
  }

const quizConfig = {
    key: "quiz",
    storage,
    whitelist: ["quiz"],
    transforms: [
    //   encryptTransform({
    //     secretKey: Config.reduxPersistEncryptKey,
    //   }),
    ],
  };

const rootReducer = combineReducers({
  // auth,
  quiz: persistReducer(quizConfig, questions),  
});

export default rootReducer;
