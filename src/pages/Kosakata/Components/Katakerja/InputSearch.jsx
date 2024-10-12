import React, { useState, useEffect } from 'react';
import './input.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function InputSearch({ onSearchChange }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchChange(searchTerm);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearchChange(value);

        // Tambah class active jika input terisi, hapus jika kosong
        const inputSearch = e.target;
        if (value.trim() !== '') {
            inputSearch.classList.add('active');
        } else {
            inputSearch.classList.remove('active');
        }
    };

    return (
        <form className="form-search" role="search" onSubmit={handleSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Cari Kosakata..."
                aria-label="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
                Search <SearchOutlinedIcon />
            </button>
        </form>
    );
}

export default InputSearch;