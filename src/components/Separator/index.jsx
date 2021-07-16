import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

function Separator({ text }) {
  const classes = useStyles();

  return (
    <Typography className={classes.separator} component="span" variant="subtitle2">
      {text}
    </Typography>
  );
}

export default Separator;
