import React from 'react'

import './destination.css'
import IMG_4 from '../../img/img-4.jpg'
import IMG_5 from '../../img/img-5.jpg'
import IMG_6 from '../../img/img-6.jpg'
import IMG_7 from '../../img/img-7.jpg'
import IMG_8 from '../../img/img-8.jpg'

function destination() {
  return (
    <>
      <section className="destination-section">
        <div className="destination-wrapper">
          <div>
            <h3 className="dest-title">
              DESTINATIONS POST BAC ET A LEVELS
            </h3>
          </div>
          <div className="separator"></div>
          <div className="destinations">
            <div className="dest-1">
              <div>
                <div>
                  <img src={IMG_4} alt="" title="" />
                </div>
                <a href="!#">
                  <h3>
                    Promotion 2017 destination post bac et A (...)
                  </h3>
                </a>
                <p>
                  329 bacheliers et 53 diplômés des A Levels, 
                  360 réponses. Taux de réponse : 94%
                </p>
              </div>
              <div>
                <div className="dest-bottom">
                <a className="btn-dest btn-primary" href="!#">lire l'article</a>
                <span className="dest-date">06/11/19</span>
              </div>
              </div>
            </div>
            <div className="dest-2">
              <div>
                <div className="dest-head">
                  <img src={IMG_5} alt="" title="" />
                  <a href="!#">
                    <h3>
                      Destination post bac et A Level de la promotion 2016 (...)
                    </h3>
                  </a>
                </div>
                <p>
                  354 bacheliers et diplômés des A Levels, 345 réponses. Taux de réponse : 97%
                </p>
              </div>
              <div className="dest-bottom">
                <a className="btn-dest btn-primary" href="!#">lire l'article</a>
                <span className="dest-date">06/11/19</span>
              </div>
            </div>
            <div className="dest-3">
              <div>
                <div className="dest-head">
                  <img src={IMG_6} alt="" title="" />
                  <a href="!#">
                    <h3>
                      Destination post bac et A Level de la promotion 2014 (...)
                    </h3>
                  </a>
                </div>
                <p>
                  Section Française : Sur 262 bacheliers, 245 (soit 94%) ont
                répondu Section Britannique 
                : 34 élèves diplômés des A-Levels lors de la session 2014
                </p>
              </div>
              <div className="dest-bottom">
                <a className="btn-dest btn-primary" href="!#">lire l'article</a>
                <span className="dest-date">06/11/19</span>
              </div>
            </div>
            <div className="dest-4">
              <div>
                <div className="dest-head">
                  <img src={IMG_7} alt="" title="" />
                  <a href="!#">
                    <h3>
                      Destination post bac et A Level de la promotion 2015 (...)
                    </h3>
                  </a>
                </div>
                <p>
                  Section Française : 267 bacheliers, 258 réponses. 
                Taux de réponse : 97% Section Britannique : Les 46 
                élèves diplômés des A-Levels lors de la session 2015  
                </p>
              </div>
              <div className="dest-bottom">
                <a className="btn-dest btn-primary" href="!#">lire l'article</a>
                <span className="dest-date">06/11/19</span>
              </div>
            </div>
            <div className="dest-5">
              <div>
                <div className="dest-head">
                  <img src={IMG_8} alt="" title="" />
                  <a href="!#">
                    <h3>
                      Destination post bac et A Level de la promotion 2013 (...)
                    </h3>
                  </a>
                </div>
                <p>
                  Section Française : Sur 235 bacheliers, 218 (soit 93%) ont 
                répondu Section Britannique 
                : 41 élèves diplômés du A-Levels
                </p>
              </div>
              <div className="dest-bottom">
                <a className="btn-dest btn-primary" href="!#">lire l'article</a>
                <span className="dest-date">06/11/19</span>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default destination
