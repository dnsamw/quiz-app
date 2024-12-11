import useQuestionDataSelector from "../../features/quiz/questionSelector";
import "../../styles/quiz-status.scss";

interface Props {
  qNumber: number;
  totalQuestions: number;
}

const QuizStatus = ({ qNumber, totalQuestions }: Props) => {
  const { results, questions } = useQuestionDataSelector();
  return (
    <>
      <div className="quiz-status">
        <div className="q-number">
          {qNumber}/ {totalQuestions}
        </div>

        <div className="incorrect">
          wrong : {results ? results.incorrectAnswerCount : "--"}
        </div>
        <div className="correct">
          correct : {results ? results.correctAnswerCount : "--"}
        </div>
        <div className="score">
          score : {results ? (results.correctAnswerCount / questions.length) * 100 : "--"} %
        </div>
      </div>
    </>
  );
};

export default QuizStatus;
