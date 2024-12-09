import "./App.css";
import { getQuestionData } from "./features/questions/questionActions";
import {
  setQuestionsError,
  setQuestionsLoading,
} from "./features/questions/questionReducer";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./app/store";
import Quiz from "./components/questions/Quiz";
import { Answer } from "./types/questions";

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

  const [answers, setAnswers] = useState<Answer[]>([]);
  const handleAnswer = (answer: Answer) => {
    setAnswers((answers) => {
      const filteredAnswers = answers.filter(
        (ans: Answer) => ans.qId !== answer.qId
      );
      return [...filteredAnswers, answer];
    });
  };

  return (
    <>
      <div className="main">
        <Quiz answers={answers} onHandleAnswer={handleAnswer} />
      </div>
    </>
  );
}

export default App;
