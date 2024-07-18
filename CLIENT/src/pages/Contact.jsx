import { useState } from "react";
// import { useAuth } from "../store/auth";

const defaultcontact={
  username:"",
  email:"",
  message:""
};

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

// const [userData,setUserData] = useState({
//   username:"",
//   email:"",
//   message:""
// });
  // const {user}=useAuth();


  // if (userData && user) {
  //   setContact({
  //     username: localStorage.getItem("username"),
  //     email: user.email,
  //     message: "",
  //   });

  //   setUserData(false);
  // }

      // username: localStorage.getItem("username"),



  // if(localStorage.getItem("username")!=""){
  //   setContact({
  //     ...contact,
  //     username:localStorage?.getItem("username"),
  //     email:localStorage?.getItem("email")
  //   });
  // }



  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit =async (e) => {
    e.preventDefault();


    // if(localStorage.getItem("username")){
    //   console.log(localStorage.getItem("username"));
    //   console.log(localStorage.getItem("email"));

    //   setUserData({
    //     ...userData,
    //     username:localStorage.getItem("username"),
    //     email:localStorage.getItem("email"),
    //   });
    //   console.log(userData);
    // }


    try {
      const response= await fetch("http://localhost:5000/api/form/contact",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          username:localStorage.getItem("username"),
          email:localStorage.getItem("email"),
          message:contact.message
        }),
      });
      //  console.log(localStorage.getItem("username"));
      //  console.log(localStorage.getItem("email"));
      //  console.log(contact.message);
      if(response.ok){
        setContact(defaultcontact);
        alert("message sent successfully");
      }

    } catch (error) {
      
    }
  };

//  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="setting">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={localStorage?.getItem("username")}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={localStorage?.getItem("email")}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.541193009686!2d72.53870307509473!3d23.113885529109883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1713351054910!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

// export default Home;
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.13666942735!2d72.54067879678955!3d23.128679200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832f45125167%3A0x876cb1cb23c25bdb!2sNirma%20University!5e0!3m2!1sen!2sin!4v1709957194104!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>