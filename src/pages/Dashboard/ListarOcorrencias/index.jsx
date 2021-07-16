import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

import Number1Icon from '@material-ui/icons/Filter1Rounded';
import Number2Icon from '@material-ui/icons/Filter2Rounded';
import Number3Icon from '@material-ui/icons/Filter3Rounded';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useStyles } from './styles';

const data = [
  {
    mes: 'Page A',
    category_1: 4000,
    category_2: 2400,
    category_3: 2400,
  },
  {
    mes: 'Page B',
    category_1: 3000,
    category_2: 1398,
    category_3: 2210,
  },
  {
    mes: 'Page C',
    category_1: 2000,
    category_2: 9800,
    category_3: 2290,
  },
  {
    mes: 'Page D',
    category_1: 2780,
    category_2: 3908,
    category_3: 2000,
  },
  {
    mes: 'Page E',
    category_1: 1890,
    category_2: 4800,
    category_3: 2181,
  },
  {
    mes: 'Page F',
    category_1: 2390,
    category_2: 3800,
    category_3: 2500,
  },
  {
    mes: 'Page G',
    category_1: 3490,
    category_2: 4300,
    category_3: 2100,
  },
];

function ListarOcorrencias() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="main" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.listPaper}>
            <Typography variant="h5" color="primary">
              Ocorrencias Registradas
            </Typography>

            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Number1Icon color="action" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Number1Icon color="action" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Number1Icon color="action" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Number1Icon color="action" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Number1Icon color="action" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Number1Icon color="action" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8} style={{display: 'flex'}}>
          <Paper style={{flex: 1}}>
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="category_1" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="category_2" stroke="#82ca9d" />
                <Line type="monotone" dataKey="category_3" stroke="#d62392" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
          <Paper style={{flex: 1}}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListarOcorrencias;
