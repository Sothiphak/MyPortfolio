// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-200">
      <Head>
        <title>Sopheap Sothiphak - Portfolio</title>
        <meta name="description" content="Portfolio of Sopheap Sothiphak" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Sopheap Sothiphak</h1>
            <nav className="flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600">Experience</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600">Education</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section id="about" className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="col-span-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Full-Stack Developer</h2>
            <p className="text-xl text-gray-600 mb-6">
              A highly motivated student with over 2 years of experience in website development. 
              Skilled in full-stack development, team collaboration, and project management.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600">
              <p><span className="font-medium">Email:</span> sopheapsothiphak@gmail.com</p>
              <p><span className="font-medium">Phone:</span> +067346917</p>
              <p><span className="font-medium">Location:</span> Teuk Thla, Sensok, Phnom Penh</p>
            </div>
          </div>
          <div className="mx-auto w-48 h-48 relative overflow-hidden rounded-full border-4 border-white-500">
            <Image 
              src="/phak.jpg" 
              alt="Profile photo" 
              layout="fill" 
              objectFit="cover"
              priority
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-blue-500 inline-block">Work Experience</h2>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold text-blue-600">Development Intern</h3>
              <p className="text-gray-600">Glean Asia</p>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Developed scalable web applications using Liferay CMS</li>
              <li>Led a team of 4 developers to successfully deliver projects on time</li>
              <li>Maintained and improved system performance</li>
            </ul>
          </div>
          
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-semibold text-blue-600">Full-stack Developer</h3>
              <p className="text-gray-600">ITC Mockexam System</p>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Designed database and developed RestAPI</li>
              <li>Developed Frontend using NextJS</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-blue-500 inline-block">Education</h2>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-1">Engineering in Computer Science</h3>
            <p className="text-lg text-gray-700">Institute of Technology of Cambodia, 2022 - Present</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-blue-500 inline-block">Skills</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Programming Languages</th>
                  <th className="py-3 px-4 text-left">Frameworks</th>
                  <th className="py-3 px-4 text-left">Tools</th>
                </tr>
              </thead>
              <tbody className="text-pink-500">
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">JavaScript</td>
                  <td className="py-3 px-4">NextJS, Node.js</td>
                  <td className="py-3 px-4">Git, Docker, Nginx</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">PHP</td>
                  <td className="py-3 px-4">Laravel</td>
                  <td className="py-3 px-4">VS Code, Linux experiences</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Languages</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>English: Intermediate</li>
              <li>Khmer: Mother tongue</li>
              <li>French: Basic</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-blue-500 inline-block">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Mockexam System</h3>
              <p className="text-gray-700">
                Developed a mock exam system for ITC students to practice for their final exams.
                The system is built using NextJS and NestJS.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Portfolio Website</h3>
              <p className="text-gray-700">
                Designed and developed a personal portfolio website to showcase my skills and projects.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-blue-500 inline-block">Contact Me</h2>
          
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-700 font-medium mb-2">Full Name:</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <p className="mt-6 text-gray-600 text-center">Reference available upon request</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">© 2025 Sopheap Sothiphak. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">GitHub</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}