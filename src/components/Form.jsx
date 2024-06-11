import React, { useState } from "react";
import Education from "./Education";
import Experiences from "./Experience";
import PersonalDetails from "./personalDetails";
import Project from "./projects";
import Extras from "./Extras";
import axios from 'axios';
import { saveAs } from 'file-saver';
import Success from "./success";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_des: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
  });
  const [page, setPage] = useState(0);

  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };

  const handleDownloadPdf = async () => {
    try {
      // Step 1: Create the PDF
      const createResponse = await axios.post("https://resume-builder-backend-7.onrender.com/create-pdf", formData);
      
      // Check if PDF creation was successful
      if (createResponse.status === 200) {
        // Step 2: Fetch the created PDF
        const fetchResponse = await axios.get("https://resume-builder-backend-7.onrender.com/fetch-pdf", {
          responseType: "blob",
        });
  
        if (fetchResponse.status === 200) {
          // Create a Blob from the PDF response
          const pdfBlob = new Blob([fetchResponse.data], { type: "application/pdf" });
          
          // Save the PDF file
          saveAs(pdfBlob, "Resume.pdf");
  
          // Indicate success
          setSuccess(true);
        } else {
          console.error('Failed to fetch the PDF, status:', fetchResponse.status);
          setSuccess(false);
        }
      } else {
        console.error('Failed to create the PDF, status:', createResponse.status);
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error during PDF creation or fetching:', error);
      setSuccess(false);
    }
  };
  

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="text-center my-5">{FormTitle[page]}</h1>
      </div>

      <div>{PageDisplay()}</div>
      <div className="d-flex justify-content-center gap-3 py-5">
        <button
          className="btn btn-dark"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>

        <button
          className="btn btn-primary"
          onClick={() => {
            if (page === FormTitle.length - 1) {
              handleDownloadPdf();
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
        </button>
      </div>
      {success && <Success />}
    </div>
  );
};

export default Form;
