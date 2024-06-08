import React from 'react';

const About = () => {
  const aboutStyles = {
    container: {
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      maxWidth: '800px',
      margin: '2rem auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
      textAlign: 'center',
      color: '#ffcc00',
    },
    description: {
      fontSize: '1.25rem',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={aboutStyles.container}>
      <h2 style={aboutStyles.title}>About Empire_Resume</h2>
      <p style={aboutStyles.description}>
        Welcome to <strong>Empire_Resume</strong>, your ultimate solution for crafting professional resumes with ease. Whether you're a recent graduate entering the workforce or a seasoned professional seeking new opportunities, Empire_Resume empowers you to create standout resumes that make a lasting impression.
      </p>
      <p style={aboutStyles.description}>
        Our platform simplifies the resume-building process, guiding you through each step to ensure you capture all essential details. Input your personal information, educational background, work experience, skills, projects, and any additional information you wish to showcase.
      </p>
      <p style={aboutStyles.description}>
        With Empire_Resume, customization is key. Choose from a variety of templates and design options to tailor your resume to your unique style and industry. Whether you prefer a sleek and modern design or a classic and elegant layout, Empire_Resume offers templates to suit your preferences.
      </p>
      <p style={aboutStyles.description}>
        Once you've filled in your details, Empire_Resume generates a professional-grade resume in PDF format instantly. No more worrying about formatting or layout - our platform handles it all, leaving you with a polished resume ready to impress potential employers.
      </p>
      <p style={aboutStyles.description}>
        Join the Empire_Resume community today and take the first step towards your dream career. Whether you're applying for a new job, updating your resume, or exploring new opportunities, Empire_Resume is your trusted partner for creating impactful resumes that showcase your talents and accomplishments.
      </p>
    </div>
  );
  
};

export default About;
