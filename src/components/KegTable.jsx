import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}))

function createData(brewery, name, pint, growler, origin, abv) {
  return { brewery, name, pint, growler, origin, abv };
}

const rows = [
  createData('Left Hand', 'Milk Stout (Nitro)', '9', 'N/A', 'CO', '4.0'),
  createData('Modern Times', 'Black House w/ Coconut/Cocoa (Nitro)', '6.50', 'N/A', 'CA', '5.8'),
  createData('Ground Breaker', 'IPA #5 (Gluten Free)', '8.50', '26', 'OR', '5.6'),
  createData('2 Towns', 'Pacific Pineapple Cider', '5.50', '17', 'OR', '5.0'),
  createData('Whitewood', 'Lil\' Rosybloom Crabapple Cider', '6.50', '38', 'WA', '10.7'),
]
export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Alcohol pint/growler </TableCell>
            <TableCell align="right">Brewery</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Pint</TableCell>
            <TableCell align="right">Growler</TableCell>
            <TableCell align="right">Origin</TableCell>
            <TableCell align="right">Alcohol By Volume(ABV)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.brewery}>
              <TableCell component="th" scope="row">
                {row.brewery}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.pint}</TableCell>
              <TableCell align="right">{row.growler}</TableCell>
              <TableCell align="right">{row.origin}</TableCell>
              <TableCell align="right">{row.abv}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}