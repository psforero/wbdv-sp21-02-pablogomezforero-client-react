const HeadingWidget = ({ editing, cachedWidget, setCachedWidget }) => {

  return (
    <>
      {
        !editing &&
        <>
          {cachedWidget.size.toString() === "1" && <h1>{cachedWidget.text} {cachedWidget.size}</h1>}
          {cachedWidget.size.toString() === "2" && <h2>{cachedWidget.text} {cachedWidget.size}</h2>}
          {cachedWidget.size.toString() === "3" && <h3>{cachedWidget.text} {cachedWidget.size}</h3>}
          {cachedWidget.size.toString() === "4" && <h4>{cachedWidget.text} {cachedWidget.size}</h4>}
          {cachedWidget.size.toString() === "5" && <h5>{cachedWidget.text} {cachedWidget.size}</h5>}
          {cachedWidget.size.toString() === "6" && <h6>{cachedWidget.text} {cachedWidget.size}</h6>}
        </>
      }
      {
        editing &&
        <>
          <div className="mb-3">
            <input className="form-control"
                   value={cachedWidget.text}
                   type="text"
                   onChange={(e) =>
                     setCachedWidget({ ...cachedWidget, text: e.target.value })
                   }
            />
          </div>
          <div className="mb-3">
            <select className="form-control"
                    value={cachedWidget.size}
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