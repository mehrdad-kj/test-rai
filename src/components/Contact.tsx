import { useState } from "react";
import { Input, TextareaAutosize } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmissionStatus("");

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setIsSubmitting(false);
      setSubmissionStatus("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://getform.io/f/c51fe967-d434-46fd-942f-5b7827d83406",
        {
          method: "POST",
          body: new FormData(e.target as HTMLFormElement),
        }
      );

      if (response.ok) {
        setSubmissionStatus("Thank you! Your message has been sent.");
      } else {
        setSubmissionStatus("There was an issue sending your message.");
      }
    } catch (error) {
      setSubmissionStatus("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      window.alert(submissionStatus);
    }
  };

  return (
    <div
      id="CONTACT"
      className="w-full h-full bg-sky-950 flex justify-center items-center pt-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffff2e] text-[#C3CEDA]">
              Contact
            </p>
            <p className="text-[#C3CEDA] py-4">
              Submit the form below or shoot me an email -
              mehrdadk.jourabi@gmail.com
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="text-[#C3CEDA]">
              Name
            </label>
            <Input
              id="name"
              className="bg-[#ccd6f6] p-2 w-full"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-[#C3CEDA]">
              Email
            </label>
            <Input
              id="email"
              className="bg-[#ccd6f6] p-2 w-full"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-[#C3CEDA]">
              Message
            </label>
            <TextareaAutosize
              id="message"
              className="bg-[#ccd6f6] p-2 w-full"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              maxRows={10}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white border-2 hover:bg-[#ffff2e] hover:border-[#ffff2e] hover:text-black px-4 py-3 my-8 mx-auto flex items-center"
          >
            {isSubmitting ? "Submitting..." : "Let's Collaborate"}
          </button>

          {submissionStatus && (
            <p className="text-center mt-4 text-lg text-[#C3CEDA]">
              {submissionStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
