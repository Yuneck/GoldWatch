"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'your-rapid-key',
        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
};
(0, node_fetch_1.default)(url, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error('error:' + err));
