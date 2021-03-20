import React, { useState, useEffect } from 'react'
import WidgetSelection from './widget-selection';

const ParagraphWidget = ({ widget, editing }) => {
    const [editWidget, setEditWidget] = useState(widget);

    useEffect(() => {
      setEditWidget(widget)
    }, [widget]);
    return (
      <>
        {
          !editing &&
          <p>{widget.text}</p>
        }
        {
          editing &&
          <form className="col-11">
            <div className="mb-3">
              <WidgetSelection widget={widget}/>
            </div>
            <div className="mb-3">
          <textarea className="form-control"
                    value={editWidget.text}
                    type="text"
                    onChange={(e) =>
                      setEditWidget({ ...editWidget, text: e.target.value })}
                    cols="30"
                    rows="10">
          </textarea>
            </div>
          </form>
        }
      </>
    );
  }
;

export default ParagraphWidget;