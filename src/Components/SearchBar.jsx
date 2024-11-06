import { useState } from "react";
import { config } from "./GeneralFunction";
import axios from "axios";
import Notify from "./Notify";
import Swal from "sweetalert2";

const SearchBar = () => {
    const [search, setSearch] = useState({
        search: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setSearch({ ...search, [name]: value })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const url = "http://solidrockschool.com.ng/api/job/search";

        const fd = new FormData();
        fd.append("search", search.search)

        axios.post(url, fd, config)
            .then(response => {
                if (response.data.status === 200) {
                    Swal.fire(response.data.message)
                } else {
                    Swal.fire("Error: ", response.data.message)
                }
            })
            .catch((err) => {
                Notify({
                    title: 'Error ',
                    message: err.message,
                    type: 'danger',
                })
            })

    }

    return (
        <form onSubmit={handleSearch} className="clearfix">
            <input
                type="text"
                className="form-control"
                placeholder="Type your key word"
                name="search"
                value={search.search}
                onChange={handleChange}
                required
            />
            <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                    <span className="change-text">Job Location</span>{" "}
                    <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change">
                    <li>
                        <a href="#">Location 1</a>
                    </li>
                    <li>
                        <a href="#">Location 2</a>
                    </li>
                    <li>
                        <a href="#">Location 3</a>
                    </li>
                </ul>
            </div>
            <button type="submit" className="btn btn-primary" value="Search">
                Search
            </button>
        </form>
    );
}

export default SearchBar;