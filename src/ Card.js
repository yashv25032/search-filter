import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {

    return (

        <>

            <div className="card m-3" style={{width: "18rem"}}>
                <img src={props.imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.desc}</h5>

                    {/* <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink> */}

                </div>
            </div>


        </>
    );
    
}

export default Card;
