

import { agents } from "../../Settings/data";

export default function AgentsSection() {
    return (
        <div className="bg-gray-50 py-16">
            <section
                className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-fixed bg-center py-40"
                style={{
                    backgroundImage:
                        "url('https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/living-room-gbb61c6983_1920.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-950 opacity-50 z-0"></div>
                <div className="absolute top-0 left-0 bg-gray-50 w-full h-30" style={{ clipPath: `polygon(0 0, 100% 0%, 0% 100%)` }}></div>
                <div className="absolute bottom-0 right-0 bg-gray-50 w-full h-30" style={{ clipPath: ` polygon(100% 100%, 100% 0%, 0% 100%)` }}></div>
                <div className="text-white text-center space-y-4 z-1">
                    <h2 className=" text-md sm:text-2xl">
                        Looking to Buy a new property or Sell an existing one? <br /> RealHomes provides an easy solution!
                    </h2>
                    <div className="grid sm:flex justify-center gap-1 sm:gap-4 mt-4">

                        <a href="https://sample.realhomes.io/modern03/dashboard/" className="text-white p-2 sm:px-4 sm:py-3 bg-[var(--blue)]/70 rounded hover:shadow-2xl shadow-amber-50">Submit Property</a>

                        <a href="https://sample.realhomes.io/modern03/half-map-layout/" className="text-white p-2 sm:px-4 sm:py-3 bg-[var(--gray)]/70 rounded hover:shadow-2xl shadow-amber-50">Browse Properties</a>

                    </div>
                </div>

            </section>
            <div className="relative  w-full min-h-[500px] max-w-7xl mx-auto p-6  text-center">
                {/* Top Heading */}
                <span className="text-md  text-blue-400  mb-4">
                    Meet
                </span>
                <h2 className="text-3xl text-gray-900 mb-4">
                    Our Agents
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We have best team to help you find best deal
                </p>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {agents.map((agent, index) => (
                        <div
                            key={index}
                            className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition"
                        >
                            {/* Agent Image */}
                            <img
                                src={agent.image}
                                alt={agent.name}
                                className="w-26 h-26 object-cover mx-auto mt-5 rounded-full border-4 border-white shadow-lg"
                            />

                            {/* Agent Details */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                                <p className="text-sm text-gray-500 my-1">{agent.phone}</p>
                                <p className="text-sm text-gray-500 my-1">{agent.email}</p>
                                <p className="text-ms text-gray-500 my-1">{agent.propertyCount}</p>
                                <p className="text-gray-500 text-sm my-1">{agent.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
