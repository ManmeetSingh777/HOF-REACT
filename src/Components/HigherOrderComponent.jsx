import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entrepreneur', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* Progression 2: List All Items */}
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()} </ul>
                </div>

                {/* Progression 3: List All Data Based on UserType */}
                <h1>List All Data Based on UserType</h1>
                <div className="display-box">
                    <ul>{this.renderUserType('Designer')} </ul>
                </div>

                {/* Progression 4: Filter All Data Starting with the Letter J */}
                <h1>Filter All Data Starting with the Letter J</h1>
                <div className="display-box">
                    <ul>{this.filterNamesStartingWithJ()} </ul>
                </div>

                {/* Progression 5: Filter Data Based on Age */}
                <h1>Filter Data Based on Age (Age 28-50)</h1>
                <div className="display-box">
                    <ul>{this.filterByAgeRange(28, 50)} </ul>
                </div>

                {/* Progression 6: Find the Total Experience of the Designers */}
                <h1>Total Experience of Designers</h1>
                <div className="display-box">
                    <p>Total Experience of Designers: {this.totalExperienceOfDesigners()} years</p>
                </div>
            </React.Fragment>
        );
    }

    // Progression 2: Function to render all items
    renderItems = () => {
        return this.state.userData.map((item) => (
            <li key={item.id} className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        ));
    };

    // Progression 3: Function to render items based on UserType
    renderUserType = (type) => {
        const filteredData = this.state.userData.filter(item => item.user_type === type);
        return filteredData.map((item) => (
            <li key={item.id} className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        ));
    };

    // Progression 4: Function to filter names starting with 'J'
    filterNamesStartingWithJ = () => {
        const filteredData = this.state.userData.filter(item => item.name.startsWith('J'));
        return filteredData.map((item) => (
            <li key={item.id} className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        ));
    };

    // Progression 5: Function to filter data based on age range
    filterByAgeRange = (minAge, maxAge) => {
        const filteredData = this.state.userData.filter(item => item.age >= minAge && item.age <= maxAge);
        return filteredData.map((item) => (
            <li key={item.id} className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        ));
    };

    // Progression 6: Function to find total experience of designers
    totalExperienceOfDesigners = () => {
        const designerData = this.state.userData.filter(item => item.user_type === 'Designer');
        const totalExperience = designerData.reduce((acc, curr) => acc + curr.years, 0);
        return totalExperience;
    };
}

export default HigherOrderComponent;