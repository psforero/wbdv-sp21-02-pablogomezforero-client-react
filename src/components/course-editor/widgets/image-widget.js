import React from 'react';

const ImageWidget = ({ editing, cachedWidget, setCachedWidget }) => {

    return (
      <>
        {
          !editing &&
          <img src={cachedWidget.src}
               width={cachedWidget.width}
               height={cachedWidget.height}
               alt={cachedWidget.text}/>
        }

        {
          editing &&
          <>
            <div className="row mb-3">
              <label htmlFor="image-url"
                     className="col-sm-2
                            col-form-label">
                Image URL
              </label>
              <input className="form-control
                            col-sm-9"
                     value={cachedWidget.src}
                     type="text"
                     id="image-url"
                     onChange={(e) =>
                       setCachedWidget({ ...cachedWidget, src: e.target.value })
                     }
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="image-width"
                     className="col-sm-2
                            col-form-label">
                Image width
              </label>
              <input className="form-control
                            col-sm-9"
                     value={cachedWidget.width}
                     type="text"
                     id="image-url"
                     onChange={(e) =>
                       setCachedWidget({ ...cachedWidget, width: e.target.value })
                     }
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="image-height"
                     className="col-sm-2
                            col-form-label">
                Image height
              </label>
              <input className="form-control
                            col-sm-9"
                     value={cachedWidget.height}
                     type="text"
                     id="image-height"
                     onChange={(e) =>
                       setCachedWidget({ ...cachedWidget, height: e.target.value })
                     }
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="image-alt"
                     className="col-sm-2
                            col-form-label">
                Description*
              </label>
              <input className="form-control
                            col-sm-9"
                     value={cachedWidget.text}
                     type="text"
                     id="image-alt"
                     onChange={(e) =>
                       setCachedWidget({ ...cachedWidget, text: e.target.value })
                     }
              />
              <p className="col-sm-2"/>
              <p className="col-sm-9"> * Specifies alternate text for an image if a user for some
                reason cannot view it (because of slow connection, an error in the url, or
                if the user uses a screen reader).</p>
            </div>
          </>
        }
      </>
    );
  }
;

export default ImageWidget;