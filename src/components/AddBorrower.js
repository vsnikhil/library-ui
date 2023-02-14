import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";

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

export default function AddBorrower(props) {
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
              <FormLabel> Name</FormLabel>
              <Input placeholder="Enter name" />
              <FormLabel>Address</FormLabel>
              <Input placeholder="Enter address" />
              <FormLabel>Phone</FormLabel>
              <Input placeholder="Enter phone" />
              <FormLabel>SSN</FormLabel>
              <Input placeholder="Enter ssn" />
              <Button
                variant="solid"
                color="success"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
                onClick={() => {
                  props.setDisplay("home");
                  alert("Borrower Added!");
                }}
              >
                Confirm
              </Button>
              <Button
                variant="solid"
                color="danger"
                style={{ marginBottom: "1rem", width: "15rem" }}
                onClick={() => {
                  props.setDisplay("home");
                }}
              >
                Back
              </Button>
            </div>
          </div>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
