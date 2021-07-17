import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: 'calc(100vh - 64px)',
    display: 'flex',
  },
  gridItem: {
    height: '100%',
    overflow: 'auto'
  },
  listPaper: {
    padding: theme.spacing(2),
  }
}));