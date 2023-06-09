function Cart(props) {
    const { quantity = 0, handleCartShow = Function.prototype } = props;
    return (
        <div className='cart teal darken-3 white-text' onClick={handleCartShow}>
            <i className='material-icons'>shopping_basket</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
}
export { Cart };
