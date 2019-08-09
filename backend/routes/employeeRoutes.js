const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(401).send(error);
    }
});

router.post('/employees', async (req, res) => {
    try {
        const data = req.body;
        await data.forEach(async function(item) {
            const employee = new Employee(item);
            await employee.save();
        });
        res.status(201).send({ message: 'Data saved successfully.' });
    } catch (error) {
        res.status(401).send(error);
    }
});

module.exports = router;