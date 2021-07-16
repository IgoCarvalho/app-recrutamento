import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';

import GoogleIcon from '../../assets/icons/GoogleIcon';
import Separator from '../../components/Separator';

import { useStyles } from './styles';

function Cadastro() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const classes = useStyles();
  const history = useHistory();

  function handleInputs(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form);
  }

  function navigateToLogin() {
    history.push('/login');
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Box width="100%">
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Crie sua conta e tenha acesso aos nossos servicos.
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
          Entre com Google
        </Button>

        <Separator text="ou use seu email" />

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleInputs}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
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
            Entrar
          </Button>
        </form>

        <Separator text="já possui uma conta?" />

        <Button
          fullWidth
          variant="outlined"
          color="primary"
          className={classes.submit}
          onClick={navigateToLogin}
        >
          Faça login
        </Button>
      </Paper>
    </Container>
  );
}

export default Cadastro;
