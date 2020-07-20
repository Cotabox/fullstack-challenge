import expressValidator = require('express-validator');

export class PeopleValidationMiddleware{

    public static getValidation(){
        return [
            expressValidator.body('firstName')
                .isAlphanumeric()
                .isLength({min: 3})
                .withMessage('must have a minimum of 3 characters'),
            expressValidator.body('lastName')
                .isAlphanumeric()
                .isLength({min: 3})
                .withMessage('must have a minimum of 3 characters'),
            expressValidator.body('participation')
                .isNumeric()
                .withMessage('must be a numeric value'),
        ];
    }
}