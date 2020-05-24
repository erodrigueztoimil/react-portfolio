import React from "react";

const Work = () => {
  return (
    <div id="work" className="col-12">
      <div className="content-text row">
        <h1>Projects</h1>
        <p>
          Here are some of my highlighted projects, to see what I'm currently
          working on or all of my projects and contributions feel free to visit
          my GitHub profile.
        </p>
        <a
          className="styled-button"
          href="https://github.com/erodrigueztoimil"
          target="_blank"
        >
          GITHUB
        </a>
      </div>

      <div className="projects">
        <div className="single-project col-12">
          <div className="project-image row">
            <img
              src="https://ucarecdn.com/0f97f3a2-0a34-4ef5-9f7c-d1061bc8fbc1/ScreenShot20200416at12503PMmin.png"
              alt=""
            />
          </div>

          <div className="project-desc row">
            <div className="col-lg-8 col-sm-12">
              <h1>Gig Match</h1>
              <p>
                This application is intended to target local communities where
                people can search for gigs to perform and others can post gigs
                that need done.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <a
                className="styled-button"
                href="https://gig-match.herokuapp.com/"
                target="_blank"
              >
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="single-project col-12">
          <div className="project-image row">
            <img
              src="https://ucarecdn.com/750e4752-ce41-4e79-93c5-4a6ce1681fd7/rsz_forecastinterface.png"
              alt=""
            />
          </div>

          <div className="project-desc row">
            <div className="col-lg-8 col-sm-12">
              <h1>Weather App</h1>
              <p>
                JavaScript app that uses the OpenWeather API to get a five day
                weather forecast using any chosen city.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <a
                className="styled-button"
                href="https://erodrigueztoimil.github.io/forecast/"
                target="_blank"
              >
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="single-project col-12">
          <div className="project-image row">
            <img
              src="https://ucarecdn.com/955c6a42-726c-4aad-a00d-9d6e4dfc6b3f/interfacemin.png"
              alt=""
            />
          </div>

          <div className="project-desc row">
            <div className="col-lg-8 col-sm-12">
              <h1>Healthy Bites</h1>
              <p>
                JavaScript app that uses the Spoonacular Api to generate a
                unique, custom healthy recipes list for each user.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <a
                className="styled-button"
                href="https://healthy-bites.herokuapp.com/index.html"
                target="_blank"
              >
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="single-project col-12">
          <div className="project-image row">
            <img
              src="https://ucarecdn.com/75c492ec-f37c-4d82-9687-403c22badb10/futura.jpg"
              alt=""
            />
          </div>

          <div className="project-desc row">
            <div className="col-lg-8 col-sm-12">
              <h1>Futura Logistics</h1>
              <p>
                Custom website template built from scratch using HTML, SASS and
                JQuery.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <a
                className="styled-button"
                href="https://futuralogistics.netlify.com/"
                target="_blank"
              >
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="single-project col-12">
          <div className="project-image row">
            <img
              src="https://ucarecdn.com/49ca6774-eb64-473d-9a95-b68f50ab8489/gtaccountax.png"
              alt=""
            />
          </div>

          <div className="project-desc row">
            <div className="col-lg-8 col-sm-12">
              <h1>GT AccounTax Services Inc</h1>
              <p>Custom website from scratch using HTML, SASS and JQuery.</p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <a
                className="styled-button"
                href="https://gtaccountax.com/"
                target="_blank"
              >
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="single-project col-12">
          <div className="project-image row">
            <img
              src="https://ucarecdn.com/e3818ece-1c60-4be6-8162-b24c6fb36ef2/ScreenShot20200223at44053PM.png"
              alt=""
            />
          </div>

          <div className="project-desc row">
            <div className="col-lg-8 col-sm-12">
              <h1>Code Quiz</h1>
              <p>
                JavaScript app that uses Local Storage to save user information
                and keep track of the records.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <a
                className="styled-button"
                href="https://erodrigueztoimil.github.io/code_quiz//"
                target="_blank"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
