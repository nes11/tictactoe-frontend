import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const AlertDialog = ({ open, setState }) => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={() => setState()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>Invalid move</DialogTitle>
          <DialogContent>
            <DialogContentText>This square is not available. Choose an empty square.</DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    )

}

export default AlertDialog;