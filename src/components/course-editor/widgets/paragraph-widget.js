import React from 'react'

const ParagraphWidget = ({ widget, editing }) => {
  return (
    <>
      {
        !editing &&
        <p>{widget.text}</p>
      }
      {
        editing &&
        <textarea className="form-control"
                  value={widget.text}
                  cols="30"
                  rows="10">
        </textarea>
      }
    </>
  );
}

export default ParagraphWidget;