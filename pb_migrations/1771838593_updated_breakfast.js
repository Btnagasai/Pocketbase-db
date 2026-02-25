/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3995378368")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text350402654",
    "max": 0,
    "min": 0,
    "name": "Item_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2212294583",
    "max": null,
    "min": null,
    "name": "1",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool662578726",
    "name": "Available",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number185142749",
    "max": null,
    "min": null,
    "name": "Price",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select56483403",
    "maxSelect": 2,
    "name": "Week_Days",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Monday",
      "Tuesday"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3995378368")

  // remove field
  collection.fields.removeById("text350402654")

  // remove field
  collection.fields.removeById("number2212294583")

  // remove field
  collection.fields.removeById("bool662578726")

  // remove field
  collection.fields.removeById("file3309110367")

  // remove field
  collection.fields.removeById("number185142749")

  // remove field
  collection.fields.removeById("select56483403")

  return app.save(collection)
})
