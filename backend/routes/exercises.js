const router=require('express').Router();

const exercise= require('./../models/exercise.model');

router.route('/').get((req,res)=>{
    exercise.find().then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error ' +err));
});

router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=req.body.date;
    const newexercise=new exercise({
        username,description,duration,date,
    });
    newexercise.save().then(() => res.json('Exercise added!')).catch(err=>res.status(400).json('Error '+err));

});

router.route('/:id').get((req,res)=>{
    exercise.findById(req.params.id).then(exercises => res.json(exercises)).catch(err=>res.status(400).json("Error: "+err));
});


router.route('/delete/:id').get((req,res) => {
    exercise.findByIdAndDelete(req.params.id).then(() => res.json("Exercise is deleted successfully")).catch(err=>res.status(400).json("error: "+err));
});


router.route('/edit/:id').post((req,res)=>{
    exercise.findById(req.params.id).then(
        exercise => {
            exercise.username=req.body.username;
            exercise.description=req.body.description;
            exercise.duration=req.body.duration;
            exercise.date=req.body.date;

            exercise.save()
            .then(()=> res.json("Updated Successfully!")).catch(err=>res.status(400).json("Error: "+err));
        }
        )
        .catch(error=>res.status(400).json("Error: "+error));
});




module.exports=router;