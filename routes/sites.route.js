const { Router } = require('express');
const { siteService } = require('../services');

const routes = Router();

routes.get('', async (req, res) => {
    const site = await siteService.list();
    return res.status(200).json(site);
});

routes.post('', async (req, res) => {
    try {
        const newSite = req.body;
        const site = await siteService.create(newSite);

        return res.status(201).json(site);
    } catch (error) {
        return res.status(400).send(error);
    }
});

routes.get('/:id', async (req, res) => {
    const site = await siteService.retrive(req.params.id);

    if (site) return res.status(200).json(site);
    return res.sendStatus(404);
});

routes.put('/:id', async (req, res) => {
    const newSite = req.body;
    const id = req.params.id;

    const site = await siteService.update(id, newSite);
    return res.status(200).json(site);
});

routes.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await siteService.delete(id);
    
    if (result) return res.sendStatus(204);
    return res.sendStatus(404);
});

module.exports = routes;
