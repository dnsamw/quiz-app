import { Answer, Question } from "../../types/questions";
import "../../styles/question-card.css";

interface Props {
  question: Question | null;
  answers: Answer[];
  onAnswer: (answer: Answer) => void;
}

const QuestionCard = ({ question, answers, onAnswer }: Props) => {
  const handleSelectAnswer = (answer: Answer) => {
    onAnswer(answer);
  };

  if (!question) {
    return <div className="question-container">Nothing to show!</div>;
  }

  return (
    <>
      <div className="question-container">
        <div className="question">{question.question}</div>
        <div className="options">
          {question.options.map((option: string, index: number) => (
            <div
              onClick={() =>
                handleSelectAnswer({ qId: question.id, answer: option })
              }
              key={index}
              className={`option ${
                answers.find((ans: Answer) => ans.answer === option)
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
