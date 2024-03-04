import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alerts } from "../components/Alerts";
import { useEffect } from "react";

const defaultTheme = createTheme();

export const SignUpIn = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { signUpUser, signInUser, msg, setMsg } = useContext(UserContext);

  useEffect(() => {
    setMsg("");
    document.querySelector("form").reset();
  }, [param?.type]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    if (param.type == "in")
      signInUser(data.get("email"), data.get("password")) &&
      navigate("/");
    else signUpUser(data.get("email"), data.get("password")) &&
      navigate("/")
  };

  let forgotten;

  if (param.type == 'in') {
    forgotten = <Grid container>
      <Grid item xs>
        <Link
          className="pwstyle"
          component="button"
          variant="body2"
          onClick={() => navigate("/pwreset")}
        >
          Elfelejtett jelszó
        </Link>
      </Grid>
    </Grid>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {param.type == "up" ? "Regisztráció" : "Bejelentkezés"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {param.type == "up" ? "Regisztráció" : "Bejelentkezés"}
            </Button>
            {forgotten}
          </Box>
        </Box>
        {msg && <Alerts msg={msg} severity="error" />}
      </Container>
    </ThemeProvider>
  );
};
