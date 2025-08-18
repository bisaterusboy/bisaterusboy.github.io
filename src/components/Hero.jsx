// About.js
import React from "react";

const Hero = () => {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <>
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h2 className="fw-light">Album example</h2>
                <p className="lead text-muted">
                  Something short and leading about the collection below—its
                  contents, the creator, etc. Make it short and sweet, but not
                  too short so folks don't simply skip over it entirely.
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2">
                    Main call to action
                  </a>
                  <a href="#" className="btn btn-secondary my-2">
                    Secondary action
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section
            className="py-5 text-center"
            style={{ background: 'var(--bg-secondary)' }}
          >
            <div className="row py-lg-5">
              <div className="container">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h2 className="fw-light">Album example</h2>
                  <p className="lead text-muted">
                    Something short and leading about the collection below—its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don't simply skip over it entirely.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary my-2">
                      Main call to action
                    </a>
                    <a href="#" className="btn btn-secondary my-2">
                      Secondary action
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h2 className="fw-light">Album example</h2>
                <p className="lead text-muted">
                  Something short and leading about the collection below—its
                  contents, the creator, etc. Make it short and sweet, but not
                  too short so folks don't simply skip over it entirely.
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2">
                    Main call to action
                  </a>
                  <a href="#" className="btn btn-secondary my-2">
                    Secondary action
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="album py-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {[...Array(3)].map((_, index) => (
                  <div className="col" key={index}>
                    <div className="card card-custom shadow-sm">
                      <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="var(--gray-500)" />
                        <text x="50%" y="50%" fill="var(--text-light)" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small className="text-muted">5 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </>
    </main>
  );
};

export default Hero;
