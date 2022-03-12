import '../Components/main.css'

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <img className="image-about" src="/about-images/image-team.jpg" />
        </div>
        <div className="col-7 ImageDescriptionAppearance">
          <h2 className='ImagesubTitleAppearance'>Our Team.</h2>
          <p>My grandmother Lidia, whom I called Nitta, was a phenomenal pasta maker.  Every gathering and party, it was her routine to celebrate with homemade macaroni.
            This gave peace and joy to us children, who used to play with the dough and flour that ended up getting everywhere! We spent so much time trying and trying to get the hole out of those macaroni:
            it was a bet! Today there is no macaroni that comes out without a hole: the pupil has passed the teacher! And who knows if from heaven she squeezes my face with pride, with her contagious laugh, or if she still isnt satisfied!!</p>
          <em><p>Making pasta at home is a great way to try to eat in a healthy and genuine way. You only need very few ingredients and preparing it is very simple.</p></em>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img className="image-about" src="/about-images/image-mission.jpg" />
        </div>
        <div className="col-8 ImageDescriptionAppearance">
          <h2 className='ImagesubTitleAppearance'>Our Mission.</h2>
          <p>Obviously, its the time and effort put into it, that you just dont get from a shop-bought box from the supermarket.
            But for me, its also about bringing something special and exciting to the little community where we live. There are so many interesting people from all corners of the world living here,
            with a real hunger for new experiences and good food! Its rewarding to be a part of creating something that goes beyond what you d expect from small-town country life.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img className="image-about" src="/about-images/image-approach.jpg" />
        </div>
        <div className="col-9 ImageDescriptionAppearance">
          <h2 className='ImagesubTitleAppearance'>Our Approach.</h2>
          <p>An alumna of the storied Chez Panisse and an Académie Brillat-Savarin Medal of Merit recipient at the Culinary Institute of America, graduating top of her class.
            Her passion is something a bit more simple and rustic: the freshest pasta made with the most local and seasonal ingredients possible.
            The focus is stone ground organic wheat from farmers and millers on the Northeast while combining provisions from Italian producers all over Italy. </p>
        </div>
      </div>
    </div>
  );
}

export default About