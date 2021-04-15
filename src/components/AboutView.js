import Hero from './Hero'

const AboutView = () => {
    return(
      <>
        <Hero text="About us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor unde ad vero, animi a recusandae officia nam, laborum doloribus doloremque est magnam sunt facilis quos, neque saepe! Soluta, sunt id!
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default AboutView;