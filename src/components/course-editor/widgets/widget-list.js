import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import widgetService from '../../../services/widget-service';
import WidgetItem from './widget-item';

const WidgetList = (
  {
    widgets = [],
    findWidgetsForTopic,
    createWidget,
    deleteWidget,
    updateWidget
  }
) => {
  const { topicId } = useParams();
  const [editWidget, setEditWidget] = useState({});
  useEffect(() => {
    findWidgetsForTopic(topicId);
    setEditWidget({})
  }, [findWidgetsForTopic, topicId]);

  return (
    <div>
      <i className="fas fa-plus fa-2x float-right"
         onClick={() => createWidget(topicId)}/>
      <h3>Widget List {widgets.length}</h3>
      <ul className="list-group">
        {
          widgets.map((widget, index) =>
            <li className="list-group-item">
              {
                editWidget.id !== widget.id &&
                <i className="fas fa-cog fa-lg float-right"
                   onClick={() => setEditWidget(widget)}/>
              }
              <WidgetItem widget={widget}
                          editing={widget.id === editWidget.id}
                          updateWidget={updateWidget}
                          deleteWidget={deleteWidget}
                          setEditWidget={setEditWidget}/>
            </li>
          )
        }
      </ul>
    </div>
  );
}

const stpm = (state) => {
  return {
    widgets: state.widgetReducer.widgets
  }
}

const dtpm = (dispatch) => {
  return {
    findWidgetsForTopic: (topicId) => {
      widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
          type: 'FIND_WIDGETS_FOR_TOPIC',
          widgets
        }));
    },
    createWidget: (topicId) => {
      widgetService.createWidget(topicId)
        .then(widgetCreated => dispatch({
          type: 'CREATE_WIDGET',
          widget: widgetCreated
        }));
    },
    deleteWidget: (widget, setEditWidget) => {
      widgetService.deleteWidget(widget.id)
        .then(response => dispatch({
          type: 'DELETE_WIDGET',
          widget

        }));
      setEditWidget({});
    },
    updateWidget: (widget, setEditWidget) => {
      widgetService.updateWidget(widget)
        .then(response => dispatch({
          type: 'UPDATE_WIDGET',
          widget
        }));
      setEditWidget({});
    }
  }
}

export default connect(stpm, dtpm)(WidgetList);