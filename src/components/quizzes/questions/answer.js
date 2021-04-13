import React from 'react'

const Answer = ({ question, graded, questionIsCorrect, setSelected, selected, option }) => {
  return (
    <>
      {
        !graded &&
        <li className="list-group-item">
          <label onClick={() => setSelected(option)}>
            <input type="radio" name={question._id}/>
            {option}
          </label>
        </li>
      }

      {
        graded &&
        <li className={`list-group-item 
        ${option === selected && !questionIsCorrect ? 'list-group-item-danger' : ''}
        ${option === question.correct ? 'list-group-item-success' : ''}
        `}
        >

          <label>
            <input type="radio" name={question._id} disabled checked={option === selected}/>
            {option}
          </label>

          {
            option === selected && !questionIsCorrect &&
            <i className="fas fa-lg fa-times float-right"/>
          }
          {
            option === question.correct &&
            <i className="fas fa-lg fa-check float-right"/>
          }
        </li>
      }
    </>

  );
};

export default Answer;