import { useState } from "react";
import QuizStatus from "./QuizStatus";
import QuestionCard from "./QuestionCard";
import QuizControls from "./QuizControls";
import useQuestionDataSelector from "../../features/questions/questionSelector";
import "../../styles/quiz.css";

const Quiz = () => {
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const {
    questions: quizQuestions,
    loading: isLoading,
    error,
  } = useQuestionDataSelector();

  // Improved navigation logic
  const handleNext = () => {
    setCurrentQIndex((prevIndex) =>
      prevIndex < quizQuestions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentQIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  // Handle quiz state when no questions or loading
  if (isLoading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (quizQuestions.length === 0) {
    return <div>No questions available</div>;
  }

  const currentQuestion = quizQuestions[currentQIndex];
  return (
    <>
      <div className="quiz">
        <h1>Quiz</h1>
        <QuizStatus
          qNumber={currentQIndex + 1}
          totalQuestions={quizQuestions.length}
        />
        <QuestionCard question={currentQuestion} onSelectAnswer={handleNext} />
        <QuizControls
          onNext={handleNext}
          onPrev={handlePrev}
          isFirstQuestion={currentQIndex === 0}
          isLastQuestion={currentQIndex === quizQuestions.length - 1}
        />
      </div>
    </>
  );
};

export default Quiz;
