import React from 'react'
import { Link } from 'gatsby'
import Title from '../Global/Title'

export default () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Earum natus nemo, quidem voluptates in est vitae reiciendis 
              dolorem eum libero distinctio inventore praesentium et vero 
              quisquam perferendis sapiente ex consectetur quibusdam quis 
              dolores aliquid placeat. Illo inventore tempora, deleniti, qui 
              quae tenetur ipsam a dolore dicta, non cumque velit et.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
