import React, { useState, ChangeEvent } from 'react';

function Search(){
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value);
    };

    return (
        <div>
            <form action="/search" method="get">
                <i className="fa-solid fa-filter"></i>
                <label htmlFor="category-select">Category:</label>
                <select id="category-select" value={category} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="health">Health</option>
                    <option value="finance">Finance</option>
                    <option value="lifestyle">Lifestyle</option>
                </select>

                <label htmlFor="sort-select">Sort by:</label>
                <select id="sort-select" value={sort} onChange={handleSortChange}>
                    <option value="">Default</option>
                    <option value="date-new-old">Date: New to Old</option>
                    <option value="date-old-new">Date: Old to New</option>
                    <option value="popularity">Popularity</option>
                </select>
                

                <input type="text" name="query" className="search-input" placeholder="Search blog posts... " />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
}

export default Search;
