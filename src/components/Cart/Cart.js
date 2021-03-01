import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, plr) => total + plr.salary , 0);
    return (
        <div>
            <div>
                <h3>Selected players and Details</h3>
                <h5>Total Player Selected: {cart.length}</h5>
                <h5>Total Players Price: {total}</h5>
            </div>
            <div>
                <ul className="cart-player-list">
                {
                    cart.map(selectedPlayer => <li>
                        Name: {selectedPlayer.name}. <br></br>
                        Salary: {selectedPlayer.salary}</li>)
                }
                </ul>
            </div>
        </div>
    );
};

export default Cart;