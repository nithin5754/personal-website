import Heading from "@/components/Heading";


const pages = () => {
  return (
    <section className=" py-10 px-6 md:px-12">
    <div className="max-w-4xl mx-auto">
    <Heading className="mb-4">About Me</Heading>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400"> MERN Stack Developer</span> with over 1.5 years of hands-on experience building scalable, high-performance web applications using technologies like JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and MongoDB.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        My journey has been shaped by real-world projects, including <span className="font-semibold">Jersyman</span>, an e-commerce platform for sports jerseys that enhanced my problem-solving skills and deepened my passion for creating seamless online experiences.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Another major milestone was <span className="font-semibold">Developers Market Zone</span>, a dynamic platform that blends social media interactions with a dual marketplace system — enabling users to auction items or sell directly. It pushed me to think creatively and build intuitive, real-time features.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        I also launched platforms like <span className="font-semibold">Phaseex.live</span> — a real-time project management tool powered by AI, and <span className="font-semibold">CodeHire</span> — a freelance marketplace with secure payments and user roles.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Looking ahead, I’m excited to apply my skills to meaningful, groundbreaking projects. This is just the beginning — I’m here to innovate, collaborate, and build tech that makes an impact.
      </p>
    </div>
  </section>
  );
};
export default pages;
