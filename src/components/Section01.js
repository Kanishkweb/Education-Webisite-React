import React from 'react';
import EducationImg from '../assets/1.png';

const Section01 = () => {
  return (
    <section className="container mx-auto mt-8 flex flex-wrap justify-between px-4">
      <div className="image w-full sm:w-1/2">
        <img className="w-full" src={EducationImg} alt="EducationImage" />
      </div>
      <div className="w-full sm:w-1/2 py-20">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4">Empower Your Education</h2>
          <p className="text-lg mb-4">
            Our education website is dedicated to helping you unlock your potential and achieve
            your goals. Whether you're a student, a professional, or simply curious to learn
            something new, we have a wide range of courses and resources to suit your needs.
          </p>
          <p className="text-lg mb-4">
            With expert instructors and engaging content, you'll embark on a journey of knowledge
            and growth. Our platform provides a flexible and convenient way to learn, allowing
            you to study at your own pace, anytime and anywhere.
          </p>
          <p className="text-lg">
            Join our community of learners today and take the first step towards a brighter and
            more fulfilling future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section01;
