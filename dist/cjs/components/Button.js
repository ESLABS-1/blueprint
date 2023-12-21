"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
require("../styes.css");
const Button = (props) => {
    const { children } = props;
    return (react_1.default.createElement("button", Object.assign({}, props, { className: " bg-slate-900" }), children));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map