import React from 'react';
import { boxService } from '../services/boxService';
import './BoxShipment.css';

export class BoxShipment extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            boxes: [],
            shipmentCost: 0,
            totalWeight: 0
        };

    }

    componentDidMount() {
        boxService.getAllBoxes().then(result => {
            this.setState({ boxes: result }, () => {
                this.calculateTotals();
            })
        });
    }

    getBoxesRow(box) {
        const boxesDetails = [
            <td key={box.name}>{box.name}</td>,
            <td key={box.weight}>{box.weight}</td>,
            <td key={box.color} style={this.setBackgroundColor(box.color)}></td>,
            <td key={box.country}>{box.country}</td>,
            <td key={box.shippingCost}>{box.shippingCost}</td>
        ];

        return [
            <tr key={boxesDetails[0].key}>
                {boxesDetails}
            </tr>
        ];
    }

    setBackgroundColor(color) {

        return { backgroundColor: "rgb" + color };
    }

    calculateTotals() {
        const { boxes } = this.state;
        var totalPrice = 0;
        var totalWeight = 0;
        boxes.forEach((box) => {
            totalPrice += box.shippingCost;
            totalWeight += box.weight;
        })

        this.setState({
            shipmentCost: totalPrice,
            totalWeight: Math.round(totalWeight * 100) / 100
        })
    }

    render() {
        const { boxes, shipmentCost, totalWeight } = this.state

        return (

            <div className='setup-workout-wrapper' onMouseLeave={this.sectionLeft}>
                <p className='card-title'>Box Listing</p>
                <div className="workout-form-content">
                    <div className='table-wrapper'>
                        <div className='all-exercise-table-wrapper'>
                            <table className='workout-table'>
                                <thead>
                                    <tr className='workout-table-header-row'>
                                        <th className='workout-table-header'>Name</th>
                                        <th className='workout-table-header'>Weight</th>
                                        <th className='workout-table-header'>Color</th>
                                        <th className='workout-table-header'>Country</th>
                                        <th className='workout-table-header'>Shipment Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {boxes.map((e) => this.getBoxesRow(e))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="total-group">
                        <div className="total-shipment-cost">
                            <div>Total Shipment Cost: {shipmentCost}</div>
                        </div>
                        <div className="total-weight">
                            <div>Total Weight: {totalWeight}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}