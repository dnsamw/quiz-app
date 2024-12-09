import '../../styles/quiz-status.css';

interface Props {
  qNumber: number;
  totalQuestions: number;
}

const QuizStatus = ({ qNumber, totalQuestions }: Props) => {
  return (
    <>
      <div className="quiz-status">
        <div className="q-number">
          {qNumber}/ {totalQuestions}
        </div>
        <div className="wrong">wrong : 3</div>
        <div className="correct">correct : 7</div>
        <div className="score">score : 70%</div>
      </div>
    </>
  );
};

export default QuizStatus;
