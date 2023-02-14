import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { CssVarsProvider } from "@mui/joy/styles";
import Login from "./components/Login";
import Home from "./components/Home";
import Search from "./components/Search";
import Confirm from "./components/Confirm";
import AddBorrower from "./components/AddBorrower";
import Fines from "./components/Fines";
import CheckIn from "./components/CheckIn";

function App() {
  const [display, setDisplay] = useState("login");
  return (
    <CssVarsProvider>
      {display == "login" && <Login setDisplay={setDisplay} />}
      {display == "home" && <Home setDisplay={setDisplay} />}
      {display == "search" && <Search setDisplay={setDisplay} />}
      {display == "confirmcheckout" && <Confirm setDisplay={setDisplay} />}
      {display == "addborrower" && <AddBorrower setDisplay={setDisplay} />}
      {display == "fines" && <Fines setDisplay={setDisplay} />}
      {display == "checkin" && <CheckIn setDisplay={setDisplay} />}
    </CssVarsProvider>
  );
}

export default App;
