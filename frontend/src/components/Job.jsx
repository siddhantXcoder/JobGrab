import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Link, useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    const jobId = "nxoahchhqhcwh"

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
   
    return (
        <div className='p-4 sm:p-5 rounded-md shadow-lg bg-white border border-gray-100'>
            <div className='flex items-center justify-between mb-4'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-4 mb-4'>
                <Avatar className="p-4 sm:p-6 border border-gray-200 rounded-full">
                    <AvatarImage src={job?.company?.logo} alt="Company Logo" />
                </Avatar>
                <div className='text-center sm:text-left'>
                    <h1 className='font-medium text-lg'>{job?.companyName}</h1>
                    <p className='text-sm text-gray-500'>{job?.location}</p>
                </div>
            </div>

            <div className='mb-4'>
                <h1 className='font-bold text-lg mb-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>

            <div className='flex flex-wrap items-center gap-2 mb-4'>
                <Badge className='text-blue-700 font-bold' variant="ghost">{job?.position} Positions</Badge>
                <Badge className='text-yellow-500 font-bold' variant="ghost">{job?.jobType}</Badge>
                <Badge className='text-[#7209b7] font-bold' variant="ghost">{job?.salary} LPA</Badge>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-4'>
               <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline" className="w-full sm:w-auto rounded-2xl mb-2 sm:mb-0">Details</Button>
                <Button className="w-full sm:w-auto bg-blue-950 hover:bg-blue-950 text-white rounded-2xl">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job;
