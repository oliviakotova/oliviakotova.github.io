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
    <div className="col-span-3 h-auto w-full rounded-xl shadow-md lg:p-4">
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col py-2">
            <label htmlFor="name" className="py-2 text-sm uppercase">
              Name <span className="text-[#cb6d50]">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="flex rounded-lg border-2 border-gray-300 p-3"
            />
            {errors.name && (
              <p className="text-sm text-[#cb6d50]">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="email" className="py-2 text-sm uppercase">
              Email <span className="text-[#cb6d50]">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email")}
              className="flex rounded-lg border-2 border-gray-300 p-3"
            />
            {errors.email && (
              <p className="text-sm text-[#cb6d50]">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="message" className="py-2 text-sm uppercase">
              Message <span className="text-[#cb6d50]">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              {...register("message")}
              className="rounded-lg border-2 border-gray-300 p-3"
              rows="10"
            />
            {errors.message && (
              <p className="text-sm text-[#cb6d50]">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#4382e8] to-[#1373c7] p-4 uppercase text-gray-100 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 dark:from-[#cb6d50] dark:to-[#5d3105] dark:shadow-[#353d49]"
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
          <p className="mt-4 text-green-500">{status.success}</p>
        )}
        {status?.error && <p className="mt-4 text-[#cb6d50]">{status.error}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
