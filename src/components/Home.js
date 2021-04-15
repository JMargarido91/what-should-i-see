import Hero from './Hero'

const Home = () => {
    return (
      <div>
        <Hero text="What should I see?"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque iste ut, pariatur quaerat officiis vitae aperiam doloremque sed a? Cumque ut fugiat nihil similique veniam aperiam architecto sint dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Home;