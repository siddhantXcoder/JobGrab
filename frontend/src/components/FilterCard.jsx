import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    return (
        <div className='w-full bg-white p-4 sm:p-6 rounded-md shadow-md'>
            <h1 className='font-bold text-lg mb-4'>Filter Jobs</h1>
            <hr className='mb-4' />
            <RadioGroup>
                {filterData.map((data, index) => (
                    <div key={index} className='mb-6'>
                        <h2 className='font-semibold text-md mb-2'>{data.filterType}</h2>
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`
                            return (
                                <div key={itemId} className='flex items-center space-x-2 mb-2'>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterCard;
