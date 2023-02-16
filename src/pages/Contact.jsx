import React from 'react'

const Contact = () => {
  return (

    <>
    <h1 className='text-white p-5 mt-5 display-1 text-center'>Bizimlə əlaqə</h1>
    <form>
    

    <div class="mb-3">
  <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control p-3" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

</form>

</>
  )
}

export default Contact