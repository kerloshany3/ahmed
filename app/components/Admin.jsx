'use client';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../api/GlobalApi';

const Admin = () => {
    const [numOfStu, setnumOFStu] = useState([]);
    const [email, setEmail] = useState('');
    const [activeEmail, SetActiveEmail] = useState(-1);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [searchEmail, setSearchEmail] = useState('');
    const emailsPerPage = 5; // Emails to show per page

    console.log(filteredData)
    const handleSelectEmail = (item, index) => {
        setEmail(item);
        SetActiveEmail(index);
    };

    useEffect(() => {
        dataadmin();
    }, []);

    const dataadmin = () => {
        GlobalApi.data4admin().then((res) => {
            setnumOFStu(res.userEnrolls);
        });
    };

    const uniqueEmails = [...new Set(numOfStu?.map((item) => item.userEmail))];

    // Filter emails based on search input
    const filteredEmails = uniqueEmails.filter((email) =>
        email.toLowerCase().includes(searchEmail.toLowerCase())
    );

    useEffect(() => {
        if (numOfStu.length > 0 && email) {
            const result = getDataForEmail(email); // Pass the selected email
            setFilteredData(result); // Update filtered data
        }
    }, [numOfStu, email]);

    console.log(numOfStu)

    const convertDate = (dateStr) => {
        const date = new Date(dateStr);
        // Format the date as y/m/d
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    };
    
    const getDataForEmail = (email) => {
        const userData = numOfStu.filter((item) => item.userEmail === email);

        const aggregatedData = userData.reduce((acc, item) => {
            const existingCourse = acc.find((course) => course.courseid === item.courseid);
            if (existingCourse) {
                existingCourse.totalPrice += item.course.price;
            } else {
                acc.push({
                    courseid: item.courseid,
                    totalPrice: item.course.price,
                    dataofSub: convertDate(item.course.updatedAt)
                });
            }
            return acc;
        }, []);

        return aggregatedData;
    };

    // Pagination Logic
    const totalPages = Math.ceil(filteredEmails.length / emailsPerPage); // Calculate total pages
    const paginatedEmails = filteredEmails.slice(
        (currentPage - 1) * emailsPerPage,
        currentPage * emailsPerPage
    ); // Emails for the current page

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
            SetActiveEmail(-1); // Reset active email
            setEmail(''); // Reset selected email
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
            SetActiveEmail(-1); // Reset active email
            setEmail(''); // Reset selected email
        }
    };

    return (
        <div className="select-none rounded-2xl mt-8 bg-admin-imag bg-cover bg-center">
            <h2 className="font-arabicUI3 pt-10 text-white text-5xl p-5 m-auto flex justify-center">
                لوحة الادمن
            </h2>

            <div className="grid gap-5 p-5 rtl-grid grid-cols-5">
                {/* Number of Students */}
                <div className="border-4 rounded-xl h-fit mx-auto m-4">
                    <h3 className="p-2 text-center font-arabicUI3 leading-normal text-5xl text-white">
                        عدد الطلاب المشتركين فكورسات
                    </h3>
                    <h3 className="p-2 text-center font-arabicUI3 flex justify-between text-6xl text-blue-950 bg-white m-4 rounded-xl">
                        <span>طالب</span>
                        <span className="m-auto">{uniqueEmails.length}</span>
                    </h3>
                </div>

             
                
                <div className="border-4 rounded-xl col-span-2 m-4">
                    <h3 className="p-2 text-center font-arabicUI3 leading-normal text-5xl text-white">
                        ايميلات الطلاب المشتركين فكورسات
                    </h3>
                    <input
                        value={searchEmail}
                        onChange={(e) => setSearchEmail(e.target.value)}
                        type="text"
                        placeholder="بحث بالايميل.."
                        className="text-left p-2 text-4xl w-4/5 flex justify-center mx-auto font-arabicUI3 rounded-xl m-5"
                    />
                    {paginatedEmails.map((item, index) => (
                        <h3
                            onClick={() => handleSelectEmail(item, index)}
                            key={index}
                            className={`${
                                activeEmail === index
                                    ? 'bg-green-500 text-white'
                                    : 'text-blue-950 bg-white'
                            } cursor-pointer duration-300 text-right p-2 transition justify-end font-arabicUI3 flex text-4xl m-4 rounded-xl`}
                        >
                            <span className="m-auto">{item}</span>
                        </h3>
                    ))}
                  
                    
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="px-5 py-2 bg-blue-500 text-white rounded-2xl font-arabicUI3 text-4xl m-2 disabled:opacity-50"
                        >
                            السابق
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-5 py-2 bg-blue-500 text-white rounded-2xl font-arabicUI3 text-4xl m-2 disabled:opacity-50"
                        >
                            التالي
                        </button>
                    </div>
                </div>

              
                <div className="border-4 rounded-xl col-span-2 m-4 h-fit">
                    <h3 className="p-2 text-center font-arabicUI3 leading-normal text-5xl text-white">
                        تفاصيل الاشتراك
                    </h3>
                    {email ? (
                        filteredData.map((item, index) => (
                            <h3
                                key={index}
                                className={`text-blue-950 bg-white cursor-pointer duration-300 text-right p-2 transition justify-end font-arabicUI3 flex text-4xl m-4 rounded-xl`}
                            >
                                <span className="m-auto">{item.courseid.toUpperCase()}</span>
                                <span className="m-auto">{item.dataofSub} </span>
                            </h3>
                        ))
                    ) : (
                        <h4 className="text-white m-5 font-arabicUI3 text-6xl text-center leading-relaxed bg-green-400 rounded-xl">
                            اختار ايميل من فضلك
                        </h4>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
