import ContactUsForm from "../components/core/ContactPage/ContactUsForm"

const ContactPage = () => {
  return (
    <div className="w-10/12 m-auto mt-10">
      <div>
        <h1 className="font-philospher font-bold text-5xl text-center">
          Contact Us
        </h1>
        <p className="text-center w-1/2 m-auto">
          "Reach out to us easily. Contact our friendly team for any inquiries, reservations, or feedback."
        </p>
      </div>
      <ContactUsForm />
    </div>
  )
}

export default ContactPage