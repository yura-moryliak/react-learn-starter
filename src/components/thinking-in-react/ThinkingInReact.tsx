import { useState } from "react";

export interface ProductInteface {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}


function ProductCategoryRow({ category } : { category: string }) {
    return (
        <tr>
            <th colSpan={2}>
                {category}
            </th>
        </tr>
    );
}

function ProductRow({product}: {product: ProductInteface}) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

        return (
            <tr>
                <th>{ name }</th>
                <th>{ product.price }</th>
            </tr>
        )
}

function ProductTable({products, filterText, inStockOnly}: {products: ProductInteface[], filterText: string, inStockOnly: boolean}): any {
    const rows: any[] = [];
    let lastCategory: any = null;

    products.forEach((product: ProductInteface) => {

        if (product.name.toLocaleLowerCase().indexOf(
            filterText.toLocaleLowerCase()
        ) === -1) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            )
        }

        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: { filterText: string, inStockOnly: boolean, onFilterTextChange: any, onInStockOnlyChange: any }) {
    return (
        <form>
            <input
                type="text"
                placeholder="Search ..."
                value={ filterText }
                onChange={ (e) => onFilterTextChange(e.target.value) } />

            <label htmlFor="label">
                <input
                    type="checkbox"
                    id="label"
                    checked={ inStockOnly }
                    onChange={ (e) => onInStockOnlyChange(e.target.checked) } />
                Only show products in stock
            </label>
        </form>
    );
}

export default function FilterableProductTable({ products }: { products: ProductInteface[] }) {
    const [filterText, setFilterText] = useState('fruit');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />

            <ProductTable
                products={products}
                filterText={filterText} 
                inStockOnly={inStockOnly}  />
        </div>
    );
}