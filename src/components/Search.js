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
import Searchresultstable from "./Searchresultstable";

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

export default function Search(props) {
  const thStyle = { borderBottom: "1px solid black" };
  const tdStyle = { textAlign: "center" };
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 900,
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}
              >
                <FormControl>
                  {/* <FormLabel>Label</FormLabel> */}
                  <Input placeholder="" style={{ marginRight: "1rem" }} />
                </FormControl>
                <Button
                  variant="solid"
                  color="success"
                  style={{ marginBottom: "1rem" }}
                  onClick={() => {
                    //   props.setDisplay("fines");
                  }}
                >
                  Search
                </Button>
              </div>
              <div>
                {/* <DenseTable></DenseTable> */}
                <table
                  style={{
                    border: "2px solid forestgreen",
                    width: "800px",
                    height: "200px",
                  }}
                >
                  <tr>
                    <th style={thStyle}>ISBN</th>
                    <th style={thStyle}>Title</th>
                    <th style={thStyle}>Authors</th>
                    <th style={thStyle}>Availability</th>
                    <th style={thStyle}>Select</th>
                  </tr>

                  <tr>
                    <td style={tdStyle}>195153448</td>
                    <td style={tdStyle}>Classical Mythology</td>
                    <td style={tdStyle}>Mark P. O. Morford</td>
                    <td style={tdStyle}>Yes</td>
                    <td style={tdStyle}>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>2005018</td>
                    <td style={tdStyle}>Clara Callen: A Novel</td>
                    <td style={tdStyle}>Richard Bruce Wright</td>
                    <td style={tdStyle}>No</td>
                    <td style={tdStyle}>
                      <input type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>60973129</td>
                    <td style={tdStyle}>Decision in Normandy</td>
                    <td style={tdStyle}>Carlo D'Este</td>
                    <td style={tdStyle}>Yes</td>
                    <td style={tdStyle}>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </table>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  variant="solid"
                  color="success"
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    width: "15rem",
                  }}
                  onClick={() => {
                    props.setDisplay("confirmcheckout");
                  }}
                >
                  Check out book
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
          </div>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
