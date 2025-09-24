import type { FC } from "react";


const InquirySection: FC = () => {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center py-30"
            style={{
                backgroundImage:
                    "url('https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-vecislavas-popa-1571460.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-950 opacity-50"></div>
            <div className="absolute top-0 left-0 bg-gray-50 w-full h-30" style={{ clipPath: `polygon(0 0, 100% 0%, 0% 100%)` }}></div>
            <div className="absolute bottom-0 right-0 bg-gray-50 w-full h-30" style={{ clipPath: ` polygon(100% 100%, 100% 0%, 0% 100%)` }}></div>

            <div className="relative w-full max-w-5xl z-10 container mx-auto px-4 justify-center items-center grid  lg:grid-cols-2 gap-10">
                {/* Left Side Form */}
                <div className="bg-white rounded shadow-lg p-4 md:p-6 w-full max-w-lg">
                    <form className="space-y-4">
                        <select className="w-full border-1 border-gray-200 text-sm text-gray-500 rounded px-3 py-2">
                            <option>Mr</option>
                            <option>Ms</option>
                            <option>Mrs</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Mobile"
                            className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Country"
                                className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="State"
                            className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="How did you find us?"
                                className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                placeholder="Agent"
                                className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                            />
                        </div>

                        <textarea
                            placeholder="Message"
                            className="w-full border-1 border-gray-200 text-sm rounded px-3 py-2"
                            rows={3}
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-[var(--blue)] hover:bg-blue-950 text-white font-semibold py-2 rounded transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Side Content */}
                <div className="text-white space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Manage All your Company's <br /> relationships and interactions
                        through integrated CRM
                    </h2>
                    <p className="text-gray-200">
                        New contact will be{" "}
                        <span className="underline text-blue-300">
                            Auto Generated
                        </span>{" "}
                        on Inquiry Form's Submission.
                    </p>
                    <p className="text-gray-200">
                        History of{" "}
                        <span className="underline text-blue-300">
                            Communication
                        </span>{" "}
                        can also be{" "}
                        <span className="underline text-blue-300">
                            Maintained
                        </span>{" "}
                        on Enquiry level.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InquirySection;
