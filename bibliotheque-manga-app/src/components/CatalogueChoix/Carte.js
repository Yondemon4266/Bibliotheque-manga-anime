import React from 'react'
import '../../styles/Carte.css'
import ImageManga from '../../assets/A_l_Aube_d_une_grande_aventure_One_Piece_tome_1-361143691.jpg'

export default function Carte() {
  return (
    
    <div className="card card-manga">
        <img src={ImageManga} alt="manga-one-piece" width="150px" height="200px"/>
        <img src="" alt=""/>
        <div className="ligne"></div>
        <div className="name-card">
            <h4>Nom</h4>
        </div>

        <div className="icone-option-card">
        </div>
    </div>
  )
}
