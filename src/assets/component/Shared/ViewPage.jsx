import { MdArrowBack } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";

const ViewPage = () => {
    const { id } = useParams(); // URL theke ID ber kora
    const books = [
        {
            id: "1",
            title: "The Great Gatsby",
            image: "https://res.cloudinary.com/dhlgk023u/image/upload/v1739419818/bg-9c3b2201-5f26-40b9-9890-4db7a56bde87_pqbwbn.png",
            copies: "5",
            publishedDate: "1925",
            description: "A novel about the American dream and its disillusionment."
        },
        {
            id: "2",
            title: "To Kill a Mockingbird",
            image: "https://res.cloudinary.com/dhlgk023u/image/upload/v1739246667/Group_1000004213_txfpvv.png",
            copies: "7",
            publishedDate: "1960",
            description: "A story about racial injustice in the American South."
        }
    ];

    // ID er upor vitti kore matching book ta ber kora
    const book = books.find((b) => b.id === id);

    // Jodi kono book na pai (Invalid ID hole)
    if (!book) {
        return (
            <div className="text-center text-red-500 text-xl font-bold mt-10">
                <p>Book Not Found!</p>
                <NavLink to="/" className="text-[#8CAB91] underline">Go Back</NavLink>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center gap-4 mb-4">
                <NavLink to="/oderDetails">
                    <div className="text-white bg-[#8CAB91] px-4 py-2 hover:bg-[#7a9c82] transition">
                        <MdArrowBack className="text-xl" />
                    </div>
                </NavLink>
                <h1 className="text-2xl font-bold">{book.title}</h1>
            </div>
            <div className="flex items-center justify-between mx-52">
                {/* Book Image */}
                <div className="w-[711px] h-[750px] bg-[#E2D3C0] flex items-center justify-center">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover rounded-md" />
                </div>

                {/* Order Information */}
                <div className="w-[378px] h-[750px] bg-white px-5 pt-28">
                    <h1 className="text-[18px] font-[500]">Order Information</h1>
                    <div className="flex items-center justify-between py-5">
                        <h1>Number of copies:</h1>
                        <h1>{book.copies}</h1>
                    </div>
                    <h2 className="mt-4 text-gray-700">{book.description}</h2>

                    <button className="text-[#FAF1E6] text-[16px] w-full bg-[#8CAB91] py-3 uppercase rounded-full mt-5">
                        Confirm Order
                    </button>
                    <button className="bg-[#FAF1E6] text-[16px] w-full text-[#8CAB91] py-3 uppercase border border-[#8CAB91] rounded-full mt-3">
                        Cancel Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewPage;
