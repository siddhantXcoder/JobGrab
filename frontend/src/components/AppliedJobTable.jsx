import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
    return (
        <div className="overflow-x-auto">
            <Table className="min-w-full divide-y divide-gray-200">
                <TableCaption className="text-left">A list of your applied jobs</TableCaption>
                <TableHeader className="bg-gray-50">
                    <TableRow>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Role</TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</TableHead>
                        <TableHead className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="bg-white divide-y divide-gray-200">
                    {
                        [1, 2, 3, 4].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="px-6 py-4 whitespace-nowrap">11-04-2003</TableCell>
                                <TableCell className="px-6 py-4 whitespace-nowrap">Frontend Developer</TableCell>
                                <TableCell className="px-6 py-4 whitespace-nowrap">Google</TableCell>
                                <TableCell className="px-6 py-4 whitespace-nowrap text-right">
                                    <Badge className="bg-green-500 hover:bg-green-500 text-white">Selected</Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable;
