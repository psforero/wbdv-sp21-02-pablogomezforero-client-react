import React, { useEffect, useState } from 'react'
import WidgetSelection from './widget-selection';

const HeadingWidget = ({ widget, editing, updateHandler }) => {
  const [editWidget, setEditWidget] = useState(widget);
  useEffect(() => {
    setEditWidget(widget)
  }, [widget]);

  return (
    <>
      <h2>{widget.text}</h2>
      {
        !editing &&
        <>
          {widget.size === 1 && <h1>{widget.text}</h1>}
          {widget.size === 2 && <h2>{widget.text}</h2>}
          {widget.size === 3 && <h3>{widget.text}</h3>}
          {widget.size === 4 && <h4>{widget.text}</h4>}
          {widget.size === 5 && <h5>{widget.text}</h5>}
          {widget.size === 6 && <h6>{widget.text}</h6>}
        </>
      }
      {
        editing &&
        <form className="col-11">
          <div className="mb-3">
            <WidgetSelection widget={widget}/>
          </div>
          <div className="mb-3">
            <input className="form-control"
                   value={editWidget.text}
                   type="text"
                   onChange={(e) => {
                     setEditWidget({ ...editWidget, text: e.target.value })
                     updateHandler(editWidget);
                   }}
            />
          </div>
          <div className="mb-3">
            <select className="form-control"
                    value={widget.size}>
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
              <option value={4}>Heading 4</option>
              <option value={5}>Heading 5</option>
              <option value={6}>Heading 6</option>
            </select>
          </div>
        </form>
      }
    </>
  );
};

export default HeadingWidget;