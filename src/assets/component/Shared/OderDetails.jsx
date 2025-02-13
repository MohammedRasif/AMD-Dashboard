import jsPDF from 'jspdf';
import { MdArrowBack } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const OrderDetails = () => {
    const user = {
        name: "Mohammed Rasif",
        img: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png",
        email: "mahmud@gmail.com",
        contactNumber: "+919355574544",
        dob: "17 Dec, 2024",
        subscriptionType: "Premium subscription",
        address: "68/ Joker Vila, Gotham City",
        collection: [
            {
                id: "1",
                title: "My Life",
                orderDate: "05/12/2024",
                image:
                    "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739423923/istockphoto-1401314099-612x612_d1j4xi.jpg",
            },
            {
                id: "2",
                title: "My Life",
                orderDate: "05/12/2024",
                image:
                    "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739423923/images_oupakv.jpg",
            },
        ],
    };

    const downloadPDF = () => {
        const doc = new jsPDF();

        // Add title
        doc.setFontSize(18);
        doc.text('Order Details', 14, 20);

        // Add user details
        doc.setFontSize(12);
        doc.text(`Name: ${user.name}`, 14, 30);
        doc.text(`Email: ${user.email}`, 14, 40);
        doc.text(`Contact No: ${user.contactNumber}`, 14, 50);
        doc.text(`Date of Birth: ${user.dob}`, 14, 60);
        doc.text(`Subscription Type: ${user.subscriptionType}`, 14, 70);
        doc.text(`Address: ${user.address}`, 14, 80);

        // Add book collection details
        doc.text('Dindiya’s Book Collection:', 14, 100);
        user.collection.forEach((book, index) => {
            const startY = 110 + (index * 40);  // Adjust the Y position for each book
            doc.text(`Title: ${book.title}`, 14, startY);
            doc.text(`Order Date: ${book.orderDate}`, 14, startY + 10);
            doc.addImage(book.image, 'JPEG', 14, startY + 20, 50, 50);  // Add book image
        });

        // Save PDF
        doc.save(`${user.name}_Order_Details.pdf`);
    };

    return (
        <div>
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-4">
                <NavLink to="/odermanagement">
                    <div className="text-white bg-[#8CAB91]  px-4 py-2 hover:bg-[#7a9c82] transition">
                        <MdArrowBack className="text-xl" />
                    </div>
                </NavLink>
                <h1 className="text-2xl font-bold">Order List</h1>
            </div>

            {/* User Details Card */}
            <div className="bg-white rounded-lg p-4 container mx-auto w-1/2 shadow-md">

                {/* User Header */}
                <div className="flex flex-col items-center justify-center bg-[#8CAB91] py-10">
                    <img src={user.img} className="w-28 h-28 rounded-full" alt="User" />
                    <h1 className="mt-2 text-[#FAF1E6] text-xl font-semibold">{user.name}</h1>
                    <p className="mt-2 text-[#FAF1E6] text-[12px] font-normal">User</p>
                </div>

                {/* User Info */}
                <div className="space-y-4 overflow-y-auto max-h-[500px] mt-5 mb-7">
                    {[
                        { label: "Name", value: user.name },
                        { label: "Email", value: user.email },
                        { label: "Contact No", value: user.contactNumber },
                        { label: "Date of Birth", value: user.dob },
                        { label: "Subscription Type", value: user.subscriptionType },
                        { label: "Address", value: user.address }
                    ].map((info, index) => (
                        <div key={index}>
                            <label className="block text-base font-semibold text-[#364636]">
                                {info.label}
                            </label>
                            <p className="mt-1 text-[#555555] text-[12px] font-normal">
                                {info.value}
                            </p>
                        </div>
                    ))}

                    {/* Book Collection Section */}
                    <div>
                        <label className="block text-base font-semibold text-[#364636]">
                            Dindiya’s Book Collection
                        </label>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            {user.collection.map((book) => (
                                <div key={book.id} className="p-2 h-[164.89px] text-center">
                                    <img src={book.image} alt={book.title} className="w-full h-full rounded-md object-cover" />
                                    <p className="text-xs font-semibold text-[#364636] text-left mt-2">
                                        Order Date: <span className="text-[#707070]">{book.orderDate}</span>
                                    </p>
                                    <div className="mt-2 flex flex-col gap-1">
                                        {/* Pass ID as a URL Parameter */}
                                        <NavLink to={`/viewPage/${book.id}`}>
                                            <button className="bg-[#8CAB91] text-[#FAF1E6] hover:text-[#8CAB91] px-3 py-1 rounded-full w-full text-xs hover:bg-[#FAF1E6] transition cursor-pointer">
                                                VIEW BOOK
                                            </button>
                                        </NavLink>
                                        <button
                                            onClick={downloadPDF}
                                            className="border border-[#8CAB91] text-[#8CAB91] font-bold px-3 py-1 rounded-full text-xs hover:bg-[#8CAB91] hover:text-white transition cursor-pointer">
                                            PDF DOWNLOAD
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;
