import "../../styles/contact.css"

const Contact = () => {

  return <div className='contact'>
    <div className="section-center">
      <h3>Join our newsletter and get 20% off</h3>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati culpa quod fuga eveniet error. Necessitatibus ducimus vero repellat sint ad?
        </p>
        <form className="contact-form"
          action="https://formspree.io/f/xrgrrbnk"
          method="POST"
        >
          <input type="email" className="form-input" placeholder="enter email" name="_replyto" />
          <button type="submit" className="submit-btn">
            subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
}


export default Contact
