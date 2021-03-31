// import React from "react";
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
//
// export function Country(props) {
//    const { country, cases } = props;
//
//    console.log("++++++++++++++++++++++++" , props);
//
//   // const data = { country , cases}
//
//     const renderHeader = () => {
//         let headerElement = ['country', 'cases']
//
//         return headerElement.map((key, index) => {
//             return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }
//
//     const renderBody = () => {
//         return (({ country, cases }) => {
//             return (
//                 <tr key={country}>
//                     <td>{country}</td>
//                     <td>{cases}</td>
//                 </tr>
//             )
//         })
//     }
//     return (
//
//         <div>
//             <h1 id='title'>React Table</h1>
//             <table id='countries'>
//                 <thead>
//                 <tr>{renderHeader()}</tr>
//                 </thead>
//                 <tbody>
//                 {renderBody()}
//                 </tbody>
//             </table>
//         </div>
//         // <div className="country-wrapper">
//         //     <div className="country-container">
//         //         <div className="country-id">{id}</div>
//         //         <div className="country">{country}</div>
//         //         <div className="country-cases">{cases}</div>
//         //     </div>
//         // </div>
//     )
// }


import React, { useState, useEffect } from 'react'
import axios from 'axios'


    const URL = 'https://coronavirus-19-api.herokuapp.com/countries'

    const Table = () => {
        const [countries, setCountries] = useState([])

        useEffect(() => {
            getData()
        }, [])

        const getData = async () => {

            const response = await axios.get(URL)
            setCountries(response.data)
        }


        const renderHeader = () => {
            let headerElement = ['country', 'cases', 'deaths', 'recovered','active','todayCases','todayDeaths']

            return headerElement.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }

        const renderBody = () => {
            return countries && countries.map(({country, cases,deaths,recovered,active,todayCases,todayDeaths}) => {
                return (
                    <tr key={country}>
                        <td>{country}</td>
                        <td>{cases}</td>
                        <td>{deaths}</td>
                        <td>{recovered}</td>
                        <td>{active}</td>
                        <td>{todayCases}</td>
                        <td>{todayDeaths}</td>
                        </tr>
                )
            })
        }

        return (
            <>
                <h3 id='title'>Covid details Table</h3>
                <table id='Countries'>
                    <thead>
                    <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                    {renderBody()}
                    </tbody>
                </table>
            </>
        )
    }

export default Table

