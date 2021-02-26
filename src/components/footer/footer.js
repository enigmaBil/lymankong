import React from 'react'

import './footer.css';

import Logo_Footer from '../../img/logo-footer.svg'

function footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer">
          <div className="bloc_1">
            <ul className="lien_legal">
              <li>
                <a href="!#" target="_blank">
                  Page LinkedIn
                </a>
              </li>     
              <li>
                <a href="!#">
                  Website acceptable use policy
                </a>
              </li>     
              <li>
                <a href="!#">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="!#">
                  Privacy and cookies policy
                </a>
              </li>
              <li>
                <a href="!#">
                  Data protection policy
                </a>
              </li>
            </ul>
          </div>
          <div className="bloc_2">
            <div className="logo_site">
              <a href="!#" alt="">		
                <img src={Logo_Footer} title="" alt="" />           
              </a>
            </div>
            <div className="contact">
              <div>
              <h3 className="nom">Let's Connect and Build a Strong Network !</h3>
              </div>
              <div>
                <span>
                <p>
                  L’Association des Anciens regroupe les anciens élèves ainsi
                  que les anciens parents, professeurs et membres du personnel
                  de l’établissement ainsi que les actuels lycéens.
                </p>
              </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ligne_footer">
          <div className="ligne_footer_content">
              <div className="copyright">
                  © 2021 - Les Anciens du Lycée Français Charles de Gaulle de Londres
              </div>
              <div className="credit">
                  site by <a href="!#" title="Camertronix Sarl">Camertronix Sarl</a> 
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default footer
