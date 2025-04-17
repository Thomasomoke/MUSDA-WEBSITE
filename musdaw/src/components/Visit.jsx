import React from 'react'


const Visit = ({IsPopup, setIsPopup}) =>{
    return(
        <div>
            {Ispopup && <div className="fixed top-0">
                <h1>HELO</h1>
                <button onClick=(()=>setIsPopup(false))> close</button>
                </div>
            }
        </div>
    )
}
export default Visit