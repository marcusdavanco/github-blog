import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { IssuesProvider } from "./context/issuesContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <IssuesProvider>
          <Router />
        </IssuesProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
