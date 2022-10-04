import axios from 'axios';
import { useState, useEffect } from 'react';


function CarCard(props) {

    const { carImage, carName, carPrice } = props;
    const { handleChange, handleSubmit } = props;

    function handleClick(e) {
        e.preventDefault();
        window.location.href='/detailCar'
        console.log(props);
    }

    return (
        <div className='car-card'>
            <div className="card-container">
                {!!props.data.length && props.data.map((item) => (
                    <div className="card-car">
                        <div className="cardcar-content">
                            <div className="carImage">
                                <img src={item.image} />
                            </div>
                            <div className="carName">{item.name}</div>
                            <div className="carPrice"><strong>{item.price}</strong></div>
                            <div className="description"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong> </div>
                        </div>
                        <button onClick={handleClick}><strong>Pilih Mobil</strong></button>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default CarCard;