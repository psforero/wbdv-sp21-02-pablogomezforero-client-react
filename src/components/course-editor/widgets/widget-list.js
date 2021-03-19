import React, { useState, useEffect } from 'react'
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';
import { useParams } from 'react-router-dom';
import widgetService from '../../../services/widget-service';

const WidgetList = () => {
  const { topicId } = useParams();
  const [widgets, setWidgets] = useState([]);
  const [editWidget, setEditWidget] = useState({});

  useEffect(() => {
    widgetService.findWidgetsForTopic(topicId)
      .then(widgets => setWidgets(widgets));
    setEditWidget({})
  }, [topicId]);

  const createWidget = () => {
    widgetService.createWidget(topicId)
      .then(widgetCreated => {
        setWidgets(widgets => ([...widgets, widgetCreated]));
      })
  }

  const deleteWidget = () =>
    widgetService.deleteWidget(editWidget.id)
      .then(response => {
        setWidgets(widgets => widgets.filter(w => w.id !== editWidget.id));
        setEditWidget({});
      });


  const updateWidget = (widget) => {
    widgetService.updateWidget(widget)
      .then(response => {
        setWidgets(widgets => widgets.map(w => w.id !== widget.id ? w : widget));
        setEditWidget({});
      })
  }

  return (
    <div>
      <i className="fas fa-plus fa-2x float-right"
         onClick={createWidget}/>
      <h3>Widget List {widgets.length} {editWidget.id}</h3>
      <ul className="list-group">
        {
          widgets.map((widget, index) =>
            <li className="list-group-item">
              {
                editWidget.id === widget.id &&
                <>
                  <i className="fas fa-fw fa-check float-right"
                     onClick={() => updateWidget(widget)}/>
                  <i className="fas fa-fw fa-trash float-right"
                     onClick={() => deleteWidget()}/>
                </>
              }
              {
                editWidget.id !== widget.id &&
                <i className="fas fa-cog fa-lg float-right"
                   onClick={() => setEditWidget(widget)}/>
              }
              {
                widget.type === 'HEADING' &&
                <HeadingWidget
                  widget={widget}
                  editing={widget.id === editWidget.id}/>
              }
              {
                widget.type === 'PARAGRAPH' &&
                <ParagraphWidget
                  widget={widget}
                  editing={widget.id === editWidget.id}/>
              }
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default WidgetList;