import React from 'react'
import * as FaIcons from "react-icons/fa";
import './NewsSection.css'
import IMG_1 from '../../img/img-1.jpg'
import IMG_2 from '../../img/img-2.jpg'
import IMG_3 from '../../img/img-3.jpg'

const NewsSection = () => {
  return (
    <>
      <section className="news-container">
        <div className="news-header">
          <h2>
            News 
          </h2>
        </div>
        <div className="separator"></div>
        <div className="news-content">
          <div className="news">
            <div>
              <div className="news-img_wrapper">
                <img className="news-img" src={IMG_1} alt="" title="" />
              </div>
              <h3 className="news-title">
                <a className="news-title_link" href="!#">Assemblée Générale</a>
              </h3>
              <p className="news-text">
                NOUS AVONS BESOIN DE VOTRE SOUTIEN POUR FAIRE VIVRE VOTRE ASSOCIATION. TOUS LES MEMBRES SONT INVITÉS À VOTER ÉLECTRONIQUEMENT ET À SE RETROUVER SI ILS LE PEUVENT POUR L’AG LE MERCREDI 18 DECEMBRE AU LYCÉE EN SALLE ANSELL À 17H30. CETTE RÉUNION SERA (...)
              </p>
            </div>
            <div className="news-bottom">
              <a className="btn btn-primary" href="!#">lire l'article</a>
              <span className="news-date">02/12/19</span>
            </div>
          </div>
          <div className="news">
            <div>
              <div className="news-img_wrapper">
                <img className="news-img" src={IMG_2} alt="" title="" />
              </div>
              <h3 className="news-title">
                <a className="news-title_link" href="!#">Cocktail de Noël 2019</a>
              </h3>
              <p className="news-text">
                Vous êtes invités par l’Association des Anciens à un cocktail de Noël, le MERCREDI 18 DECEMBRE à 18h30 au lycée qui met à l’honneur la promotion 2019. Inscription obligatoire ci-dessous avant le 10 décembre. Si vous rencontrez des difficultés sur ce (...)
              </p>
            </div>
            <div className="news-bottom">
              <a className="btn btn-primary" href="!#">lire l'article</a>
              <span className="news-date">25/11/19</span>
            </div>
          </div>
          <div className="news">
            <div>
              <div className="news-img_wrapper">
                <img className="news-img" src={IMG_3} alt="" title="" />
              </div>
              <h3 className="news-title">
                <a className="news-title_link" href="!#">Forum des Carrières 2019</a>
              </h3>
              <p className="news-text">
                Le SAMEDI 30 NOVEMBRE 2019 aura lieu le FORUM DES CARRIERES du Lycée.
              </p>
            </div>
            <div className="news-bottom">
              <a className="btn btn-primary" href="!#">lire l'article</a>
              <span className="news-date">06/11/19</span>
            </div>
          </div>
        </div>
        <div className="all-news">
          <a href="!#" className="btn btn-primary_ligth">
            voir toutes les actualités <FaIcons.FaPlusSquare/>
          </a>
        </div>
      </section>
    </>
  )
}

export default NewsSection
