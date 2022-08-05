import { useState } from "react";
import project from "../../data/data";
import "./Search.css";

export default function Search() {
  let [searchTerm, setSearchTerm] = useState("");
  let [displaySearch, setDisplaySearch] = useState(false);

  const mapFilter = project
    .filter((val) => {
      return val.title.toLowerCase().includes(searchTerm.toLowerCase());
    })

    .map((val) => {
      return (
        <div className="search__result" key={val.id}>
          {val.title && searchTerm
            ? <div><a href={val.link} target="blank">{val.title}</a> </div>
          
            
            
            
            : "Recherche invalide !"}  
        </div>
      );
    });

  const handleSearchTerm = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value.length > 2 && setSearchTerm(value);
    setDisplaySearch(true);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher ..."
        onChange={handleSearchTerm}
      />

      {displaySearch ? (
        <ul>
          <li>{mapFilter}</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
