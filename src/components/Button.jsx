import React from 'react'
// OBYEKTIN PARCALANMASI
const Button = ({butonunIcindekiDeyer, klassAdi, iconShekli}) => {
    // JAVASCRIPT XML ICERISINDE (JSX) deyishenler {} icerisinde qeyd olunur
  return (
    <button className={klassAdi}>{iconShekli && <img src={iconShekli} />}{butonunIcindekiDeyer}</button>

  )
}

export default Button