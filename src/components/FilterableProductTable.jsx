import { useState } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="main">
    <div className='container'>
    <h3>Thinking in React</h3>

      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
    </div>

  );
}

export default FilterableProductTable;

