export default function destructuring(obj) {
    const result = [];
    let specialArr;

    if ('special' in obj) {
        specialArr = obj.special;
    } else {
        return [];
    }

    for (const prop of specialArr) {
        let descriptionNew;
        if ('description' in prop) {
            descriptionNew = prop.description;
        } else {
            descriptionNew = 'Описание недоступно';
        }

        result.push({
            id: prop.id,
            name: prop.name,
            description: descriptionNew,
            icon: prop.icon,
        });
    }

    return result;
}