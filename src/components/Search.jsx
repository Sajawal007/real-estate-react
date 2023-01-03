import React from 'react';


const Search = () => {
    return (
        <>
        <h1 className='pt-40 pb-5 text-4xl font-bold'>Search for a property!</h1>
        <form>
            <div>
                <input type='text' className='border rounded-lg border-gray-300 p-4 pl-10' placeholder='Search by City, Area, Zip'/>
            </div>
        </form>
        </>
    );
}

export default Search;