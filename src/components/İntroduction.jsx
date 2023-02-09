import React from 'react'
import Button from './Button'
import icon from '../assets/images/playicon.svg' 
import './Introduction.css'
import rightSideImg from '../assets/images/profil.svg'


import Typed from 'react-typed';

const Introduction = () => {
    return(
        <div className='introduction-section row'>
            <div className="intro-left-side bg-warning col-12 col-md-6">
                <h6>Next genaretion platform</h6>
                <Typed
                className='yazieffekti'
                strings={[
                    'Microsoft Certified Trainer',
                    'MERN stack developer',
                    'IT Expert']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
              
                </Typed>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <Button butonunIcindekiDeyer = "Get started" klassAdi="btn btn-success"/>
                <Button butonunIcindekiDeyer="Watch video" klassAdi  = "btn btn-danger" iconShekli={icon}/>
            </div>

            <div className="intro-right-side bg-success col-12 col-md-6 d-flex justify-content-end">
                <img src={rightSideImg} alt="" className='w-100' />
            </div>
        </div>
    )
}

export default Introduction