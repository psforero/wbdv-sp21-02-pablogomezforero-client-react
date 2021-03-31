import React from 'react';

const HeadingWidget = ({ editing, cachedWidget, setCachedWidget }) => {

  return (
    <>
      {
        !editing &&
        <>
          {cachedWidget.size.toString() === '1' && <h1>{cachedWidget.text} {cachedWidget.size}</h1>}
          {cachedWidget.size.toString() === '2' && <h2>{cachedWidget.text} {cachedWidget.size}</h2>}
          {cachedWidget.size.toString() === '3' && <h3>{cachedWidget.text} {cachedWidget.size}</h3>}
          {cachedWidget.size.toString() === '4' && <h4>{cachedWidget.text} {cachedWidget.size}</h4>}
          {cachedWidget.size.toString() === '5' && <h5>{cachedWidget.text} {cachedWidget.size}</h5>}
          {cachedWidget.size.toString() === '6' && <h6>{cachedWidget.text} {cachedWidget.size}</h6>}
        </>
      }
      {
        editing &&
        <>
          <div className="row mb-3">
            <label htmlFor="heading-text"
                   className="col-sm-2
                              col-form-label">
              Text
            </label>
            <input className="form-control
                              col-sm-9"
                   value={cachedWidget.text}
                   type="text"
                   id="heading-text"
                   onChange={(e) =>
                     setCachedWidget({ ...cachedWidget, text: e.target.value })
                   }
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="heading-size"
                   className="col-sm-2
                              col-form-label">
              Heading size
            </label>
            <select className="form-control
                              col-sm-9"
                    value={cachedWidget.size}
                    id="heading-size"
                    onChange={(e) =>
                      setCachedWidget({ ...cachedWidget, size: e.target.value })}>
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
              <option value={4}>Heading 4</option>
              <option value={5}>Heading 5</option>
              <option value={6}>Heading 6</option>
            </select>
          </div>
        </>
      }
    </>
  );
};

export default HeadingWidget;