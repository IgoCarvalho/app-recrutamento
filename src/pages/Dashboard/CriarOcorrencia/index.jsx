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

import { useStyles } from './styles';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

export default function CriarOcorrencia() {
  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    location: {
      latitude: 1.456,
      longitude: 2.128,
    },
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

  function navigateToCadastro() {
    history.push('/cadastro');
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Box width="100%">
          <Typography component="h1" variant="h5">
            Criar Ocorrencia
          </Typography>
        </Box>

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Titulo"
            name="title"
            value={form.email}
            onChange={handleInputs}
          />

          <TextField
            label="Descrição"
            name="description"
            fullWidth
            multiline
            rows={4}
            value={form.description}
            onChange={handleInputs}
          />

          <FormControl margin="normal" fullWidth className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              value={form.category}
              onChange={handleInputs}
            >
              <MenuItem value="risco_1">Risco 1</MenuItem>
              <MenuItem value="risco_2">Risco 2</MenuItem>
              <MenuItem value="risco_3">Risco 3</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Data"
            type="date"
            name="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInputs}
          />

          <Box bgcolor="gray" borderRadius={3} display="flex" alignItems="center" justifyContent="center" my={2} width="100%" height={200}>
            <Typography color="textSecondary">Map</Typography>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disableElevation
          >
            Criar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
