import s from "./SearchBar.module.css"

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}: { filterText: string, inStockOnly: boolean, onFilterTextChange: any, onInStockOnlyChange: any }) {
    return (
        <form>
            <input
                className={s.input}
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

export default SearchBar;