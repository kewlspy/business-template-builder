
'use client';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-md max-w-xl mx-auto mt-6">
      <input {...register("name")} placeholder="Your Name" className="block w-full mb-2 p-2 border" />
      <input {...register("email")} placeholder="Email" className="block w-full mb-2 p-2 border" />
      <textarea {...register("message")} placeholder="Message" className="block w-full mb-2 p-2 border" />
      <label className="flex items-center gap-2 mb-4">
        <input type="checkbox" required /> I agree to the privacy policy
      </label>
      <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded">Send</button>
    </form>
  );
}
