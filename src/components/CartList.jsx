import { CartItem } from './CartItem';

function CartList(props) {
    const {
        order = [],
        handleCartShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalSum = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className='collection cart-list'>
            <li className='collection-item active'>Cart</li>
            {order.length ? (
                order.map((item) => (
                    <CartItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Cart is empty</li>
            )}
            <li className='collection-item collection-item_out active'>
                Total: {totalSum}$<button className='secondary-content btn-small center-align'>Checkout</button>
            </li>
            <i className='material-icons close-cart' onClick={handleCartShow}>
                close
            </i>
        </ul>
    );
}
export { CartList };
