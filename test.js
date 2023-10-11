function convertToTree(data) {
    let tree = {};
    
    let hashMap = {};
    data.forEach(element => {
        hashMap[element.id] = { name: element.name, children: {} };
    });
    
    data.forEach(element => {
    if (element.parentId !== 0) {
        if (hashMap[element.parentId]) {
            hashMap[element.parentId].children[element.id] = hashMap[element.id];
        }
    } else {
        tree[element.id] = hashMap[element.id];
    }
    });
    
    return tree;
}
    
const data = [
    {
        id: 1,
        parentId: 0,
        name: 'Электроника',
    },
    {
        id: 7,
        parentId: 2,
        name: 'Смартфоны',
    },
    {
        id: 2,
        parentId: 1,
        name: 'Мобильные телефоны',
    },
    {
        id: 3,
        parentId: 1,
        name: 'Компьютеры и ноутбуки',
    },
    {
        id: 5,
        parentId: 3,
        name: 'Ноутбуки',
    },
    {
        id: 4,
        parentId: 3,
        name: 'Системные блоки',
    },
    {
        id: 9,
        parentId: 5,
        name: 'Dell',
    },
    {
        id: 8,
        parentId: 5,
        name: 'HP',
    },
    {
        id: 10,
        parentId: 5,
        name: 'Lenovo',
    },
    {
        id: 6,
        parentId: 3,
        name: 'Комплектующие',
    },
];
    
function removeEmptyChildren(obj) {
    for (let key in obj) {
        if (Object.keys(obj[key].children).length === 0) {
            delete obj[key].children;
        } else {
        removeEmptyChildren(obj[key].children);
        }
    }
}
    
const tree = convertToTree(data);
removeEmptyChildren(tree);
console.log(JSON.stringify(tree, null, 2));