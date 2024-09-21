import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { KataBendas } from '../../KosakataData';
import InputSearch from '../Katakerja/InputSearch';

function KataBenda() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term || '');
        setPage(0);
    };

    const filteredKataBendas = KataBendas.filter(kosakata =>
        (kosakata.kosakata && kosakata.kosakata.toLowerCase().includes(searchTerm.toLowerCase())) || // Memperbaiki dari kata ke kosakata
        (kosakata.arti && kosakata.arti.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    console.log('Filtered Data:', filteredKataBendas);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <InputSearch onSearchChange={handleSearchChange} />
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Kosakata</TableCell>
                            <TableCell>Arti</TableCell>
                            <TableCell>Kategori</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredKataBendas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((kosakata, index) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={kosakata.id}>
                                <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                                <TableCell>{kosakata.kosakata}</TableCell> {/* Memperbaiki dari kata ke kosakata */}
                                <TableCell>{kosakata.arti}</TableCell>
                                <TableCell>{kosakata.kategori}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredKataBendas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default KataBenda;