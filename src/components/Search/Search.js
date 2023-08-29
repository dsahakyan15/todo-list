import Button from "../Button/Button";
import './search.css'

const Search = () => {
    return (
        <div className="searchBlock">
            <input type='text' placeholder='Type any text for search' />
            <Button color="" text="Search"></Button>
        </div>
    )
}
export default Search;