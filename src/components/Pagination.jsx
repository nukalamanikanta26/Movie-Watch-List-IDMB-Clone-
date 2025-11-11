import React from 'react';

function Pagination({ pageNo, setPageNo }) {
    // Handler for left arrow
    const handlePrev = () => {
        if (pageNo > 1) setPageNo(pageNo - 1);
    };

    // Handler for right arrow
    const handleNext = () => {
        setPageNo(pageNo + 1);
    };

    return (
        <div className='bg-gray-400 flex flex-row justify-center hover:cursor-pointer items-center space-x-4'>
            <i 
                className="fa-solid fa-arrow-left"
                onClick={handlePrev}
                style={{ color: pageNo === 1 ? 'gray' : 'black', pointerEvents: pageNo === 1 ? 'none' : 'auto' }}
            ></i>
            <div className='font-bold'>{pageNo}</div>
            <i 
                className="fa-solid fa-arrow-right"
                onClick={handleNext}
            ></i>
        </div>
    );
}

export default Pagination;
