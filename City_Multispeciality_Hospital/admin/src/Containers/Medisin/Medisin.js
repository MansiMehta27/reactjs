import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Medisin(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handlesubmit = () => {
                
    }
    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add medisin
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add medisi </DialogTitle>
          <DialogContent>
            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              fullWidth
              variant="standard"
            />
             <TextField
              autoFocus
              margin="dense"
              id="price"
              label="medisin price"
              fullWidth
              variant="standard"
            />
             <TextField
              autoFocus
              margin="dense"
              id="quantity"
              label="quantity"
              fullWidth
              variant="standard"
            />
             <TextField
              autoFocus
              margin="dense"
              id="expiry"
              label="expiry"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handlesubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default Medisin;