import Answer from './answer'

const MultipleChoiceQuestion = ({ question, graded, questionIsCorrect, setSelected, selected }) => {

  return (
    <ul className="list-group">
      {
        question.choices.map((choice) => {
          return (
            <Answer question={question}
                    graded={graded}
                    questionIsCorrect={questionIsCorrect}
                    setSelected={setSelected}
                    selected={selected}
                    option={choice}/>
          );
        })
      }
    </ul>
  );
}

export default MultipleChoiceQuestion;