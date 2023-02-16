import React from 'react'
import Award from './Award'

import data from '../awardsInfo.json'

const AwardsContainer = () => {
  return (
    <div className='row awards-container'>
    {
        data.map(melumat => (
            <Award kartinBasligi= {melumat.meqaleninBasligi} meqaleKartininShekli={melumat.shekil} meqaleMetniProps = {melumat.meqaleninMetni} />
        ) )
    }
   
    </div>
  )
}

export default AwardsContainer