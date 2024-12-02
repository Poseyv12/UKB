import Image from 'next/image';

interface FlowStep {
    title: string;
    description: string;
    image: string;
    alt: string;
    isReversed?: boolean;
}

const steps: FlowStep[] = [
    {
        title: "Initial Consultation",
        description: "We begin with a detailed discussion of your vision, requirements, and budget. Our experts will assess your space and provide professional recommendations tailored to your needs.",
        image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Renovation consultation meeting"
    },
    {
        title: "Design & Planning",
        description: "Our team creates detailed plans and 3D renderings of your project. We'll work closely with you to refine the design until it perfectly matches your vision.",
        image: "https://images.unsplash.com/photo-1608303588026-884930af2559?q=80&w=2803&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Design and planning process",
        isReversed: true
    },
    {
        title: "Material Selection",
        description: "Choose from our curated selection of high-quality materials. We'll guide you through options that match your style and budget while ensuring durability.",
        image: "https://plus.unsplash.com/premium_photo-1682145934698-5922e583b462?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxpbnRlcmlvciUyMGRlc2lnbmVyfGVufDB8fDB8fHww",
        alt: "Material selection process"
    },
    {
        title: "Construction Phase",
        description: "Our skilled craftsmen execute the project with precision and care. We maintain clear communication throughout and adhere to strict quality standards.",
        image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Construction in progress",
        isReversed: true
    },
    {
        title: "Final Inspection",
        description: "We conduct a thorough inspection to ensure everything meets our high standards. You'll do a final walkthrough to confirm your complete satisfaction.",
        image: "https://images.unsplash.com/photo-1722605090433-41d1183a792d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpdGNoZW4lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
        alt: "Final inspection process"
    }
];

const UserFlow = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Renovation Process</h2>
                
                <div className="space-y-20">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${step.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </span>
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="flex-1 relative h-[300px] w-full">
                                <Image
                                    src={step.image}
                                    alt={step.alt}
                                    fill
                                    className="object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserFlow; 