import React, { useRef, useContext } from "react";
// global style
import "./styles/globalStyles.css";
import themes from "./config/theme/theme.json";
import { GlobalStyles } from "./styles/GlobalStyle";
import { CustomStyle } from "./styles/CustomStyle";
import { ThemeProvider } from "styled-components";
import "antd/dist/antd.css";

//config file
import projectConfig from "./config/page/project";
import TopLoader from "./components/topLoader";
// Routing file
import AppRoutes from "./routes";
// context file
import LoaderContext from "./context/LoaderContext";
import GlobalContextWrapper from "./context/globalContext";

function App() {
  const topBarRef = useRef(null); // To use top loader
  const { isLoader } = projectConfig; // Variable to enable and disable loader
  const { colors } = themes;

  return (
    <ThemeProvider theme={themes}>
      <LoaderContext.Provider
        value={{
          topBarRef,
        }}
      >
        <GlobalStyles />
        <CustomStyle />
        <GlobalContextWrapper>
          <AppRoutes />
        </GlobalContextWrapper>
        {isLoader && <TopLoader color={colors.primary} isLoader={isLoader} />}
      </LoaderContext.Provider>
    </ThemeProvider>
  );
}

export default App;
