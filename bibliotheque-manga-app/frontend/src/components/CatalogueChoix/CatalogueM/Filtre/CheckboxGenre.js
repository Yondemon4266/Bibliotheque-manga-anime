import React, { useEffect } from 'react';
import '../../../../styles/CheckboxGenre.css';
import { useDispatch, useSelector } from 'react-redux';
import { DecocherTout, getCheckboxesName, toggleCheckboxes } from '../../../../actions/filtres.action';

export default function CheckboxGenre() {
  
  const dispatch = useDispatch();
  
  const checkboxes = useSelector(state => state.carteReducer.checkboxes);

  const handleCheckboxChange = (checkboxId) => {
    dispatch(toggleCheckboxes(checkboxId));
  };

  const handleUncheckAll = (event) => {
    const terminerId = event.target.id; 
    dispatch(toggleCheckboxes(terminerId));
  };

  return (
    <div className="container-genre">
      <div className="sous-container-genre">
        {checkboxes.slice(0,checkboxes.length - 2).map((checkbox => (
          <div key={checkbox.mal_id} className='checkbox'>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.mal_id)}
              />
            <p>{checkbox.name}</p>
          </div>
        )))}
      </div>
      <button id="decocherTout" onClick={handleUncheckAll}>Décocher tout</button>

    </div>
    
  );

}