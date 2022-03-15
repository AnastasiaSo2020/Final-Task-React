import '../CSS/main.css'

function Contact() {
  return (
    <div className='container'>
      <div className="row">
        <div className="column col-6 map-responsive mapAppearance">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.4475144119992!2d23.79545191643948!3d56.97539580450253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedd1bb137b525%3A0xffe6262ff023a081!2sil%20Sole!5e0!3m2!1sen!2slv!4v1646509615619!5m2!1sen!2slv"
            width="600" height="450" style={{ "border": "0" }} allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className="column col-6">
          <h4 className='contactSubTitleAppearance'>Contacts.</h4>
          <h5 className='contactAddressAppearance'>Address:</h5>
          <p className='contactInfoAppearance'>21 Papardelle Street, Jurmala, LV-1050, Latvia</p>
          <h5 className='contactAddressAppearance'>Email:</h5>
          <p className='contactInfoAppearance'>colouredpasta@gmail.com</p>
          <h5 className='contactAddressAppearance'>Phone:</h5>
          <p className='contactInfoAppearance'>+371 23456789</p>
        </div>
      </div>
    </div>
  )
}

export default Contact