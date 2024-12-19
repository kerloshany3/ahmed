'use client';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../api/GlobalApi';
import AdminContent from './AdminContent';
import { BsPatchCheckFill } from "react-icons/bs";


const Admin = () => {
    const [numOfStu, setnumOFStu] = useState([]);
    const [email, setEmail] = useState('');
    const [activeEmail, SetActiveEmail] = useState(-1);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchEmail, setSearchEmail] = useState('');
    const [password, setPassword] = useState(false);
    const [adminPass, setAdminPass] = useState('');
    const [activeBar, setActiveBar] = useState(0)
    const [idOfEnroll, setOfEnroll] = useState('')
    const [loadingAction, setLoadingAction] = useState(false);
    const [activeornot, setActiveOrNot] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const emailsPerPage = 5; // Emails to show per page



    const updateStateoOfSub = () => {
        GlobalApi.editStateSub(idOfEnroll, activeornot).then(req => {
            console.log(req)
        })
        publishEnrolls()
    }


    const publishEnrolls = () => {
        GlobalApi.publishEnrolls().then(req => {
            console.log(req)
        })
    }

    useEffect(() => {
        const storedPassword = localStorage.getItem('adminPassword');
        if (storedPassword === '135792468') {
            setPassword(true);
        }
    }, []);

    const handleInputPass = (e) => {
        const enteredPassword = e.target.value;
        setAdminPass(enteredPassword);
        if (enteredPassword === '135792468') {
            setPassword(true);
            localStorage.setItem('adminPassword', enteredPassword); // Store the password in localStorage
        }
    };

    console.log(filteredData);

    const handleSelectEmail = (item, index) => {
        setEmail(item);
        SetActiveEmail(index);
        setShowConfirmation(false)
       
    };

    useEffect(() => {
        dataAdmin();
    }, []);

    const dataAdmin = async () => {
        const res = await GlobalApi.data4admin();
        setnumOFStu(res.userEnrolls);
    };

    const uniqueEmails = [...new Set(numOfStu?.map((item) => item.userEmail))];


    const filteredEmails = uniqueEmails.filter((email) =>
        email.toLowerCase().includes(searchEmail.toLowerCase())
    );

    useEffect(() => {
        if (numOfStu.length > 0 && email) {
            const result = getDataForEmail(email); // Pass the selected email
            setFilteredData(result); // Update filtered data
        }
    }, [numOfStu, email]);

    console.log(numOfStu);

    const convertDate = (dateStr) => {
        const date = new Date(dateStr);
        // Format the date as y/m/d
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }

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
                    dataofSub: convertDate(item.course.updatedAt),
                    isHeEnroll: item.isHePaid,
                    idOfEnroll: item.id
                });
            }
            return acc;
        }, []);

        return aggregatedData;
    }


    const totalPages = Math.ceil(filteredEmails.length / emailsPerPage); // Calculate total pages
    const paginatedEmails = filteredEmails.slice(
        (currentPage - 1) * emailsPerPage,
        currentPage * emailsPerPage
    )

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
            SetActiveEmail(-1)
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

    const handleActive = (index) => {
        console.log(index)
        setActiveBar(index)
        
    }





    const handleIdOfEnroll = async (idOfEnroll, state) => {
        if (loadingAction) return; // Prevent multiple simultaneous actions
        setLoadingAction(true);
        setOfEnroll(idOfEnroll);
        setActiveOrNot(state);
        try {
            await GlobalApi.editStateSub(idOfEnroll, state);
            await GlobalApi.publishEnrolls();
            await dataAdmin(); // Refresh data after successful action
        } catch (err) {
            console.error("Error updating enrollment state:", err);
        } finally {
            setLoadingAction(false);
        }
    };

    return (
        <div className="select-none rounded-2xl mt-8 bg-admin-imag bg-cover bg-center">
            <h2 className="font-arabicUI3 pt-10 text-white text-5xl p-5 gap-4 m-auto flex justify-center">
                <BsPatchCheckFill className=' scale-90'></BsPatchCheckFill>
                لوحة الادمن

            </h2>
            {password ? (
                <>
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
                                    className={`${activeEmail === index
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
                                    <h3 key={index} onClick={() => { handleActive(index) }}
                                        className={`${!item.isHeEnroll ? "  bg-red-500 text-white " : " bg-white  text-blue-950 "}   ${index != activeBar && "cursor-pointer"}  transition duration-500  text-right p-2  justify-end font-arabicUI3  text-4xl m-4 rounded-xl`}
                                    >
                                        <div className=' flex justify-end  transition-transform duration-500'>
                                            <span className="m-auto">{item.courseid.toUpperCase()}</span>
                                            <span className="m-auto">{item.dataofSub} </span>
                                        </div>

                                        {index == activeBar && (
                                            <div className='  transition-transform duration-500 '>

                                                {!item.isHeEnroll ? (
                                                    <span onClick={() => handleIdOfEnroll(item.idOfEnroll, true)} className=" cursor-pointer  transition-transform duration-500 m-4  mx-auto flex justify-center bg-blue-950 text-4xl text-white w-fit p-2 my-4 rounded-2xl  ">
                                                        تفعيل الكورس
                                                    </span>
                                                ) : (
                                                    <>
                                                        <div className=' transition duration-300' onClick={() => handleIdOfEnroll(item.idOfEnroll, false)}>
                                                            <span  onClick={()=>{setShowConfirmation(true)}} className=" flex cursor-pointer   transition-transform duration-500 m-4  mx-auto  justify-center bg-blue-950 text-3xl text-white w-fit p-2 my-4 rounded-2xl  ">
                                                                الغاء التفعيل | الكورس متفعل


                                                            </span>
                                                            {showConfirmation && <h4 className=' cursor-pointer  m-5 '> 
                                                                الغاء تفعيل الكورس لهذا المستخدم ؟</h4>}

                                                        </div>

                                                    </>

                                                )}





                                            </div>)}
                                    </h3>

                                ))
                            ) : (
                                <h4 className="text-white m-5 font-arabicUI3 text-6xl text-center leading-relaxed bg-green-400 rounded-xl">
                                    اختار ايميل من فضلك
                                </h4>
                            )}



                        </div>



                    </div>
                </>
            ) : (
                <div>
                    <input
                        value={adminPass}
                        onChange={(e) => handleInputPass(e)}
                        type="text"
                        placeholder="كلمه سر الادمن .."
                        className="text-left p-2 text-4xl w-2/5 flex justify-center mx-auto font-arabicUI3 rounded-xl m-5"
                    />
                </div>
            )}
        </div>
    );
};

export default Admin;
