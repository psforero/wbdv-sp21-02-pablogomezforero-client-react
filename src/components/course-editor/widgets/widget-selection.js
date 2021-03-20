import React from 'react'

const WidgetSelection = ({ widget }) => {
  return (
    <>
      <select className="form-control"
              value={widget.type}>
        <option value='HEADING'>Heading</option>
        <option value='PARAGRAPH'>Paragraph</option>
        <option value='VIDEO' disabled>Video</option>
        <option value='IMAGE' disabled>Image</option>
        <option value='LINK' disabled>Link</option>
        <option value='LIST' disabled>List</option>
        <option value='HTML' disabled>HTML</option>
      </select>
    </>
  );
};

export default WidgetSelection;