import SchemaBuilder from "@pothos/core";
import { schemaRootTypes } from "./types";
const builder = new SchemaBuilder<schemaRootTypes>({});

const arrayOfBooks = [
  { id: "1", title: "Book Title 1", author: "Author Name 1" },
  { id: "5", title: "Book Title 2", author: "Author Name 2" },
  { id: "3", title: "Book Title 1", author: "Author Name 1" },
  { id: "4", title: "Book Title 2", author: "Author Name 2" },
]

builder.objectType('Book', {
  fields: (t) => ({
    id: t.exposeID("id", { nullable: false }),
    title: t.exposeString("title", { nullable: false }),
    author: t.exposeString("author", { nullable: false }),
    authorFirstName: t.string({
      resolve: (root, args, ctx, info) => {
        return root.author.split(" ")[0]
      }
    })
  }),
});

builder.queryType({
  fields: (t) => ({
    books: t.field({
      type: ['Book'],
      args: {
        first: t.arg.int({required: true})
      },
      resolve: (root, args, ctx, info) => {
        return arrayOfBooks.slice(0, args.first)
      },
    }),
  }),
});

const schema = builder.toSchema();
export { schema };
