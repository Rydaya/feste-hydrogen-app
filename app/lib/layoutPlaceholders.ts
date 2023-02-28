import { LayoutData } from "~/root";

const PLACEHOLDERS = {
  LAYOUT: {
    "shop": {"name": 'Test App'},
    "headerMenu": {
      "id": "1",
      "items": [
        {
          "id": "1",
          "isExternal": false,
          "items": [],
          "resourceId": null,
          "tags": [],
          "length": 0,
          "target": "_self",
          "to": "/",
          "title": "Scenes",
          "type": "FRONTPAGE",
          "url": "https://feste-2917.myshopify.com/"
        },
        {
          "id": "2",
          "isExternal": false,
          "items": [],
          "resourceId": null,
          "tags": [],
          "length": 0,
          "target": "_self",
          "to": "/",
          "title": "Party Supplies",
          "type": "FRONTPAGE",
          "url": "https://feste-2917.myshopify.com/"
        },
        {
          "id": "3",
          "isExternal": false,
          "items": [],
          "resourceId": null,
          "tags": [],
          "length": 0,
          "target": "_self",
          "to": "/",
          "title": "Florals",
          "type": "FRONTPAGE",
          "url": "https://feste-2917.myshopify.com/"
        },
        {
          "id": "4",
          "isExternal": false,
          "items": [],
          "resourceId": null,
          "tags": [],
          "length": 0,
          "target": "_self",
          "to": "/",
          "title": "Experiences",
          "type": "FRONTPAGE",
          "url": "https://feste-2917.myshopify.com/"
        },
      ]
    }
  },
};

export function getLayoutPlaceholder(): LayoutData {
  return PLACEHOLDERS.LAYOUT as unknown as LayoutData;
}
