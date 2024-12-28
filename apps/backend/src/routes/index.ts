import express from 'express';
import cardsRoutes from '../controllers/card.controller';
import usersRoutes from '../controllers/user.controller';
import ROUTES from './base-routes.const';

export default function configureRoutes(app: express.Application) {
    app.use(ROUTES.Card, cardsRoutes);
    app.use(ROUTES.User, usersRoutes);
}