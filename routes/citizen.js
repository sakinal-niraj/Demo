const express = require('express');
const router = express.Router();
const Citizen = require('../model/person');



router.get('/',async(req,res)=>{
    try {
        const data = await Citizen.find();
        res.send(data);
    } catch (error) {
        
    }
});

router.get('/:worktype', async(req,res)=>{
    try {
        const workType = req.params.worktype;
        if(workType == 'manager' || workType == 'cleark' || workType == 'assi_manager')
        {
            const citizenWork = await Citizen.find({work: workType});
            console.log(citizenWork);
            res.status(200).json(citizenWork);
        }else{
            res.status(404).json({error:'invalid work type'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "can't fetch the data"});
    }
});

router.post('/', async (req,res)=>{
    try {
        const data = req.body;

        const newCitizen = await Citizen.create(data);
        res.status(200).json(newCitizen);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"can't add new data"});
    }
});

router.put('/:id', async (req,res)=>{
    try {
        const citizenId = req.params.id;
        const citizenData = req.body;
        const updatedCitizen = await Citizen.findByIdAndUpdate(citizenId,citizenData,{new:true, runValidators:true});

        if(!updatedCitizen){
            res.status(404).json({error:"can't find the user"});
        }
            res.status(200).json(updatedCitizen);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"can't update the data"});
    }
});

router.delete('/:id', async (req,res)=>{
    try {
        const citizenId = req.params.id;

        const DeleteCitizen = await Citizen.findByIdAndDelete(citizenId);
        if(!DeleteCitizen){
            res.status(404).json({error:"can't find the citizen"});
        }
        res.status(200).json({message:"citizen removed"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"can't remove the citizen"});
    }
})

// it's working
module.exports = router;