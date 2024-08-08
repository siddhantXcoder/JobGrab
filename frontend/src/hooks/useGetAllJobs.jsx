import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const searchedQuery = useSelector(store => store.job.searchedQuery);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                } else {
                    toast.error(res.data.message || 'Failed to fetch jobs.');
                }
            } catch (error) {
                console.log(error);
                toast.error('An error occurred while fetching jobs.');
            }
        };

        fetchAllJobs();
    }, [searchedQuery, dispatch]);
};

export default useGetAllJobs;
