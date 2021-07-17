import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToAppRounded';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import CriarOcorrencia from './CriarOcorrencia';

import { useStyles } from './styles';
import ListarOcorrencias from './ListarOcorrencias';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Dashboard() {
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const classes = useStyles();

  const { signOut } = useContext(AuthContext);

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
          <IconButton onClick={() => signOut()}>
            <ExitToAppIcon />
          </IconButton>
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
