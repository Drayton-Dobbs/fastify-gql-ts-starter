"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const core_1 = __importDefault(require("@pothos/core"));
const Book_1 = require("./models/Book");
const builder = new core_1.default({});
builder.objectType(Book_1.Book, {
    name: "Book",
    fields: (t) => ({
        id: t.exposeID("id", { nullable: false }),
        title: t.exposeString("title", { nullable: false }),
        author: t.exposeString("author", { nullable: false }),
    }),
});
builder.queryType({
    fields: (t) => ({
        books: t.field({
            type: [Book_1.Book],
            resolve: () => {
                return [
                    { id: "1", title: "Book Title 1", author: "Author Name 1" },
                    { id: "2", title: "Book Title 2", author: "Author Name 2" },
                ];
            },
        }),
    }),
});
const schema = builder.toSchema();
exports.schema = schema;
