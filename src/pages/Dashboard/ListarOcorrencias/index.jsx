import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';

import Number1Icon from '@material-ui/icons/Filter1Rounded';
import Number2Icon from '@material-ui/icons/Filter2Rounded';
import Number3Icon from '@material-ui/icons/Filter3Rounded';
import { format } from 'date-fns/esm';
import { useState } from 'react';
import { useEffect } from 'react';
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

import { getOcorrencias } from '../../../services/database';
import { useStyles } from './styles';

function ListarOcorrencias() {
  const classes = useStyles();

  const [ocorrenciasData, setOcorrenciasData] = useState([]);
  const [ocorrenciasToChats, setOcorrenciasToChats] = useState([]);

  useEffect(() => {

    listOcorrencias();
  }, []);

  async function listOcorrencias() {
    const result = await getOcorrencias();

    const ocorrencias = result.docs.map((o) => o.data());

    const ocorrenciasByMonth = ocorrencias.reduce((obj, ocor) => {
      const mes = format(new Date(ocor.date), 'MM/yyyy');
      const mesDate = format(new Date(ocor.date), 'MM');
      obj[mesDate] = obj[mesDate] || {};
      obj[mesDate]['name'] = mes;

      obj[mesDate][ocor.category] = obj[mesDate][ocor.category] || 0;
      obj[mesDate][ocor.category] += 1;

      return obj;
    }, {});

    const dataToChart = Object.entries(ocorrenciasByMonth)
      .sort((a, b) => a[0] - b[0])
      .map((o) => o[1]);

    setOcorrenciasData(ocorrencias);
    setOcorrenciasToChats(dataToChart);
  }

  return (
    <Container maxWidth="lg" component="main" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={4} className={classes.gridItem}>
          <Paper className={classes.listPaper}>
            <Typography variant="h5" color="primary">
              Ocorrencias Registradas
            </Typography>

            <List>
              {ocorrenciasData.map((ocorrencia, index) => (
                <ListItem key={`ocorrencia-${index}`}>
                  <ListItemAvatar>
                    <Avatar>
                      {
                        ocorrencia.category === 'risco_1' && <Number1Icon color="action" />
                      }
                      {
                        ocorrencia.category === 'risco_2' && <Number2Icon color="action" />
                      }
                      {
                        ocorrencia.category === 'risco_3' && <Number3Icon color="action" />
                      }
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={ocorrencia.title} secondary={ocorrencia.description} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8} style={{ display: 'flex' }}>
          <Paper style={{ flex: 1, maxHeight: '500px' }}>
            <ResponsiveContainer>
              <LineChart
                data={ocorrenciasToChats}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="risco_1" stroke="#8884d8" />
                <Line type="monotone" dataKey="risco_2" stroke="#82ca9d" />
                <Line type="monotone" dataKey="risco_3" stroke="#d62392" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListarOcorrencias;
