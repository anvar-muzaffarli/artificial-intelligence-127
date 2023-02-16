import React from 'react'

import './Award.css'

const Award = ({kartinBasligi, meqaleKartininShekli, meqaleMetniProps}) => {
  return (
    <div className="card col-12 col-md-4 col-lg-2">
  <img src={meqaleKartininShekli} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{kartinBasligi}</h5>
    <p className="card-text">{meqaleMetniProps}</p>
   
  </div>
</div>
  )
}

export default Award