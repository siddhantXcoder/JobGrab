import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';

const randomJobs = [1, 2, 3, 4, 5];

const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8'>
                <h1 className='font-bold text-xl sm:text-2xl mb-10'>Search Results ({randomJobs.length})</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        randomJobs.map((item, index) => {
                            return (
                                <Job key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse;
