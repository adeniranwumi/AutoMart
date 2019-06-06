import Order from '../controllers/Order';
import { purchaseOrderUrl } from '../helpers/constants';


function order(app) {
  // make purchase order
  app.post(purchaseOrderUrl, Order.create);
}

export default order;
