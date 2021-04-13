import Answer from './answer';

const TrueFalseQuestion = ({ question, graded, questionIsCorrect, setSelected, selected }) => {
  const trueOption = 'true';
  const falseOption = 'false';
  return (
    <ul className="list-group">
      <Answer question={question}
              graded={graded}
              questionIsCorrect={questionIsCorrect}
              setSelected={setSelected}
              selected={selected}
              option={trueOption}/>
              
      <Answer question={question}
              graded={graded}
              questionIsCorrect={questionIsCorrect}
              setSelected={setSelected}
              selected={selected}
              option={falseOption}/>
    </ul>
  );
};

export default TrueFalseQuestion;