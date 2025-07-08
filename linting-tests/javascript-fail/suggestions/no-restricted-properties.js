/* eslint no-restricted-properties: [2, {
    "object": "disallowedObjectName",
    "property": "disallowedPropertyName"
}] */

    const example = disallowedObjectName.disallowedPropertyName; /*error Disallowed object property: disallowedObjectName.disallowedPropertyName.*/

    disallowedObjectName.disallowedPropertyName(); /*error Disallowed object property: disallowedObjectName.disallowedPropertyName.*/