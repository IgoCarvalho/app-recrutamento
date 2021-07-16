import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { Paper } from '@material-ui/core';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import CriarOcorrencia from './CriarOcorrencia';

import { useStyles } from './styles';
import ListarOcorrencias from './ListarOcorrencias';

function Dashboard() {
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const classes = useStyles();

  console.log({ path, url });

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            App Recrutamento
          </Typography>
          <Button onClick={() => history.push(url)} color="inherit">
            Listar ocorrencias
          </Button>
          <Button
            onClick={() => {
              history.push(`${url}/criar`);
            }}
            color="inherit"
          >
            Nova ocorrencia
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path={path}>
          <ListarOcorrencias />
        </Route>
        <Route exact path={`${path}/criar`}>
          <CriarOcorrencia />
        </Route>
      </Switch>
    </>
  );
}

export default Dashboard;
