"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_dom_1 = __importDefault(require("react-dom"));
var app_1 = __importDefault(require("./app"));
react_dom_1.default.render((0, jsx_runtime_1.jsx)(app_1.default, {}, void 0), document.getElementById('app'));
