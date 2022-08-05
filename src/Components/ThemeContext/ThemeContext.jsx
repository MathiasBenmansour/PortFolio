import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(true);
  const toogleTheme = () => {
    setTheme(!theme);
  };

  
    if (theme){
      document.body.classList.add("dark-body");
    } else {
      document.body.remove("dark-body");
    }
  

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
