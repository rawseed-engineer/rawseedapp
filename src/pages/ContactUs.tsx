const ContactUs = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Us</h1>
      <p>
        Get in touch with us using the form below or our contact information.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <div>
          <h3>Contact Form</h3>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{ padding: "0.5rem", border: "1px solid #ccc" }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{ padding: "0.5rem", border: "1px solid #ccc" }}
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              style={{ padding: "0.5rem", border: "1px solid #ccc" }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "0.5rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p>
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Email:</strong> info@my-domain.com
          </p>
          <p>
            <strong>Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
