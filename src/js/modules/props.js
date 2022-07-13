export default function props(obj, sorting = []) {
    const sortingArr = [];
    const sortingAlphabet = [];

    if (!obj) {
        return [];
    }

    for (const item of sorting) {
        sortingArr.push({ key: item, value: obj[item] });
    }

    for (const key in obj) {
        if (!sorting.includes(key)) {
            sortingAlphabet.push({ key, value: obj[key] });
        }
    }

    sortingAlphabet.sort((a, b) => ((a.key > b.key) ? 1 : -1));

    return [...sortingArr, ...sortingAlphabet];
}