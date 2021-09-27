import {Grid} from '@material-ui/core';
import {TableRow,TableContainer,Paper,TableHead,TableBody,withStyles,TableCell,makeStyles,Table} from '@material-ui/core'

import { useState } from 'react';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
function ProductList(){
    const classes = useStyles();
    const [count,setCount]=useState(0);
    function createData(productname, quantity, price) {
        
        return {  productname, quantity, price};
      }
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 67),
        createData('Gingerbread', 356, 16.0, 49),
      ];
    return(
        <Grid container>
            <Grid item container xs={0} sm={2}></Grid>
            <Grid item container direction='column'xs={12} sm={8} style={{marginTop:"5px"}}>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Item Name</StyledTableCell>
                        
                        <StyledTableCell align="right">Quntity</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.productname}>
                        <StyledTableCell component="th" scope="row">
                            {row.productname}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                        <StyledTableCell align="right">{row.price}</StyledTableCell>
                        
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <button className="doneButton">DONE</button>
            </Grid>
            <Grid item container xs={0} sm={2}></Grid>
        </Grid>
    );
}

export default ProductList;