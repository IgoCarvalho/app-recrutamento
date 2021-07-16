import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import PersonIcon from '@material-ui/icons/Person';

import GoogleIcon from '../../assets/icons/GoogleIcon';
import Separator from '../../components/Separator';

import { useStyles } from './styles';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function handleInputs(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form);
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Box width="100%">
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Entre para ter acesso aos nossos servicos.
          </Typography>
        </Box>

        <Button
          fullWidth
          classes={{
            root: classes.googleButton,
            startIcon: classes.googleIcon,
          }}
          startIcon={<GoogleIcon />}
        >
          Login com Google
        </Button>

        <Separator text="ou use seu email" />

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.email}
            onChange={handleInputs}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleInputs}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disableElevation
          >
            Login
          </Button>
        </form>

        <Separator text="novo por aqui?" />

        <Button fullWidth variant="outlined" color="primary" className={classes.submit}>
          Crie uma conta
        </Button>
      </Paper>
    </Container>
  );
}
