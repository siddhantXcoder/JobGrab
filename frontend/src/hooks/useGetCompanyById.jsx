import { setSingleCompany } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, { withCredentials: true });
                if (res.data?.success) {
                    dispatch(setSingleCompany(res.data.company));
                } else {
                    console.error('Failed to fetch company:', res.data?.message);
                }
            } catch (error) {
                console.error('Error fetching company:', error.response?.data?.message || error.message);
            }
        }

        if (companyId) {
            fetchSingleCompany();
        }
    }, [companyId, dispatch]);
}

export default useGetCompanyById;
