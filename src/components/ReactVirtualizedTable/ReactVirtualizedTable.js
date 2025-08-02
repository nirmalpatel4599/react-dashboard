import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';





const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent(columns) {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    style={column.style}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    // style={{ width: column.width }}
                    sx={{ backgroundColor: 'background.paper' }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(columns, row) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align={column.numeric || false ? 'right' : 'left'}
                    style={column.style}
                >
                    {row[column.dataKey]}
                </TableCell>
            ))
            }
        </React.Fragment >
    );
}

export default function ReactVirtualizedTable({ columns11, rows11 }) {
    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <TableVirtuoso
                data={rows11}
                components={VirtuosoTableComponents}
                fixedHeaderContent={() => fixedHeaderContent(columns11)}
                itemContent={(index, row) => rowContent(columns11, row)}
            />
        </Paper>
    );
}
