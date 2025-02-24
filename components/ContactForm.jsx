import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

// Define the schema for form validation using Zod
const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long."),
  email: z
    .string()
    .email("Please enter a valid email address.") // This ensures email format validation
    .min(1, "Email is required."), // Ensures email field is not empty
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long.")
    .max(1000, "Message must not exceed 1000 characters."),
});

const ContactForm = () => {
  const [status, setStatus] = useState(null); // To track form submission status
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setStatus({ loading: true });
    try {
      // Simulating a request to the backend using axios
      await axios.post("/api/contact", data);
      setStatus({ success: "Message sent successfully!" });
      reset(); // Reset form after success
    } catch (error) {
      setStatus({ error: "Oops! Something went wrong. Please try again." });
    } finally {
      setStatus((prevStatus) => ({ ...prevStatus, loading: false }));
    }
  };

  return (
    <div className="col-span-3 w-full h-auto shadow-md rounded-xl lg:p-4">
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col py-2">
            <label htmlFor="name" className="uppercase text-sm py-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="email" className="uppercase text-sm py-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email")}
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="message" className="uppercase text-sm py-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              {...register("message")}
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-4 text-gray-100 mt-4 cursor-pointer hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 dark:shadow-[#353d49] rounded-xl uppercase bg-gradient-to-r from-[#4382e8] to-[#1373c7]"
            disabled={status?.loading}
          >
            {status?.loading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              "SEND MESSAGE"
            )}
          </button>
        </form>

        {status?.success && (
          <p className="text-green-500 mt-4">{status.success}</p>
        )}
        {status?.error && <p className="text-red-500 mt-4">{status.error}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
