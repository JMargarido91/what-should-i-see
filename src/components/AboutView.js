import Hero from './Hero'

const AboutView = () => {
    return(
      <>
        <Hero text="About us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5 ">
              <div className="text-center about-title">Hi! I'm João</div>
              <div className="my-5">
                <div className="about-segment-title my-2">Who am I?</div>    
                <div className="lead about-text">  

                  <p>
                  8 years into a Hotel Management career, my original area of education, I now intend to align my management experience with my newly found, but long anticipated, passion for programming.
                  </p>

                  <p>
                  Using a variety of resources such as literature, online resources as Udemy, Codecademy, CodeGym and many others always accompanied by mentoring professionals from the IT area, I have acquired in-depth knowledge of some of the main IT skills. I am currently looking for a first job in this area.
                  </p>

                  <p>
                    
                  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                  </a>
                  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Button with data-target
                  </button>
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }

  export default AboutView;