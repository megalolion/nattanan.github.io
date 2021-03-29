import React from "react"
import "./Content.css"
function Content() {
  return (
    <div className="container">
      <section className="content-con">
          <div className="content-l">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              alt=""
            ></img>
          </div>
          <div className="content-r">
              <h2>Some title</h2>
              <p>
              Lorem ex irure Lorem commodo aliquip labore in. Reprehenderit aliquip id ullamco ut exercitation exercitation aliqua ipsum sunt reprehenderit sunt. Deserunt ipsum tempor qui cillum
              </p>
          </div>
      </section>

      <section className="content-con">
          
          <div className="content-r">
              <h2>Some title</h2>
              <p>
              Lorem ex irure Lorem commodo aliquip labore in. Reprehenderit aliquip id ullamco ut exercitation exercitation aliqua ipsum sunt reprehenderit sunt. Deserunt ipsum tempor qui cillum
              </p>
          </div>
          <div className="content-l">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              alt=""
            ></img>
          </div>
      </section>
      
      <section className="content-con">
          <div className="content-l">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              alt=""
            ></img>
          </div>
          <div className="content-r">
              <h2>Some title</h2>
              <p>
              Lorem ex irure Lorem commodo aliquip labore in. Reprehenderit aliquip id ullamco ut exercitation exercitation aliqua ipsum sunt reprehenderit sunt. Deserunt ipsum tempor qui cillum
              </p>
          </div>
      </section>
    </div>
  );
}

export default Content;
