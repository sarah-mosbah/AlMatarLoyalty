import Joi from 'joi';

export function transferValidator(req,res,next){
    const body = req.body;
    const schema = Joi.object().keys({
        recieverId: Joi.string().required(),
        points: Joi.number().required(),
    });
    try {
        let result =  schema.validate(body);
        if (result.error) {
            throw new Error(result.error.message);
        }
        next();
    }
    catch(e) {
        return res.status(400).json({ message:'Bad Request', error: e.message});
    }
}

