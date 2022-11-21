import express from "express";
import validate from "../middlewares/validate";
import { parkSchema, parkSchemaType } from "../zodScema/park.schema";

const router = express.Router();
const parks: parkSchemaType[] = []

router.get('/', (req, res) => {
    return res.json(parks)
});

router.post('/', validate(parkSchema), (req, res) => {
    const newPark = req.body as parkSchemaType;
    parks.push(newPark);
    return res.status(201).json({
        message: 'Park added :)'
    })
})

router.put('/:id', validate(parkSchema), (req, res) => {
    const updatedPark = req.body as parkSchemaType;
    const {id} = req.params;
    for (let i=0; i<parks.length; i++){
        if(parks[i].id === id){
            parks[i] = updatedPark;
            return res.status(200).json({
                message: 'Park updated :)'
            })
        } else {
            return res.status(404).json({
                message: 'Park not found :)'
            })
        }

    }
    
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    for (let i=0; i<parks.length; i++){
        if(parks[i].id === id){
            parks.splice(i, 1);
            return res.status(200).json({
                message: 'Park deleted :)'
            })
        } else {
            return res.status(404).json({
                message: 'Park not found :)'
            })
        }
    } 
})

export default router;