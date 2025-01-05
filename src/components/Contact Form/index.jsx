import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hdqf4rp', // Replace with your Service ID
        'template_kozplnd', // Replace with your Template ID
        form.current,
        'DuyWI6VNio5PHaYLJ' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <div className="py-[30px] px-[20%] bg-slate-300">
      <div className="bg-[#9A692F]">
        <div className="text-white font-[600] text-[32px] p-5">Send us your query</div>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col">
          <input type="text" name="sender_name" required placeholder="Name" className="my-3 p-3" />

          <input type="email" name="from_name" required placeholder="Email" className="my-3 p-3" />

          <input
            type="text"
            name="contact_number"
            required
            placeholder="Contact Number"
            className="my-3 p-3"
          />

          <input
            type="text"
            name="country_name"
            required
            placeholder="Country Name"
            className="my-3 p-3"
          />

          <textarea name="message" required placeholder="Message" className="my-3 p-3" />

          <button type="submit" className="bg-[#53f653] text-white font-[600] p-2 text-[18px]">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
