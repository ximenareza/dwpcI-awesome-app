// controllers/httpError.controller.js

const path = require('path');

exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Página no encontrada',
    path: '/404'
  });
};

