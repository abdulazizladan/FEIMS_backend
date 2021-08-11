const { Router } = require('express');
const { LVEquipmnetDao } = require('../dao');

module.exports =  () => {
    const api = Router();

    api.get('', async (req, res) => {
        const equipments = await LVEquipmnetDao.getAll();
        return res.status(200).json(equipments);
    });
    
    api.post('', async (req, res) => {
        try {
            const equipment = await LVEquipmnetDao.addNew(req.body);
            return res.status(201).json(equipment);
        } catch (error) {
            return res.status(400).send(error);
        }
    });
    
    api.get('/:id', async (req, res) => {
        const equipment = await LVEquipmnetDao.getOne(req.params.id);
        if (equipment) return res.status(200).json(equipment);
        return res.sendStatus(404);
    });
    
    api.put('/:id', async (req, res) => {
        const equipment = await LVEquipmnetDao.update(req.params.id, req.body);
        return res.status(200).json(equipment);
    });
    
    api.delete('/:id', async (req, res) => {
        const result = await LVEquipmnetDao.delete(req.params.id);
        
        if (result) return res.sendStatus(204);
        return res.sendStatus(404);
    });
    
    return api;
}
