import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryApi from "../../api/categoryApi";

const GroupSelect = () => {
  const [categories, setCategories] = useState([]);
  const { getCategori } = categoryApi();

  useEffect(() => {
    getCategori().then((data) => setCategories(data));
  }, []);
  return (
    <div className="group-select-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center g-4">
            <div className="col-md-1">
              <div className="group-select-left">
                <i className="icofont-abacus-alt"></i>
                <span>Filters</span>
              </div>
            </div>
            <div className="col-md-11">
              <div className="group-select-right">
                <div className="row g-2">
                  {categories.map((cat, index) => (
                    <div key={cat.id || index} className="col-md-2 catfilter">
                      <li>
                        <Link to={`/course/${cat.slug}`}>{cat.title}</Link>
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSelect;
