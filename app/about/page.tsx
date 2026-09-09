import type { Metadata } from "next";
import Image from "next/image";
import { experience, leadership } from "@/lib/resume-data";

export const metadata: Metadata = {
    title: "About — William Schmidt",
};

const timelineEntries = [
    ...experience.map(e => ({
        year: e.year,
        title: e.title,
        company: e.company,
        bullets: e.bullets,
    })),
    ...leadership
        .filter(e => e.company === "Diabetes Youth Foundation of Indiana")
        .map(e => ({
            year: e.year,
            title: e.role,
            company: e.company,
            bullets: e.bullets,
        })),
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
                            <p className="ml-8">
                                <span className="font-bold">GPA:</span> 3.88 / 4.00
                            </p>
                        </div>

                        {/* Blurb */}
                        <p className="text-gray-400 leading-relaxed">
                            I&apos;m a Computer Science student at Notre Dame from Indianapolis, with two software engineering internships
                            behind me: shipping full-stack products as the sole engineer at BPN Solutions, and hardening HIPAA-regulated
                            patient-record software at Sonablate. I&apos;m drawn to work where AI and machine learning meet real systems, which
                            is why I now do medical image analysis research and built a training platform around my own glucose and fitness
                            data. Outside of code I DJ campus gigs on speakers I built from scratch.
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

                    <div className="space-y-12 border-l border-white/20">

                        {timelineEntries.map((entry, index) => (
                            <div
                                key={index}
                                className="relative pl-6"
                            >

                                {/* Timeline dot */}
                                <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-1" />

                                {/* Year */}
                                <p className="text-sm text-gray-500 mb-2">
                                    {entry.year}
                                </p>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold mb-0.5">
                                    {entry.title}
                                </h3>

                                {/* Company Name */}
                                <h5 className="ml-8 text-1xl font-semibold mb-0.5">
                                    {entry.company}
                                </h5>

                                {/* Bullets */}
                                <ul className="text-gray-400 leading-relaxed ml-16 space-y-1 mt-1">
                                    {entry.bullets.map((bullet, i) => (
                                        <li key={i}>• {bullet}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}

                    </div>
                </section>
            </div>
        </main>
    );
}
