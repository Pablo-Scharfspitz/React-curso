import cart from '../assets/cartwidget.png'

export const CartWidget = () => {

    return (
        <>
            <img src = {cart} alt = "carrito" width = {30} />
            <span> 10 </span>
        </>
    );

};