import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const res = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(res.data.query.search);
    };
    if (term) {
      search();
    }
    if (!term) {
      setResult([]);
    }
  }, [term]);

  const onFormSubmit = (even) => {
    even.preventDefault();
    setTerm(document.getElementById("search").value);
  };

  const renderResult = result.map((res, index) => {
    return (
      <div className="card mb-3" key={res.pageid}>
        <div className="card-header d-flex justify-content-between">
          <p>{res.title}</p>
          <p className="border-bottom">{index + 1}</p>
        </div>
        <div className="card-body">
          <div className="d-flex">
            <div className="">
              <span
                dangerouslySetInnerHTML={{ __html: res.snippet + " ..." }}
              ></span>
            </div>
            <a
              target="_blank"
              className=" ml-3 btn btn-outline-dark align-self-center"
              href={`https://en.wikipedia.org?curid=${res.pageid}`}
            >
              Go
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6">
          <form
            action=""
            className="mt-4"
            autoComplete="off"
            onSubmit={onFormSubmit}
          >
            <div className="form-group">
              <label htmlFor="search" className="font-weight-bold text-center">
                Wikipedia Search
              </label>
              <div className="d-flex">
                <input
                  type="text"
                  id="search"
                  placeholder="Search..."
                  className="form-control"
                />
                <button className="btn btn-dark">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>{renderResult}</div>
    </React.Fragment>
  );
};
export default Search;
