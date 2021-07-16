import { darken, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1, 0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
  googleButton: {
    margin: theme.spacing(3, 0, 2),
    background: '#4285F4',
    '&:hover': {
      background: darken('#4285F4', 0.1),
    },
  },
  googleIcon: {
    marginRight: theme.spacing(2),
  },
}));
