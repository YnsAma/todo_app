import Todos from "./Todos";
import "./App.css";
import useLocalStorage from "use-local-storage";
function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme=()=>{
    const newTheme = theme === 'light'?'dark':'light';
    setTheme(newTheme)
  }

  return (
    <div className="app"  data-theme={theme}>
      <Todos switchTheme={switchTheme}/>
    </div>
  );
}

export default App;
