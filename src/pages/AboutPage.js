const AboutPage = () => {
    return (
        <section className="relative py-36 bg-black overflow-hidden">
            <img
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                src=""
                alt=""
            />
            {/* src image */}
            <div className="relative z-10 container px-4 mx-auto">
                <div className="mb-8 p-12 max-w-xl mx-auto border border-gray-800 rounded-4xl">
                    <h2
                        className="mb-3 text-5xl text-white text-center font-semibold leading-tight"
                        contenteditable="true"
                    >
                        Login
                    </h2>
                    <p className="mb-11 pb-11 font-medium text-center text-lg text-gray-400 leading-normal border-b border-gray-900">
                        Login to your account
                    </p>
                </div>
                <p className="text-white text-center font-medium">
                    <span>Don’t have an account?</span>
                    <a className="text-indigo-600 hover:text-indigo-700">
                        Create free account
                    </a>
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
