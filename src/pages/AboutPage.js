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
            About this project
          </h2>
          <p className="mb-11 pb-11 font-medium text-center text-lg text-gray-400 leading-normal border-b border-gray-900">
            There are a variety of games to choose from, and we provide you with
            all the information you need to know before choosing one that's
            right for you! we create this website using react.js on the front
            end and firebase as the backend to store our data. As this is our
            final project, we primarily worked on learning the fundamentals of
            front-end development and back-end development. In the future, we
            will be working on enhancing the application's UX by creating new
            user interfaces and adding additional features.
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
