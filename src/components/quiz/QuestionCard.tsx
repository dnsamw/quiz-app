import { Answer, Question } from "../../types/quiz";
import { useAppDispatch } from "../../app/store";
import { updateAnswerData } from "../../features/quiz/questionReducer";
import useQuestionDataSelector from "../../features/quiz/questionSelector";
import "../../styles/question-card.scss";

interface Props {
  question: Question | null;
  onSelectAnswer: () => void;
}

const QuestionCard = ({ question, onSelectAnswer }: Props) => {
  const {
    answers: quizAnswers,
    loading: isLoading,
    results,
  } = useQuestionDataSelector();
  const dispatch = useAppDispatch();
  const handleSelectAnswer = (answer: Answer) => {
    dispatch(updateAnswerData(answer));
    setTimeout(() => {
      onSelectAnswer();
    }, 300);
  };

  if (!question) {
    return <div className="question-container">Nothing to show!</div>;
  }

  if (isLoading) {
    return <div className="question-container">Loading...</div>;
  }

  if (results) {
    return (
      <div className="question-container">
        <div className="results">
          <div className="total-score">
            {(results.correctAnswerCount / results.resultData.length) * 100} %
          </div>
          {results.resultData.map((result: any) => (
            <div
              className={`result ${result.isCorrect ? "correct" : "incorrect"}`}
              key={result.qId}
            >
              <div className="question">
                {result.qId}. {result.question}
              </div>
              {!result.isCorrect ? (
                <div>
                  <div className="user-answer">
                    Your Answer: {result.userAnswer}
                  </div>
                  <div className="correct-answer">
                    Correct Answer: {result.correctAnswer}
                  </div>
                </div>
              ) : (
                <div className="correct-answer">
                  Answer: {result.correctAnswer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="question-container">
        <div className="question">
          {question?.number}. {question.question}
        </div>
        <div className="options">
          {question.options.map((option: string, index: number) => (
            <div
              onClick={() =>
                handleSelectAnswer({ qId: question.id, answer: option })
              }
              key={index}
              className={`option ${
                quizAnswers.find((ans: Answer) => ans.answer === option)
                  ? " active"
                  : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
