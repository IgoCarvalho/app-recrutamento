import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  separator: {
    color: theme.palette.text.hint,
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    width: '100%',
    '&::before': {
      content: '""',
      height: 2,
      flex: 1,
      background: theme.palette.divider,
      marginRight: theme.spacing(1),
    },
    '&::after': {
      content: '""',
      height: 2,
      flex: 1,
      background: theme.palette.divider,
      marginLeft: theme.spacing(1),
    },
  },
}));
