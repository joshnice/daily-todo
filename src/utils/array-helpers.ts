export function findElementAndIndex<T>(array: T[], property: keyof T, value: any): [T, number] {
    
    let foundItemIndex: number = -1;
    let foundItem: T = null!;

    array.forEach((element, index) => {
        if (element?.[property] === value) {
            foundItem = element;
            foundItemIndex = index;
        }
    });

    return [foundItem, foundItemIndex];

}