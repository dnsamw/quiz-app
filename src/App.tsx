import "./App.css";
import { getQuestionData } from "./features/questions/questionActions";
import {
  setQuestionsError,
  setQuestionsLoading,
} from "./features/questions/questionReducer";
import { useEffect } from "react";
import { useAppDispatch } from "./app/store";

function App() {
  const dispatch = useAppDispatch();
  const loadQuestionData = async () => {
    console.log("loadQuestionData");
    
    dispatch(setQuestionsLoading(true));
    try {
      await dispatch(getQuestionData());
    } catch (err: any) {
      console.log(err);
      dispatch(setQuestionsError(err));
      dispatch(setQuestionsLoading(false));
    } finally {
      dispatch(setQuestionsLoading(false));
    }
  };

  useEffect(() => {
    loadQuestionData();
  }, []);

  return (
    <>
      <div className="main"></div>
    </>
  );
}

export default App;
