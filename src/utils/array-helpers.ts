export function findElementAndIndex<Type extends object, PropertyType extends keyof Type>(array: Type[], property: PropertyType, value: Type[PropertyType]): [Type, number] {
    
    let foundItemIndex: number = -1;
    let foundItem: Type = null!;

    array.forEach((element, index) => {
        if (element?.[property] === value) {
            foundItem = element;
            foundItemIndex = index;
        }
    });

    return [foundItem, foundItemIndex];

}