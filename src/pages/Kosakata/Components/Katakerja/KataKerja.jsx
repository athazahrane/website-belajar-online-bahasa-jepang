import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Kosakatas } from '../../KosakataData';
import InputSearch from './InputSearch';

function KataKerja() {
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
        setSearchTerm(term);
        setPage(0);
    };

    const filteredKosakatas = Kosakatas.filter(kosakata => 
        kosakata.kata.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kosakata.arti.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        {filteredKosakatas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((kosakata, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={kosakata.id}>
                                    <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                                    <TableCell>{kosakata.kata}</TableCell>
                                    <TableCell>{kosakata.arti}</TableCell>
                                    <TableCell>{kosakata.kategori}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredKosakatas.length} // Ganti count dengan filteredKosakatas.length
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default KataKerja;