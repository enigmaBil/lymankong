import React from 'react'


import './memberShip.css'

function memberShip() {
  return (
    <>
      <section className="membership-section">
        <div className="membership-content">
          <div className="membership-text">
            <h3> DEVENIR MEMBRE </h3>
            <div></div>
            <p className="p-1">
              L’Association des Anciens regroupe les anciens élèves ainsi que les anciens
              parents, professeurs et membres du personnel de l’établissement et aussi les
              actuels lycéens.
            </p>
            <p className="p">
              Sa mission, depuis sa création, est toujours restée la même : renforcer les liens 
              de camaraderie et d’entraide entre les anciens élèves, 
              assurant ainsi le rayonnement du Lycée du Manengouba, Nkongsamba dans le monde.
            </p>
            <p className="p">
              Votre adhésion vous permet d’accéder à notre annuaire en ligne, 
              de vous inscrire à nos activités sociales et professionnelles, 
              de participer à nos forums de discussion, de voir nos galeries photos, 
              de consulter et publier des offres d’emploi et si vous le souhaitez, 
              de vous inscrire à notre Newsletter.
            </p>
            <p className="p">
              Par ailleurs, si vous souhaitez participer activement et vous 
              investir pour que ce réseau perdure et se développe, nous serions
               heureux de vous accueillir au sein de l’organisation. 
              Merci de nous contacter
            </p>
          </div>
          <div className="membership-singup">
            <div>
              <h3>Les frais d’adhésion</h3>
              <h3>sont</h3>
            </div>
            <h4>
              <strong>Gratuits ! </strong>
            </h4>
            <div className="bouton">
              <a href="#!"><span>Je veux m’inscrire&nbsp;!</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default memberShip
