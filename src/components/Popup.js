import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/iconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    bottom: 0,
  },
  titleBar: {
    position: 'relative',
  },
}));

function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  return (
    <Dialog open={openPopup} maxWidth='lg' className={classes.appBar}>
      <DialogTitle className={classes.titleBar}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flexGrow: '1', fontSize: '1rem' }}>{title}</div>
          <IconButton
            onClick={() => setOpenPopup(false)}
            color='secondary'
            style={{ marginRight: '-1.5rem', marginTop: '-1rem' }}
          >
            <CancelIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
