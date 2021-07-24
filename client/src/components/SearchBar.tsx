import { Fragment } from "react";

const SearchBar = () => {
    const locations = [
        "USA",
        "Lagos",
        "London",
        "New York",
        "Berlin",
        "Tokyo",
        "Bejin",
        "Singapore",
    ];
    return (
        <div className={""}>
            <form action="/action_page.php" method="get">
                <input
                    list="locations"
                    type="text"
                    name="location"
                    placeholder="your location"
                />
                <datalist id="locations">
                    {locations.map((list) => (
                        <option value={list} key={list}></option>
                    ))}
                </datalist>
            </form>
        </div>
    );
};

export default SearchBar;
