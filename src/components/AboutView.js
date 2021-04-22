import Hero from './Hero'


const AboutView = () => {
    return (
      <>
        <Hero text="About us" />
        <div className="about-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 my-5 ">
                <div className="text-center about-title">Hi! I'm João</div>
                <div className="container my-5">
                  <div className="row lead about-text">
                    <button
                      className="btn btn-dark my-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWho"
                      aria-expanded="false"
                      aria-controls="collapseWho"
                    >
                      <div className="about-segment-title my-2">Who am I?</div>
                    </button>
                    <div className="collapse" id="collapseWho">
                      <p>
                        8 years into a Hotel Management career, my original area
                        of education, I now intend to align my management
                        experience with my newly found, but long anticipated,
                        passion for programming.
                      </p>

                      <p>
                        Using a variety of resources such as literature, online
                        resources as Udemy, Codecademy, CodeGym and many others
                        always accompanied by mentoring professionals from the
                        IT area, I have acquired in-depth knowledge of some of
                        the main IT skills. I am currently looking for a first
                        job in this area.
                      </p>
                    </div>

                    <button
                      className="btn btn-dark my-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSkills"
                      aria-expanded="false"
                      aria-controls="collapseSkills"
                    >
                      <div className="about-segment-title my-2">Skills</div>
                    </button>
                    <div className="collapse" id="collapseSkills">
                      <div className="row ">
                        <div className="col-md-8 col-sm-12 mb-4"><h4>Programming Languages</h4>
                          <div className="container my-3">
                            <li>Java</li>
                            <li>Python</li>
                            <li>Javascript and Typescript</li>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mb-4"><h4>Frameworks</h4>
                          <div className="container my-3">
                            <li>Spring</li>
                            <li>Hibernate</li>
                            <li>Angular</li>
                            <li>Reacto</li>
                            <li>Django</li>
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-12 mb-4"><h4>SQL</h4>
                          <div className="container my-3">
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mb-4"><h4>Other</h4>
                          <div className="container my-3">  
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Git</li>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-dark my-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseContacts"
                      aria-expanded="false"
                      aria-controls="collapseContacts"
                    >
                      <div className="about-segment-title my-2">Contacts</div>
                    </button>
                    <div className="collapse" id="collapseContacts">
                      <p>
                        For any inquiries email me at{" "}
                        <a
                          className="lead about-text"
                          href="mailto:joaopedromargarido@gmail.com"
                        >
                          joaopedromargarido@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default AboutView;