// Importando el enrutador de express
import { Router } from 'express';
// Importando el arreglo de productos
import { products } from './admin.route.js';

// Creando una instancia del enrutador de express
const router = Router();

// Importando productos
import { products } from './admin.route.js';

// La ruta raíz entra en todo tipo de petición
router.get(["/", "/home"], (_, res) => {
  console.log(`📔 Inventario de productos: ${JSON.stringify(products)}`);
  console.log("📒 Sirviendo recurso: 'shop.html'");
  res.render('shop', {shop: 'active', docTitle:"Tienda", products});
});

// GET /about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

export default router;