import expressValidator = require('express-validator');

export class UserValidationMiddleware{

    public static getValidation(){
        return [
            expressValidator.body('userName')
                .isAlphanumeric()
                .isLength({min: 3})
                .withMessage('must have a minimum of 3 characters'),
            expressValidator.body('password')
                .isAlphanumeric()
                .isLength({min: 6})
                .withMessage('must have a minimum of 6 characters'),
            expressValidator.body('email')
                .isEmail()
                .withMessage('must be a valid e-mail'),
        ];
    }
}