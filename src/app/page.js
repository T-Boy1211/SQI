import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-stone-950">
        <div className="flex px-40 py-20">
          <div className="flex flex-col relative justify-items-start items-start mt-10">
            <h1 className="text-8xl font-semibold text-wrap text-white">
              Study to become a global talent
            </h1>
            <p className=" mt-6">
              Learn new tech skills using a world-class curriculum from top
              industry experts in an accredited institution.
            </p>
            <div className="mt-20">
              <Link
                href=""
                className="capitalize p-5 bg-[#001a6e] rounded-full "
              >
                start now
              </Link>
            </div>
          </div>
          <Image
            src="/images/header.png"
            alt="Student"
            width={600}
            height={200}
            className="mt-[-40]"
          />
        </div>
        <div className="px-30">
          <h2 className="text-4xl">Start here. Change the world</h2>
        </div>
        <div className="flex flex-3 space-x-15 px-30 py-10">
          <div className="gap-5">
            <Image
              src="/images/college.jpg"
              alt="collegues"
              width={600}
              height={600}
              className="opacity-20"
            />
            <h3 className="mt-10 text-2xl font-bold">
              Nation Diploma (ND)/National Innovative Diploma (NID)
            </h3>
            <p className="mt-5 text-gray-200">
              The National Diploma (ND) offered at SQI College of ICT is a 2
              year approved academic program of the National Board for Technical
              Education (NBTE) and approved by the Federal Ministry of Education
            </p>
            <div className="mt-5">
              <Link
                href={""}
                className="underline underline-offset-10 text-blue-200 text-lg"
              >
                learn more
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/prof.jpg"
              alt="collegues"
              width={600}
              height={600}
              className="opacity-20"
            />
            <h3 className="mt-10 text-2xl font-bold">
              Professional Diploma Certificate
            </h3>
            <p className="mt-5 text-gray-200">
              The Professional Certificate Program is 1 year practical training
              with wide range of edge-cutting IT certification courses offered
              in SQI College of ICT to people who want to advance their career.
            </p>
            <div className="mt-5">
              <Link
                href={""}
                className="underline underline-offset-10 text-blue-200 text-lg"
              >
                learn more
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/certificate.jpg"
              alt="collegues"
              width={600}
              height={600}
              className="opacity-20"
            />
            <h3 className="mt-10 text-2xl font-bold">Certificate Program</h3>
            <p className="mt-5 text-gray-200">
              The Certificate Program is a short-term training, 2 weeks to 6
              months with a wide range of edge-cutting IT certification courses
              offered in SQI College of ICT to people who want to advance their
              careers.
            </p>
            <div className="mt-5">
              <Link
                href={""}
                className="underline underline-offset-10 text-blue-200 text-lg"
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="flex space-y-5 space-x-15 px-30">
          <div>
            <h3 className="text-2xl">
              <strong>NATIONAL DIPLOMA COURSES</strong>
            </h3>
            <p className="mt-5">
              <strong>Duration: </strong>2 Years
            </p>
            <hr className="mt=2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Certificate: </strong>Both National Diploma and
              Professional Diploma.
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Skills: </strong>Academic Institution recognized skills
              and In-demand professional skills.
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Entry Requirements: </strong>120 min in JAMB, 5 Credits in
              O-Level and Your passion
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Required Hardware: </strong>(usually Laptop)
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Direct Entry: </strong>Yes (Any University)
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Transcript & Internship: </strong>Yes
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Access to Alumni Network and Opportunities: </strong>Yes
            </p>
          </div>
          <div>
            <h3 className="text-2xl">
              <strong>PROFESSIONAL DIPLOMA COURSES</strong>
            </h3>
            <p className="mt-5">
              <strong>Duration: </strong>1 Years
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Certificate: </strong>Professional Diploma.
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Skills: </strong>In-demand professional skills
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Entry Requirements: </strong>Your passion
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Required Hardware: </strong>(usually Laptop)
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Direct Entry: </strong>Partially Yes (LAUTECH ODL)
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Transcript & Internship: </strong>Yes
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Access to Alumni Network and Opportunities: </strong>Yes
            </p>
          </div>
          <div>
            <h3 className="text-2xl">
              <strong>CERTIFICATE PROGRAM</strong>
            </h3>
            <p className="mt-5">
              <strong>Duration: </strong>2 weeks to 10 months
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Certificate: </strong>Certificate Program
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Skills: </strong>In-demand professional skills
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Entry Requirements: </strong>Your passion
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Required Hardware: </strong>(usually Laptop)
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Direct Entry: </strong>No
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Transcript & Internship: </strong>No
            </p>
            <hr className="mt-2 text-[#0a639f]" />
            <div className="h-6"></div>
            <p>
              <strong>Access to Alumni Network and Opportunities: </strong>Yes
            </p>
          </div>
        </div>
        <div className="px-30">
          <h2 className="text-3xl font-bold capitalize">our top courses</h2>
          <p className="mt-5">Take a look at some f our popular courses</p>
          <div className="mt-5">
            <Link href={""} className="text-blue-600 underline">
              View all Courses
            </Link>
          </div>
        </div>
        <div className="flex justify-between space-x-15 space-y-20 px-30">
          <div className="space-y-15">
            <div className="bg-[#1b3039] rounded-3xl p-15 space-y-5 mt-15">
              <Image
                src="/images/software_engineering.webp"
                alt="Software Engineers"
                width={600}
                height={200}
              />
              <h3 className="text-3xl">Software Engineering</h3>
              <p>
                Software Engineering is one of the most in-demand jobs across
                the globe today.
              </p>
              <p>
                Software Engineers are also known as programmers, developers or
                coders. They are the ones behind all the apps and software you
                use today either on your phone or computer within your browser.
                Software such as banking apps, booking apps, mailing apps (e.g
                Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g
                Twitter, Facebook) and many more are created by software
                engineers.
              </p>
              <Link href={""}>learn more</Link>
            </div>
            <div className="bg-[#483b23] rounded-3xl p-15 space-y-5">
              <Image
                src="/images/uiux.jpg"
                alt="Product Design"
                width={`600`}
                height={200}
              />
              <h3 className="text-3xl">UI/UX – Product Design</h3>
              <p>
                More than ever before individuals and businesses are relying on
                digital products and services. From online meeting tools to
                finance, from e-commerce platforms to healthcare and food apps.
                Making an intuitive digital product design is even more import
                at this time as it determines the overall experience of the
                users.
              </p>
              <p>
                Here, you’ll build your product design skillset from the bottom
                design professionals. up with lessons, mentorship sessions, and
                career advice from our
              </p>
              <Link href={""}>learn more</Link>
            </div>
          </div>
          <div className="space-y-15 mt-[-30]">
            <div className="bg-[#3c3c0f] rounded-3xl p-15 space-y-5">
              <Image
                src="/images/data_analysis.jpg"
                alt="Data Science"
                width={600}
                height={200}
              />
              <h3 className="text-3xl">Data Science and Analysis</h3>
              <p>
                The eruption of data is transforming indiviuals and businesses.
                Companies either big or small are now expecting their business
                decisions to be based on data-led insight.
              </p>
              <p>
                Data specialists have a tremendous impact on business strategies
                and marketing tactics because everyone now depends on data to
                formulate improved strategies for the future of their companies.
              </p>
              <Link href={""}>learn more</Link>
            </div>
            <div className="bg-[#2a2e30] rounded-3xl p-15 space-y-5">
              <Image
                src="/images/digital_literacy.jpg"
                alt="Digital"
                width={600}
                height={200}
              />
              <h3 className="text-3xl">Digital Literacy</h3>
              <p>
                This course is designed to prepare you for success in a modern
                world full of computers—not only the traditional computers such
                as desktop and notebook PCs but also computers that you interact
                with in other places too, like your bank’s ATM or your
                employer’s computerized cash register. In this course, you will
                learn about the technologies that drive our computerized
                society, including the Internet and local area networks (LANs).
              </p>
              <p>
                Taking this course will help you become a digitally literate
                person—that is, someone who understands how computer technology
                fits into our modern society and knows how to navigate a variety
                of computing environments.
              </p>
              <Link href={""}>learn more</Link>
            </div>
          </div>
        </div>
        <div className="px-30">
          <h2 className="text-3xl font-bold py-15">
            Our alumni work at world-class companies around the world including
          </h2>
        </div>
        <div className="flex justify-between space-y-10 items-center px-30">
          <div>
            <Image
              src="/images/google.png"
              alt="Google"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/interswitch.png"
              alt="Iterswitch"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/Andela.png"
              alt="Andela"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/Microsoft.png"
              alt="Microsoft"
              width={200}
              height={100}
            />
          </div>
        </div>
        <div className="flex justify-between space-y-10 py-15 items-center px-30">
          <div>
            <Image
              src="/images/Paystack.png"
              alt="Paystack"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/brewery.png"
              alt="Brewery"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/wema_bank.png"
              alt="Wema-Bank"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/clan-logo.png"
              alt="creditclan"
              width={200}
              height={100}
            />
          </div>
        </div>
        <div className="flex justify-between items-center  px-30">
          <div>
            <Image
              src="/images/edozzier.png"
              alt="edozzier"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/moneymie.png"
              alt="moneymie"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/Nigerian_Army.png"
              alt="Nigerian_Army"
              width={200}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/aella.png"
              alt="aella"
              width={200}
              height={100}
            />
          </div>
        </div>
        <div className="bg-[url(/images/dsc.jpg)] mt-20 py-20">
          <div className="flex flex-2 abolute space-x-5">
            <div className="w-500"></div>
            <div className="flex flex-col abslute">
              <h2>
                <span className="text-5xl font-bold">Take a Tour</span>
              </h2>
              <p className="mt-6">
                Our campus is a living centre for innovation and creativity for
                sustainability. We love showing students our campus and allowing
                them to see, hear and feel the excitement that comes with being
                part of the Central community which is an atmosphere that is
                open-minded, always exciting, and filled with academic
                excellence.
              </p>
              <div className="mt-10">
                <Link
                  href={""}
                  className="capitalize rounded-full bg-[#001a6e] p-5"
                >
                  apply now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 px-30">
          <div className="mt-6">
            <h2 className="p-6 text-5xl font-bold">Testimonials</h2>
            <p className="text-wrap-100">
              Read what our current students and alumni have to say about their
              SQI experience.
            </p>
          </div>
          <div className="flex flex-3 mt-20 items-center justify-between">
            <div>
              <div className="flex items-center justify-center">
                {/* <Image src="" alt="" width={20} height={10} /> */}
              </div>
              <div className="flex items-center">
                <span>SQI College of ICT IBADAN</span>
              </div>
              <div className="items-center flex">4.9</div>
              <div className="text-gray-500">Based on 84 reviews</div>
              <div className="text-gray-500 flex items-center">
                powered by <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </div>
              <div className="mt-8">
                <Link href={""} className="bg-blue-500 py-3 px-2 rounded-lg">
                  rewiew us on
                </Link>
              </div>
            </div>
            <div className="flex flex-2 space-x-7 text-wrap">
              <div className="bg-gray-50 p-3 w-100 flex flex-col">
                <div className="flex space-x-3">
                  <Image
                    src="/images/mr_seyi.png"
                    alt="Mr. seyi"
                    width={50}
                    height={5}
                  />
                  <div>
                    <Link href={""} className="text-blue-500">
                      Oluwaseyi Odekomaya
                    </Link>
                    <div className="text-gray-500">4 years ago</div>
                  </div>
                </div>
                <span className="mt-5 text-wrap text-gray-500">
                  I’ve compared other platforms to this one to be honest and
                  they don’t measure up. The platforms that give a comparable
                  level of the quality of skills cost a lot more and don’t even
                  offer a guarantee of access to real world project and
                  situations... The ones available at a cheaper price so to say
                  do not give a level of quality even close to it... Some
                  platforms charge a lot more and yet still falter in the
                  delivery of good contents... Another aspect that I noticed in
                  comparison is that instructors at SQI College of ICT are
                  actually interested in ensuring their students understand what
                  they are learning. They take joy in ensuring the students
                  comprehend and are able to apply what is being taught and
                  explain in the simplest ways possible to ensure maximum
                  comprehension.... I’m not sharing this because I have any
                  affiliation with SQI College of ICT, I’m doing so because it’s
                  simply the truth. If anyone else tries to make their research,
                  they will find out that it’s true too.
                </span>
              </div>
              <div className="bg-gray-50 p-3 w-100 flex flex-col">
                <div className="flex space-x-3">
                  <Image
                    src="/images/mr_seyi.png"
                    alt="Mr. seyi"
                    width={50}
                    height={5}
                  />
                  <div>
                    <Link href={""} className="text-blue-500">
                      Emmanuel Toluwanimi
                    </Link>
                    <div className="text-gray-500">4 years ago</div>
                  </div>
                </div>
                <span className="mt-5 text-gray-500">
                  SQI is one of the things I’m thankful for in my life. I’ve
                  spent six months in SQI and I can say it’s one of the best
                  moments in my life. The staffs are accommodating and very
                  excellent at their job. The tutors don’t just teach, they
                  mentor students. They make coding fun and understandable for
                  learners. I’m able to achieve a lot enrolling with them. I’ve
                  been able to build amazing web projects under their tutelage.
                  ENROLL WITH SQI AND YOU WILL BE PROUD YOU DID.
                </span>
              </div>
              <div className="bg-gray-50 p-3 w-100  flex flex-col">
                <div className="flex space-x-3">
                  <Image
                    src="/images/mr_seyi.png"
                    alt="Mr. seyi"
                    width={50}
                    height={5}
                  />
                  <div>
                    <Link href={""} className="text-blue-500">
                      Oladimeji Sodeeq
                    </Link>
                    <div className="text-gray-500">4 years ago</div>
                  </div>
                </div>
                <span className="mt-5 text-gray-500">
                  It’s an awesome place to learn. It has a serene environment,
                  the tutors are friendly and very explanatory. I really love
                  the place
                </span>
              </div>
              <div className="bg-gray-50 p-3 w-100  flex flex-col">
                <div className="flex space-x-3">
                  <Image
                    src="/images/mr_seyi.png"
                    alt="Mr. seyi"
                    width={50}
                    height={5}
                  />
                  <div>
                    <Link href={""} className="text-blue-500">
                      Cherish Ordia
                    </Link>
                    <div className="text-gray-500">4 years ago</div>
                  </div>
                </div>
                <span className="mt-5 text-gray-500">
                  It is a great place to learn. It is a condusive environment
                  filled with loving and patient teachers,a wonderful and
                  admirable manager and supportive and cheerful students. For
                  the past month have been here, it’s been great
                </span>
              </div>
              <div className="bg-gray-50 p-3 w-100  flex flex-col">
                <div className="flex space-x-3">
                  <Image
                    src="/images/mr_seyi.png"
                    alt="Mr. seyi"
                    width={50}
                    height={5}
                  />
                  <div>
                    <Link href={""} className="text-blue-500">
                      Omolola Omolabake
                    </Link>
                    <div className="text-gray-500">4 years ago</div>
                  </div>
                </div>
                <span className="mt-5 text-gray-500">
                  Thank u SQI for making me believe more in myself, thanks for
                  bringing out some qualities that I’ll never think of years to
                  come in my life. My heart is full of gratitude
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 px-30">
          <div className="flex space-x-70">
            <div>
              <h2 className="text-6xl font-bold">Why study at SQI?</h2>
            </div>
            <div className="flex justify-end items-end">
              <Image
                src="/images/download.svg"
                alt=""
                width={400}
                height={1500}
              />
            </div>
          </div>
          <div className="mt-[-500]">
            <div className="flex flex-2">
              <div className="w-90 space-x-5 p-5">
                <div>
                  <span></span>
                </div>
                <h3 className="text-2xl">Project Based Learning</h3>
                <p className="mt-6">
                  Our courses are practical, hands-on learning. Practice and
                  apply knowledge with real world projects that contribute
                  largely to your portfolio.
                </p>
              </div>
              <div className="w-90 space-x-5 p-5">
                <div>
                  <span></span>
                </div>
                <h3 className="text-2xl">Expert Instructors</h3>
                <p className="mt-6">
                  Get to interact with different mentors and draw from their
                  loads of experience.
                </p>
              </div>
            </div>
            <div className="flex flex-2">
              <div className="w-90 space-x-5 p-5">
                <div>
                  <span></span>
                </div>
                <h3 className="text-2xl">Physical & Virtual Class</h3>
                <p className="mt-6">
                  You can now choose physical class experience or online
                  classroom and learn from anywhere in the world.
                </p>
              </div>
              <div className="w-90 space-x-5 p-5">
                <div>
                  <span></span>
                </div>
                <h3 className="text-2xl">
                  Free access to our hub and community
                </h3>
                <p className="mt-6">
                  You will have access to our fully functional hub for
                  co-working and working on projects, assignments and even begin
                  a start-up.
                </p>
              </div>
            </div>
            <div className="flex flex-2">
              <div className="w-90 space-x-5 p-5">
                <div>
                  <span></span>
                </div>
                <h3 className="text-2xl">Certification</h3>
                <p className="mt-6">
                  Be certified by an accredited and globally recognized
                  institution. SQI got its accreditation in Sept 2021 from the
                  NBTE, Nigeria.
                </p>
              </div>
              <div className="w-90 space-x-5 p-5">
                <div>
                  <span></span>
                </div>
                <h3 className="text-2xl">Alumni Support</h3>
                <p className="mt-6">
                  Our students have access to alumni who currently work at top
                  tech organizations in the world such as Google, Microsoft,
                  Interswitch etc.working and working on projects, assignments
                  and even begin a start-up.
                </p>
              </div>
            </div>
            <div className="flex flex-2">
              <div className="w-90 space-x-5 p-5">
                <div>
                  <span></span>
                </div>
                <h3 className="text-2xl">Job Opportunity</h3>
                <p className="mt-6">
                  78.5% of our students found secure employment within three
                  months of graduation. Students leave from learning to getting
                  job roles
                </p>
              </div>
              <div className="w-90 space-x-5 p-5">
                <div>
                  <span></span>
                </div>
                <h3 className="text-2xl">Access to study materials</h3>
                <p className="mt-6">
                  Students have access to prerecorded videos and resources they
                  can make use of to further solidify their knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#07021e] mt-9 py-20">
          <div className="flex flex-2 justify-between px-30">
            <div className="space-y-3">
              <h4 className="font-bold text-lg">FAQ</h4>
              <h2 className="text-5xl font-bold">Frequently Asked Question</h2>
              <div className="mt-9">
                <Link
                  href={""}
                  className="underline underline-offset-16 text-lg font-bold text-yellow-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-170">
              <h5 className="text-yellow-500 mt-10 text-3xl">
                How do I get into the college
              </h5>
              <p className="mt-6">
                We currently have 3 modes of study at SQI College of ICT, the
                National Diploma, Professional Diploma Certificate, and Ordinary
                Professional Certificate Program. You can join us by applying
                through any of the modes of study.
              </p>
              <hr className="mt-3 text-yellow-500" />
              <h5 className="text-yellow-500 mt-10 text-3xl">
                How much is the tution?
              </h5>
              <hr className="mt-3 text-yellow-500" />
              <h5 className="text-yellow-500 mt-10 text-3xl">
                Are your classes physical or virtual
              </h5>
              <hr className="mt-3 text-yellow-500" />
              <h5 className="text-yellow-500 mt-10 text-3xl">
                Will I get a job after my training?
              </h5>
              <hr className="mt-3 text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="bg-[#000932] py-20">
          <div className="px-30">
            <h4 className="text-lg mb-3 font-bold">
              It’s time for you to take your tech career to the next level
            </h4>
            <h2 className="text-6xl font-bold mb-10">Ready to Get Started?</h2>
            <p>
              We provide and lead others in quality education, service,
              industry, and character as well as discipline.
            </p>
            <div className="mt-16">
              <Link
                href={""}
                className="mb-10 p-5 bg-[#001a6e] rounded-full capitalize"
              >
                join us today
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="px-30 pb-40 bg-[#171925]">
            <div className="flex justify-between py-20 flex-2">
              <div>
                <h2 className="text-4xl font-bold capitalize">latest news</h2>
              </div>
              <div>
                <Link href={""} className="p-5 bg-[#001a6e] rounded-full">
                  read more
                </Link>
              </div>
            </div>
            <div className="flex flex-3 space-x-15">
              <div className="space-y-5 bg-stone-800 rounded-lg w-600">
                <Image
                  src="/images/SQI.jpg"
                  alt="SQI"
                  width={400}
                  height={300}
                />
                <h5 className="text-lg font-bold px-3">
                  Students embrace new opportunities with matriculation at SQI
                  College of ICT
                </h5>
                <p className="px-3 text-[#f67975]">
                  <span>May 5, 2025</span>
                </p>
                <p className="text-gray-500 px-3">
                  SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held
                  its 6th Matriculation Ceremony for the 2024/2025 academic
                  session. The vibrant ceremony, held at the college’s main
                  auditorium, brought together dignitaries from the education
                  sector, traditional rulers,...
                </p>
              </div>
              <div className="space-y-5 bg-stone-800 rounded-lg w-600">
                <Image
                  src="/images/java_engineer.jpg"
                  alt="Java Engineer"
                  width={400}
                  height={300}
                />
                <h5 className="text-lg font-bold px-3">
                  Building the Next Army of Java Generals
                </h5>
                <p className="px-3 text-[#f67975]">
                  <span>Mar 21, 2025</span>
                </p>
                <p className="text-gray-500 px-3">
                  Moniepoint recently received significant seed funding,
                  enabling them to recruit a large number of Java developers at
                  unprecedented salaries (₦1.5m – ₦2.5m monthly). While this is
                  great news for those developers, it has left many financial
                  institutions—especially banks—with a shortage of capable Java
                  developers…
                </p>
              </div>
              <div className="space-y-5 bg-stone-800 rounded-lg w-600">
                <Image
                  src="/images/jamb.jpg"
                  alt="JAMB"
                  width={400}
                  height={300}
                />
                <h5 className="text-lg font-bold px-3">
                  JAMB subject combination for 2025 admission into SQI College
                  of ICT
                </h5>
                <p className="px-3 text-[#f67975]">
                  <span>Feb 18, 2025</span>
                </p>
                <p className="text-gray-500 px-3">
                  A common reason JAMB UTME candidates are denied admission is
                  the wrong combination of subjects. Our goal here is to help
                  you avoid this mistake. Specifically, this post highlights the
                  JAMB subject combinations for JAMB subject combination for
                  2025 admission into SQI..
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
