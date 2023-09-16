const products = [
    { title: 'Cabbage', id: 1, price: 90, isFruite: true },
    { title: 'Garlic', id: 2, price: 90, isFruite: false },
    { title: 'Apple', id: 3, price: 90, isFruite: false },
    { title: 'Watermelon', id: 4, price: 90, isFruite: true },
    { title: 'Strawberry', id: 5, price: 90, isFruite: false },
];

export default function ProductsList() {
    const listItems = products.map((productItem: any) => {
        return <li key={productItem.id} style={{
            color: productItem.isFruite ? 'magenta' : 'firebrick'
        }}>{ productItem.title } { productItem.isFruite && ' - FRUITE' }</li>
    });

    return (<ul>{ listItems }</ul>);
}