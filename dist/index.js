"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateName = exports.ValidateId = void 0;
const ValidateId = (id) => {
    return false;
};
exports.ValidateId = ValidateId;
const ValidateName = (name) => {
    return /^[A-Za-z\s]*$/.test(name);
};
exports.ValidateName = ValidateName;
