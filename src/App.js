import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import { PhoneList } from "./components/PhoneList";
import { getPhones } from "./helpers";

function App() {
  const [phones, setPhones] = useState([]);
  const [query, setQuery] = useState('');
  const [sortOption, setSortOption] = useState('alphabetical')

  useEffect(() => {
    getPhones().then(setPhones);
  },[]);

  const getVisiblePhones = () => {
    const normalizeQuery = (value) => value.toLowerCase();
    return phones.filter(
        phone => normalizeQuery(phone.name)
          .includes(normalizeQuery(query))
    );
  };

  const visiblePhones = useMemo(
    getVisiblePhones, [phones, query]
  );

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <section>
              <p>
                Search:
                <input
                    placeholder="Type phone name"
                    type="text"
                    value={query}
                    onChange={event => {
                      setQuery(event.target.value)
                    }}
                />
              </p>

              <p>
                Sort by:
                <select>
                  <option value="name">Alphabetical</option>
                  <option value="age">Newest</option>
                </select>
              </p>
            </section>

            <section>
              <p>Shopping Cart</p>
              <ul>
                <li>Phone 1</li>
                <li>Phone 2</li>
                <li>Phone 3</li>
              </ul>
            </section>
          </div>
      <PhoneList phones={visiblePhones} />
      </div>
      </div>
    </div>
  );
}

export default App;
