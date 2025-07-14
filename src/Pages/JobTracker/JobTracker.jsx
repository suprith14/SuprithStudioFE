import React, { useState } from 'react'
import Header from '../../Components/Header'

const JobTracker = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const data = [
        {
            id: 1,
            jobTitle: "Software Engineer",
            company: "Tech Company",
            dateApplied: "2023-10-01",
            appliedVia: "Naukri",
            status: "Applied",
            link: "https://www.google.com",
        },
        {
            id: 2,
            jobTitle: "Frontend Developer",
            company: "Innovative Labs",
            dateApplied: "2023-11-12",
            appliedVia: "LinkedIn",
            status: "Interview Scheduled",
            link: "https://innovativelabs.com/careers",
        },
        {
            id: 3,
            jobTitle: "Backend Developer",
            company: "CodeWorks",
            dateApplied: "2023-09-20",
            appliedVia: "Company Website",
            status: "Rejected",
            link: "https://codeworks.io/jobs",
        },
        {
            id: 4,
            jobTitle: "Full Stack Developer",
            company: "DevHub",
            dateApplied: "2023-08-30",
            appliedVia: "Indeed",
            status: "Pending",
            link: "https://devhub.io/careers",
        },
        {
            id: 5,
            jobTitle: "React Developer",
            company: "NextTech",
            dateApplied: "2023-10-15",
            appliedVia: "Referral",
            status: "Applied",
            link: "https://nexttech.com/jobs",
        },
        {
            id: 6,
            jobTitle: "Mobile App Developer",
            company: "Appify",
            dateApplied: "2023-07-01",
            appliedVia: "LinkedIn",
            status: "Rejected",
            link: "https://appify.com/careers",
        },
        {
            id: 7,
            jobTitle: "UI/UX Designer",
            company: "DesignSpark",
            dateApplied: "2023-11-03",
            appliedVia: "Naukri",
            status: "Interview Scheduled",
            link: "https://designspark.in/careers",
        },
        {
            id: 8,
            jobTitle: "Product Manager",
            company: "ProdStack",
            dateApplied: "2023-10-28",
            appliedVia: "Company Website",
            status: "Applied",
            link: "https://prodstack.com/jobs",
        },
        {
            id: 9,
            jobTitle: "DevOps Engineer",
            company: "CloudNet",
            dateApplied: "2023-09-15",
            appliedVia: "Indeed",
            status: "Pending",
            link: "https://cloudnet.dev/jobs",
        },
        {
            id: 10,
            jobTitle: "Software Tester",
            company: "BugSquash",
            dateApplied: "2023-08-25",
            appliedVia: "Referral",
            status: "Rejected",
            link: "https://bugsquash.com/careers",
        },
        {
            id: 11,
            jobTitle: "QA Engineer",
            company: "TestLab",
            dateApplied: "2023-07-30",
            appliedVia: "Naukri",
            status: "Interview Scheduled",
            link: "https://testlab.com/jobs",
        },
        {
            id: 12,
            jobTitle: "Data Analyst",
            company: "DataViz",
            dateApplied: "2023-06-10",
            appliedVia: "LinkedIn",
            status: "Applied",
            link: "https://dataviz.io/careers",
        },
        {
            id: 13,
            jobTitle: "ML Engineer",
            company: "BrainWave AI",
            dateApplied: "2023-10-05",
            appliedVia: "Indeed",
            status: "Applied",
            link: "https://brainwaveai.com/jobs",
        },
        {
            id: 14,
            jobTitle: "Cloud Engineer",
            company: "CloudNova",
            dateApplied: "2023-11-07",
            appliedVia: "Referral",
            status: "Pending",
            link: "https://cloudnova.tech/careers",
        },
        {
            id: 15,
            jobTitle: "Scrum Master",
            company: "AgileForce",
            dateApplied: "2023-08-12",
            appliedVia: "Company Website",
            status: "Interview Scheduled",
            link: "https://agileforce.com/jobs",
        },
        {
            id: 16,
            jobTitle: "Business Analyst",
            company: "BizLogic",
            dateApplied: "2023-09-21",
            appliedVia: "LinkedIn",
            status: "Rejected",
            link: "https://bizlogic.io/careers",
        },
        {
            id: 17,
            jobTitle: "Graphic Designer",
            company: "Creatix",
            dateApplied: "2023-10-17",
            appliedVia: "Indeed",
            status: "Applied",
            link: "https://creatix.in/jobs",
        },
        {
            id: 18,
            jobTitle: "System Administrator",
            company: "InfraTech",
            dateApplied: "2023-07-04",
            appliedVia: "Referral",
            status: "Pending",
            link: "https://infratech.io/careers",
        },
        {
            id: 19,
            jobTitle: "Java Developer",
            company: "CodeCrafters",
            dateApplied: "2023-09-09",
            appliedVia: "Naukri",
            status: "Applied",
            link: "https://codecrafters.dev/jobs",
        },
        {
            id: 20,
            jobTitle: "React Native Developer",
            company: "MobilityHub",
            dateApplied: "2023-10-29",
            appliedVia: "LinkedIn",
            status: "Interview Scheduled",
            link: "https://mobilityhub.io/careers",
        },
        {
            id: 21,
            jobTitle: "Security Analyst",
            company: "SecureStack",
            dateApplied: "2023-06-20",
            appliedVia: "Company Website",
            status: "Rejected",
            link: "https://securestack.com/jobs",
        },
        {
            id: 22,
            jobTitle: "AI Engineer",
            company: "DeepCore",
            dateApplied: "2023-08-18",
            appliedVia: "Referral",
            status: "Applied",
            link: "https://deepcore.ai/careers",
        },
        {
            id: 23,
            jobTitle: "Technical Writer",
            company: "DocuPro",
            dateApplied: "2023-09-13",
            appliedVia: "Indeed",
            status: "Pending",
            link: "https://docupro.io/jobs",
        },
        {
            id: 24,
            jobTitle: "Site Reliability Engineer",
            company: "ReliX",
            dateApplied: "2023-11-05",
            appliedVia: "LinkedIn",
            status: "Interview Scheduled",
            link: "https://relix.io/careers",
        },
        {
            id: 25,
            jobTitle: "Support Engineer",
            company: "TechAssist",
            dateApplied: "2023-07-21",
            appliedVia: "Naukri",
            status: "Rejected",
            link: "https://techassist.in/jobs",
        },
        {
            id: 26,
            jobTitle: "Angular Developer",
            company: "Frontify",
            dateApplied: "2023-10-08",
            appliedVia: "Referral",
            status: "Applied",
            link: "https://frontify.com/careers",
        },
        {
            id: 27,
            jobTitle: "Salesforce Developer",
            company: "CRMWorks",
            dateApplied: "2023-08-26",
            appliedVia: "LinkedIn",
            status: "Pending",
            link: "https://crmworks.dev/jobs",
        },
        {
            id: 28,
            jobTitle: "Python Developer",
            company: "PyGen",
            dateApplied: "2023-09-18",
            appliedVia: "Indeed",
            status: "Applied",
            link: "https://pygen.io/careers",
        },
        {
            id: 29,
            jobTitle: "Blockchain Engineer",
            company: "ChainForge",
            dateApplied: "2023-11-01",
            appliedVia: "Company Website",
            status: "Interview Scheduled",
            link: "https://chainforge.xyz/jobs",
        },
        {
            id: 30,
            jobTitle: "WordPress Developer",
            company: "WebNest",
            dateApplied: "2023-10-20",
            appliedVia: "Naukri",
            status: "Applied",
            link: "https://webnest.com/careers",
        },
    ];

    const [jobApplications, setJobApplications] = useState(data);
    const [editData, setEditData] = useState(null);
    const [statusFilter, setStatusFilter] = useState('');
    const [clonedata, setClonedata] = useState(data);


    function filterByStatus(status) {
        if (!status || status === "null") {
            console.log("No filter applied, showing all data");
            setClonedata(jobApplications); // Show all
            return;
        }
        const filtered = jobApplications.filter(job => job.status === status);
        console.log("Filtered by status:", filtered);
        setClonedata(filtered);
    }

    function filterByApplied(appliedVia) {
        if (!appliedVia || appliedVia === "null") {
            setClonedata(jobApplications); // Show all if no valid filter
            return;
        }
        const filtered = jobApplications.filter(job => job.appliedVia === appliedVia);
        setClonedata(filtered);
    }


    const handleEdit = (job) => {
        setEditData(job);
        setIsPopupOpen(true);
    };

    const handleSave = () => {
        console.log("editData", editData);
        setJobApplications((prev) =>
            prev.map((item) => (item.id === editData.id ? editData : item))
        );
        setClonedata((prev) =>
            prev.map((item) => (item.id === editData.id ? editData : item))
        );
        setIsPopupOpen(false);
    };





    return (
        <div>
            <Header />
            <div className="flex justify-center items-center text-2xl font-bold bg-green-800 mb-4 h-20">
                Job Tracker
            </div>
            <div className='flex'>
                <div className=" flex text-2xl p-3 bg-blue-500 w-32 text-center justify-center m-2 rounded ">Add </div>

            </div>


            <table className="w-full text-center border-collapse border border-gray-300">
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Job Title</th>
                    <th className="border border-gray-300 px-4 py-2">Company</th>
                    <th className="border border-gray-300 px-4 py-2">Date Applied</th>
                    <th className="border border-gray-300 py-2">Applied Via
                        <select
                            className="w-28 ml-4 text-center bg-blue-500"
                            value={statusFilter}
                            onChange={(e) => { setStatusFilter(e.target.value); }}
                            onClick={() => (filterByApplied(statusFilter))}
                        >
                            <option value="null">Show All</option>
                            <option value="Naukri">Naukri</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Company Website">Company Website</option>
                            <option value="Indeed">Indeed</option>
                        </select>




                    </th>
                    <th className="border border-gray-300 py-2">Status
                        <select
                            className="w-28 ml-4 text-center bg-blue-500"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            onClick={() => (filterByStatus(statusFilter))}
                        >
                            <option value="null">Show All</option>
                            <option value="Applied">Applied</option>
                            <option value="Interview Scheduled">Interview Scheduled</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Link</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
                <tbody>
                    {/* Example row */}
                    {clonedata.map((job) => (
                        <tr key={job.id}>
                            <td className="border border-gray-300 px-4 py-2">{job.jobTitle}</td>
                            <td className="border border-gray-300 px-4 py-2">{job.company}</td>
                            <td className="border border-gray-300 px-4 py-2">{job.dateApplied}</td>
                            <td className="border border-gray-300 px-4 py-2">{job.appliedVia}</td>
                            <td className="border border-gray-300 px-4 py-2">{job.status}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <a
                                    href={job.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    {job.link}
                                </a>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    onClick={() => handleEdit(job)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}



                </tbody>
            </table>


            {/* //Popup */}

            {isPopupOpen && editData && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Edit Job Application</h2>

                        {/* Controlled form inputs */}
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title"
                            className="border p-2 w-full mb-2"
                            value={editData.jobTitle}
                            onChange={(e) =>
                                setEditData({ ...editData, jobTitle: e.target.value })
                            }
                        />

                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            className="border p-2 w-full mb-2"
                            value={editData.company}
                            onChange={(e) =>
                                setEditData({ ...editData, company: e.target.value })
                            }
                        />

                        <input
                            type="date"
                            name="dateApplied"
                            className="border p-2 w-full mb-2"
                            value={editData.dateApplied}
                            onChange={(e) =>
                                setEditData({ ...editData, dateApplied: e.target.value })
                            }
                        />

                        <select
                            name="appliedVia"
                            className="border p-2 w-full mb-2"
                            value={editData.appliedVia}
                            onChange={(e) =>
                                setEditData({ ...editData, appliedVia: e.target.value })
                            }
                        >
                            <option value="">Select Via</option>
                            <option value="Naukri">Naukri</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Company Website">Company Career</option>
                            <option value="Others">Others</option>
                        </select>

                        <select
                            name="status"
                            className="border p-2 w-full mb-2"
                            value={editData.status}
                            onChange={(e) =>
                                setEditData({ ...editData, status: e.target.value })
                            }
                        >
                            <option value="">Select Status</option>
                            <option value="Applied">Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Offer">Offer</option>
                            <option value="Rejected">Rejected</option>
                        </select>

                        <input
                            type="url"
                            name="link"
                            placeholder="Link"
                            className="border p-2 w-full mb-4"
                            value={editData.link}
                            onChange={(e) =>
                                setEditData({ ...editData, link: e.target.value })
                            }
                        />

                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="bg-gray-300 px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}





        </div>
    )
}

export default JobTracker
