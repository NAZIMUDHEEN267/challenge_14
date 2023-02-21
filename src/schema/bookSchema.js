import Realm from "realm";

class Book extends Realm.Object{
    static schema = {
        name: "Book",
        properties: {
            "_id": "int",
            "bookName": "string",
            "author": "string",
            "details": "string"
        },
        primaryKey: "_id"
    }
};

export default new Realm({schema: [Book]});