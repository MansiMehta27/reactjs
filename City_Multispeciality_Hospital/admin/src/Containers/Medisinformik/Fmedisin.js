import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

 function Medisin(props){
  const [open, setOpen] = useState(false);
  const [dopen, setdOpen] = useState(false);
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [expiry, setexpiry] = useState('');
  const [data, setdata] = useState([]);
  const [did, setdid]= useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setdOpen(false);
  };
  const handledClickOpen = (params) => {
    setdOpen(true);
    setdid(params.id);
  }

    const getdata = () => {
    let localData = JSON.parse(localStorage.getItem('medicine'));
    if (localData !== null) {
      setdata(localData)
    }
}
const handleDelete=(params)=>{
      let localData1=JSON.parse(localStorage.getItem('medicine'));
      let appdata=localData1.filter((l,i)=>l.id!==did);
      localStorage.setItem("medicine", JSON.stringify(appdata));
      setdid();
      getdata();
      handleClose();
}
  useEffect(
    () => {
      getdata();
    },
    [])

  const handleSubmit = () => {
    console.log(name,price,quantity,expiry);
    let data = {
      id: Math.floor(Math.random() * 1000),
      name,
      price,
      quantity,
      expiry

    };

    // localStorage.setItem('medicine' ,JSON.stringify(data));
   let localData = JSON.parse(localStorage.getItem('medicine'))

    if (localData === null) {
      localStorage.setItem('medicine', JSON.stringify([data]));

    }
    else {
      localData.push(data)
      localStorage.setItem('medicine', JSON.stringify(localData));
    }
    handleClose();
    setname('');
    setprice('');
    setexpiry('');
    setquantity('');
    getdata();
   
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    { field: 'expiry', headerName: 'Expiry', width: 130 },
    { field: 'action', headerName: 'Action', width: 130, renderCell:(params)=>{
      return(
        <IconButton aria-label="delete"onClick={()=>handledClickOpen(params)}>
        <DeleteIcon />
      </IconButton>
      )
    } }

  ];
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add medisin
      </Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add medisi </DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="name"
            fullWidth
            variant="standard"
            onChange={(e) => setname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="price"
            label="medisin price"
            fullWidth
            variant="standard"
            onChange={(e) => setprice(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="quantity"
            label="quantity"
            fullWidth
            variant="standard"
            onChange={(e) => setexpiry(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="expiry"
            label="expiry"
            fullWidth
            variant="standard"
            onChange={(e) => setquantity(e.target.value)}

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
       <Dialog
        open={dopen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are u sure delete?"}
        </DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Medisin;