import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return <div></div>;
}

export default function Home(props) {
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 500,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <h2>Library Management</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1rem",
              }}
            >
              <Button
                variant="solid"
                color="primary"
                style={{ marginBottom: "1rem" }}
                onClick={() => {
                  props.setDisplay("search");
                }}
              >
                Search
              </Button>
              <Button
                variant="solid"
                color="success"
                style={{ marginBottom: "1rem" }}
                onClick={() => {
                  props.setDisplay("checkin");
                }}
              >
                Check-in
              </Button>
              <Button
                variant="solid"
                color="danger"
                style={{ marginBottom: "1rem" }}
                onClick={() => {
                  props.setDisplay("fines");
                }}
              >
                Fines
              </Button>
              <Button
                variant="solid"
                color="info"
                style={{ marginBottom: "1rem", width: "15rem" }}
                onClick={() => {
                  props.setDisplay("addborrower");
                }}
              >
                Add Borrower
              </Button>
            </div>
            {/* <br></br> */}
            {/* <div>
              <Button variant="solid">Solid</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="plain">Plain</Button>
            </div> */}
          </div>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
