const { Router } = require('express');
const { buildingService } = require('../services');

const routes = Router();

routes.get('', async (req, res) => {
    const building = await buildingService.list();
    return res.status(200).json(building);
});

routes.post('', async (req, res) => {
    try {
        const newBuilding = req.body;
        const building = await buildingService.create(newBuilding);

        return res.status(201).json(building);
    } catch (error) {
        return res.status(400).send(error);
    }
});

routes.get('/:id', async (req, res) => {
    const building = await buildingService.retrive(req.params.id);

    if (building) return res.status(200).json(building);
    return res.sendStatus(404);
});

routes.put('/:id', async (req, res) => {
    const newBuilding = req.body;
    const id = req.params.id;

    const building = await buildingService.update(id, newBuilding);
    return res.status(200).json(building);
});

routes.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await buildingService.delete(id);
    
    if (result) return res.sendStatus(204);
    return res.sendStatus(404);
});

module.exports = routes;
