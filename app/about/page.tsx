import Image from "next/image";


const experiences = [
    {
        year: "Summer 2026",
        title: "AI Solutions Engineer Intern",
        company: "BPN Solutions",
        description:
            "• Building custom AI powered internal systems and solutions for multiple small companies",
    },

    {
        year: "Summer 2025",
        title: "Software Engineer Intern",
        company: "Sonablate Corp",
        description:
            "• Migrated the protected health information (PHI) browser user interface from Java Swing to JavaFX, adding features like encryption, " +
            "anonymization, and USB export of patient records, while aligning the interface with the main application's look and feel\n" +
            "• Accelerated the adoption of the updated PHI browser from version 6.9 to version 6.8.2\n" +
            "• Utilized ANT build automation to streamline software compilation, testing, and deployment\n" +
            "• Collaborated with the head of Information Technology to incorporate picture archiving and communication system (PACS) server functions " +
            "to the PHI browser's export feature",
    },

    {
        year: "Summers 2022-2024",
        title: "Junior Counselor Team Leader",
        company: "Diabetes Youth Foundation of Indiana Camp Until a Cure",
        description:
            "• Led a team of six other junior counselors to clean and maintain camp facilities\n" +
            "• Assisted campers aged seven to fifteen in understanding, managing, and improving their personal care and management of their Type 1 " +
            "Diabetes",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white px-6 pt-24 pb-12">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <h1 className="text-5xl font-bold mb-10">
                    About Me
                </h1>

                {/* Main layout: text left, image right */}
                <div className="flex flex-col md:flex-row gap-10">

                    {/* LEFT SIDE */}
                    <div className="flex-1">

                        {/* Contact info */}
                        <div className="text-gray-300 mb-6 space-y-1">
                            <p>
                                <span className="font-bold">Email:</span> wschmid3@nd.edu
                            </p>

                            <p>
                                <span className="font-bold">Phone:</span> 317-478-3556
                            </p>

                            <p>
                                <span className="font-bold">Location:</span> Indianapolis, IN
                            </p>

                            <p>
                                <span className="font-bold">Education:</span> University of Notre Dame Class of 2028
                            </p>
                            <p className="ml-8">
                                <span className="font-bold">Major:</span> Computer Science |  <span className={"font-bold"}>  Minor: </span>
                                Engineering Corporate Practice
                            </p>
                        </div>

                        {/* Blurb */}
                        <p className="text-gray-400 leading-relaxed">
                            Hello! My name is William Schmidt, I am originally from Indianapolis, Indiana, and am a Computer Science major at
                            the University of Notre Dame with a minor in Engineering Corporate Practice. I have been interested in computers
                            my entire life, and love to build projects that are useful to me using my knowledge! I am extremely interested in AI
                            and its applications, machine learning, computer networks, as well as developing and working on new projects.
                        </p>

                    </div>

                    {/* RIGHT SIDE (IMAGE) */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/about_image.JPG"
                            alt="About Me"
                            width={320}
                            height={320}
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>


                {/* EXPERIENCE SECTION */}
                <section className="mt-5">

                    <h2 className="text-5xl font-bold mb-12">
                        Experience
                    </h2>

                    <div className="space-y-12">

                        {experiences.map((experience, index) => (
                            <div
                                key={index}
                                className="relative border-l border-white/20 pl-6"
                            >

                                {/* Timeline dot */}
                                <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-1" />

                                {/* Year */}
                                <p className="text-sm text-gray-500 mb-2">
                                    {experience.year}
                                </p>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold mb-0.5">
                                    {experience.title}
                                </h3>

                                {/*Company Name */}
                                <h5 className="ml-8 text-1xl font-semibold mb-0.5">
                                    {experience.company}
                                </h5>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed whitespace-pre-line ml-16">
                                    {experience.description}
                                </p>

                            </div>
                        ))}

                    </div>
                </section>
            </div>
        </main>
    );
}