import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1, 0),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function handleInputs(event) {
    const { name, value } = event.target;

    setForm({...form, [name]: value});
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
          variant="outlined"
          color="primary"
          className={classes.submit}
        >
          Login com Google
        </Button>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
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
          >
            Login
          </Button>
          <Box>
            <Typography>
              Novo por aqui? {' '}
              <Link href="#" variant="body2">
                Crie uma conta agora!
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
