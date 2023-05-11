"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationSource = void 0;
var ValidationSource;
(function (ValidationSource) {
    ValidationSource["BODY"] = "body";
    ValidationSource["HEADER"] = "headers";
    ValidationSource["QUERY"] = "query";
    ValidationSource["PARAM"] = "params";
})(ValidationSource = exports.ValidationSource || (exports.ValidationSource = {}));
exports.default = (schema, source = ValidationSource.BODY) => (req, res, next) => {
    try {
        const { error } = schema.validate(req[source]);
        if (!error)
            return next();
        const { details } = error;
        const message = details
            .map((i) => i.message.replace(/['"]+/g, ''))
            .join(',');
        console.error(message);
        res.status(400).json({ status: 'failed', message: 'BAD REQUEST' });
        next();
    }
    catch (error) {
        next(error);
    }
};
