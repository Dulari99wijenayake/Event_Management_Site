import React from "react";

const AboutUs = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

            <section className="mb-10">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Welcome to our platform! We are passionate about creating meaningful
                    experiences through events that connect people, spark creativity, and
                    inspire growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to make event discovery and participation simple,
                    engaging, and rewarding. Whether you are looking to attend workshops,
                    conferences, or community gatherings, we provide a space where
                    opportunities meet people.
                </p>
            </section>

            <section className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-white rounded-2xl shadow">
                    <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
                    <p className="text-gray-600">
                        To empower individuals and communities by connecting them with
                        transformative events and experiences.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow">
                    <h2 className="text-xl font-semibold mb-3">Our Values</h2>
                    <p className="text-gray-600">
                        We believe in inclusivity, innovation, and collaboration as the
                        foundation for every event we support.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow">
                    <h2 className="text-xl font-semibold mb-3">Our Promise</h2>
                    <p className="text-gray-600">
                        To deliver reliable, user-friendly tools that make attending and
                        organizing events stress-free.
                    </p>
                </div>
            </section>

            <section className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Join Us on This Journey</h2>
                <p className="text-gray-700 mb-6">
                    Together, we can create moments that matter. Explore our events and
                    become part of a growing community.
                </p>
                <a
                    href="/events"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Explore Events
                </a>
            </section>
        </div>
    );
};

export default AboutUs;
