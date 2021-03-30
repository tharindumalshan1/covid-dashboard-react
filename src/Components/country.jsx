import React from "react";

export function Country(props) {
    const { country, cases, id } = props;

    return (
        // <table>
        //     <thead>
        //     <tr>
        //         <th scope="col">#</th>
        //         <th scope="col">Country</th>
        //         <th scope="col">Cases</th>
        //         <th scope="col">City</th>
        //         <th scope="col">State</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     <tr>
        //         <td>{id}</td>
        //         <td>{country}</td>
        //         <td>{cases}</td>
        //         <td>4</td>
        //     </tr>
        //     </tbody>
        // </table>


        <div className="country-wrapper">
            <div className="country-container">
                <div className="country-id">{id}</div>
                <div className="country">{country}</div>
                <div className="country-cases">{cases}</div>
            </div>
        </div>
    );
}