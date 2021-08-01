import { createContext, useState, useEffect } from 'react';

export const ResultListContext = createContext();

export const ResultListContextProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);

  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch('http://localhost:8000/data');
        const data = await res.json();

        const updatedResults = data.map((item) => ({
          name: item[0],
          company: item[1],
          email: item[2],
          date: +item[3].split('/')[2],
          country: item[4],
          city: item[5],
        }));

        setResults(updatedResults);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchResults();
  }, []);

  useEffect(() => {
    if (!text.length) {
      setSuggestions([]);
    }
  }, [text]);

  const textChangedHandler = (text) => {
    let matches = [...results];
    if (text.length > 0) {
      matches = results.filter((res) => {
        const regex = new RegExp(`${text}`, 'gi');
        return res.country.match(regex) || res.city.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  switch (sortOption) {
    case 'nameAsc':
      suggestions.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'nameDesc':
      suggestions.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'yearAsc':
      suggestions.sort((a, b) => a.date - b.date);
      break;
    case 'yearDesc':
      suggestions.sort((a, b) => b.date - a.date);
      break;

    default:
      break;
  }

  return (
    <ResultListContext.Provider
      value={{
        results,
        setResults,
        text,
        setText,
        suggestions,
        setSuggestions,
        textChangedHandler,
        setSortOption,
      }}
    >
      {children}
    </ResultListContext.Provider>
  );
};
