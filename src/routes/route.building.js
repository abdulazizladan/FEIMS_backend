const { Router } = require('express');
const { BuildingDao } = require('../dao');

module.exports =  () => {
    const api = Router();

    api.get('', async (req, res) => {
        const building = await BuildingDao.getAll();
        return res.status(200).json(building);
    });
    
    api.post('', async (req, res) => {
        try {
            const building = await BuildingDao.addNew(req.body);
            return res.status(201).json(building);
        } catch (error) {
            return res.status(400).send(error);
        }
    });
    
    api.get('/:id', async (req, res) => {
        const building = await BuildingDao.getOne(req.params.id);
        if (building) return res.status(200).json(building);
        return res.sendStatus(404);
    });
    
    api.put('/:id', async (req, res) => {
        const building = await BuildingDao.update(req.params.id, req.body);
        return res.status(200).json(building);
    });
    
    api.delete('/:id', async (req, res) => {
        const result = await BuildingDao.delete(req.params.id);
        
        if (result) return res.sendStatus(204);
        return res.sendStatus(404);
    });
    
    return api;
}