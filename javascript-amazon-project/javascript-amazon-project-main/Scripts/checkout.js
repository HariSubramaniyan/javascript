import {cart,removeFromCart} from '../data/Cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';
import {renderOrderSummary} from '../Scripts/Checkout/orderSummary.js'
import { renderPaymentSummary } from './Checkout/paymentSummary.js';
//import '../data/Cart-class.js';

renderOrderSummary();
renderPaymentSummary();
