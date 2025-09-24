import React from 'react';

const partners = [
    { name: 'Adobe Homes', logo: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/one.png' },
    { name: 'AA Builders', logo: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/two.png' },
    { name: 'The Capital', logo: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/three.png' },
    { name: 'Ironwood Homes', logo: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/four.png' },
    { name: 'Ironwood Apartments', logo: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/five.png' },
];

export default function Partners() {
    return (
        <section className="relative bg-gray-50  px-4 md:px-16 py-30">
            <div className="absolute top-0 left-0 bg-gray-50 w-full h-20" style={{ clipPath: `polygon(0 0, 100% 0%, 0% 100%)` }}></div>
            <div className="absolute bottom-0 right-0 bg-[var(--blue)] w-full h-20" style={{ clipPath: ` polygon(100% 100%, 100% 0%, 0% 100%)` }}></div>

            <div className="text-center mb-10">
                {/* Top Heading */}
                <span className="text-md  text-blue-400  mb-4">
                    Our
                </span>
                <h2 className="text-3xl text-gray-900 mb-4">
                    Partners
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We honoured to have these amazing partners.
                </p>

            </div>

            <div className="w-full max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-center">
                {partners.map((partner, index) => (
                    <div key={index} className="flex justify-center">
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}