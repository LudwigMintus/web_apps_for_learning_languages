import express from 'express';
import cardsRoutes from '../controllers/card.controller';
import usersRoutes from '../controllers/user.controller';
import collectionRoutes from '../controllers/collection.controller';
import typesRoutes from '../controllers/types.controller';
import progressRoutes from '../controllers/progress.controller';
import ROUTES from './base-routes.const';

export default function configureRoutes(app: express.Application) {
    app.use(ROUTES.Card, cardsRoutes);
    app.use(ROUTES.User, usersRoutes);
    app.use(ROUTES.Collection, collectionRoutes);
    app.use(ROUTES.Progress, progressRoutes);
    app.use(ROUTES.Types, typesRoutes);
}