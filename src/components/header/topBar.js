import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io"

import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

function topBar() {
  return (
    <>
      <IconContext.Provider value={{color: '#808080'}}>
        <div id="top_bar">
          <div className="header_recherche">
            <div className="formulaire_spip formulaire_recherche" id="formulaire_recherche">
              <form action="spip.php?page=recherche" method="get">
                <div>
                  <input name="page" defaultValue="recherche" type="hidden" />
                  <input type="text" className="text" size={10} name="recherche" id="recherche"/>
                  <FaIcons.FaSearch />
                  <input type="submit" className="submit" />
                </div>
              </form>
            </div>
          </div>		
          <ul className="logos_social">	
            <li>
              <a href="https://www.facebook.com/AlumniLFCDG/" className="Facebook" alt="Les Anciens du Lycée Français Charles de Gaulle de Londres - Facebook" title="Les Anciens du Lycée Français Charles de Gaulle de Londres - Facebook" rel="noreferrer" target="_blank">
                <FaIcons.FaFacebookF style={{color: '#FFF !important'}} />
              </a>
            </li>	
            {/* <Link to="https://www.facebook.com/AlumniLFCDG/" className="Facebook" alt="Les Anciens du Lycée Français Charles de Gaulle de Londres - Facebook" title="Les Anciens du Lycée Français Charles de Gaulle de Londres - Facebook" rel="noreferrer" target="_blank">
              <FaIcons.FaFacebookF />
            </Link> */}
            <li>
              <a href="https://uk.linkedin.com/in/alumni-lyc%C3%A9e-fran%C3%A7ais-charles-de-gaulle-de-londres-4621708a" className="LinkedIn" alt="Les Anciens du Lycée Français Charles de Gaulle de Londres - LinkedIn" title="Les Anciens du Lycée Français Charles de Gaulle de Londres - LinkedIn" rel="noreferrer" target="_blank">
                <FaIcons.FaLinkedinIn style={{color: '#FFF !important'}} />
              </a>
            </li>
            {/* <Link to="https://uk.linkedin.com/in/alumni-lyc%C3%A9e-fran%C3%A7ais-charles-de-gaulle-de-londres-4621708a" className="LinkedIn" alt="Les Anciens du Lycée Français Charles de Gaulle de Londres - LinkedIn" title="Les Anciens du Lycée Français Charles de Gaulle de Londres - LinkedIn"  target="_blank">
              <FaIcons.FaLinkedinIn />
            </Link> */}
          </ul>
          <div className="connexion">
            <span className="adhesion disconnected">
              Espace adhérent <IoIcons.IoIosArrowDown
                style={{
                  color: '#2E2E2E !important'
                }}
              />
            </span>    
            <ul className="menu-liste menu-items user_profil" data-depth={0}>
              {/* <li className="menu-entree item menu-items__item menu-items__item_espace-prive login">
                <a href="spip.php?page=login&url=.%2F" className="menu-items__lien" rel="nofollow">Se connecter</a> 
              </li>
              <li className="menu-entree signin">
                <a href="spip.php?page=inscription">
                  Remplir la fiche d’adhésion</a>
              </li> */}
            </ul>
          </div>		
        </div>
      </IconContext.Provider>
    </>
  )
}

export default topBar
