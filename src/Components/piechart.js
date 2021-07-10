import React, { Component } from 'react'
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

export class piechart extends Component {

    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }
    componentDidMount() {

        axios.get(`https://coronavirus-19-api.herokuapp.com/all`)

            .then(res => {
                console.log("--------",res);
                console.log("--------",res);
                const covid = res.data;
                let cases = [];
                let deaths = [];
                let recovered = [];
               try {

                   covid.forEach(record => {
                       cases.push(record.cases);
                       deaths.push(record.deaths);
                       recovered.push(record.recovered);
                   });
                   this.setState({
                       Data: {
                           label1: cases,
                           label2: deaths,
                           label3: recovered,
                       }
                   });
               }catch (exception){
                }
            })
    }
    render() {
        return (
            <div>
            <Pie
        data={this.state.Data}
        options={{ maintainAspectRatio: false }} />
        <h1>This is pie chart</h1>
        </div>
    )
    }
}

export default piechart

