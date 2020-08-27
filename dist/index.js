"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const shop_1 = __importDefault(require("./routes/shop"));
const admin_1 = __importDefault(require("./routes/admin"));
const error_1 = __importDefault(require("./controllers/error"));
const app = express_1.default();
app.set('view engine', 'ejs');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('dist'));
app.use('/admin', admin_1.default.router);
app.use(shop_1.default);
app.use(error_1.default.error404);
app.listen(8080), console.log('Listening at 8080');
//# sourceMappingURL=index.js.map