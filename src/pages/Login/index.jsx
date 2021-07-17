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
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const classes = useStyles();
  const history = useHistory();

  const { loginWithGoogle, loginWithEmailAndPassword } = useContext(AuthContext);

  function handleInputs(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    loginWithEmailAndPassword(form);
  }

  function navigateToCadastro() {
    history.push('/cadastro');
  }

  async function googleLogin() {
    await loginWithGoogle();
  }

  return (
    <Container component="main" maxWidth="xs">
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
          onClick={googleLogin}
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

        <Button
          fullWidth
          variant="outlined"
          color="primary"
          className={classes.submit}
          onClick={navigateToCadastro}
        >
          Crie uma conta
        </Button>
      </Paper>
    </Container>
  );
}
