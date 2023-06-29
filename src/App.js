import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import { findAllByDisplayValue } from "@testing-library/react";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(findAllByDisplayValue);

  const getData = async (params) => {
    setLoading(true);
    const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "705cf4553cmsh3c31dd4b87e4b49p1f85abjsn7c99ed9faca4",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setLoading(false);
      setList(result.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return loading ? (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  ) : (
    <div className="flex w-full justify-center items-center space-x-4 space-y-4 flex-wrap">
      {list.map((item, index) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.name.slice(0, 50)}
            image={item.thumbnail_url}
            time={item.cook_time_minutes}
          />
        );
      })}
    </div>
  );
}

export default App;
