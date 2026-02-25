/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2205588276")

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
    "id": "bool662578726",
    "name": "Available",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(3, new Field({
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
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file83635035",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Image",
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
    "id": "select3037581765",
    "maxSelect": 2,
    "name": "Visible",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Sunday",
      "Saturday"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2205588276")

  // remove field
  collection.fields.removeById("text350402654")

  // remove field
  collection.fields.removeById("bool662578726")

  // remove field
  collection.fields.removeById("number185142749")

  // remove field
  collection.fields.removeById("file83635035")

  // remove field
  collection.fields.removeById("select3037581765")

  return app.save(collection)
})
