import React from 'react'

const Question = ({ question }) => {
  return (
    <>
      <h4>{question.title}</h4>
      <h5>{question.question}</h5>
      {
        question.type === 'TRUE_FALSE' &&
        <p>TRUE FALSE</p>
      }
      {
        question.type === 'MULTIPLE_CHOICE' &&
        <p>MULTIPLE CHOICE</p>
      }
    </>
  );
}

export default Question;
// {/*"_id": "345",*/}
// {/*"title": "JSON True False",*/}
// {/*"quizId": "234",*/}
// {/*"question": "JSON stands for Java Object Notation",*/}
// {/*"correct": "false",*/}
// {/*"type": "TRUE_FALSE"*/}