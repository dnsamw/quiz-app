import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import questions, { QuestionDataSlice } from "../features/quiz/questionReducer";
import storage from "redux-persist/lib/storage/session";

export interface RootSliceType {
  questions: QuestionDataSlice;
  }

const questionConfig = {
    key: "questions",
    storage,
    whitelist: ["questions"],
    transforms: [
    //   encryptTransform({
    //     secretKey: Config.reduxPersistEncryptKey,
    //   }),
    ],
  };

const rootReducer = combineReducers({
  // auth,
  questions: persistReducer(questionConfig, questions),  
});

export default rootReducer;
