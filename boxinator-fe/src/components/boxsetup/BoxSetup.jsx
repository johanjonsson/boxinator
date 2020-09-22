import React from 'react';
import { SketchPicker } from 'react-color';
import { boxService } from '../services/boxService';
import './BoxSetup.css';

const positiveNumberRegex = RegExp(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)

export class BoxSetup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            box: {
                name: '',
                weight: '',
                country: '',
                color: 0
            },
            formattedRgb: '',
            errors: {
                weight: '',
                required: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        const { box } = this.state;
        let errors = this.state.errors;

        switch (name) {
            case 'weight':
                errors.weight = this.validateWeight(value);
                if (errors.weight !== '') {
                    value = '0'
                }
                break;
            default:
                break;
        }

        this.setState({
            box: {
                ...box,
                [name]: value
            }
        });
    }

    validateWeight(value) {
        if (value !== '') {
            if (!positiveNumberRegex.test(value)) {
                return 'Only Positive Numbers Allowed!';
            }
        }
        return '';
    }

    handleColorChange(e) {
        const { box } = this.state;
        var rgb = "(" + e.rgb.r.toString() + ", " + e.rgb.g.toString() + ", " + e.rgb.b.toString() + ")"
        console.log(rgb)
        this.setState({
            box: {
                ...box,
                color: e.rgb
            }
        });
        this.setState({
            formattedRgb: rgb
        })
    }

    handleSubmit() {
        const { box, formattedRgb, errors } = this.state;
        var name = box.name;
        var weight = box.weight;
        var country = box.country;
        var color = formattedRgb
        if (this.validateForm(box)) {
            var jsonBox = JSON.stringify({ name, weight, country, color })
            boxService.addBox(jsonBox)
            this.setState({
                errors: {
                    ...errors,
                    required: ""
                }
            })
        }
        else {
            this.setState({
                errors: {
                    ...errors,
                    required: "All fields need an value!"
                }
            }, () => {
                setTimeout(function () {
                    this.setState({
                        errors: {
                            ...errors,
                            required: ""
                        }
                    })
                }.bind(this), 3000);
            })
        }
    }

    validateForm(box) {
        const { formattedRgb, errors } = this.state;
        let valid = true;

        if (!box.name && !box.weight && !box.country && !formattedRgb) {
            valid = false;
        }
        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    canDisplayErrorCode() {
        const { errors } = this.state;

        if (errors.required.length === 0 && errors.weight.length > 0) {
            return true;
        }

        return false
    }

    render() {
        const { box, errors } = this.state
        return (

            <div className="setup-box-wrapper">
                <div className="top-section">
                    <p className='setup-box-title'>Setup Box</p>
                    <div>
                        {this.canDisplayErrorCode() &&
                            <span className='error'>{errors.weight}</span>}
                    </div>
                    <div>
                        {errors.required.length > 0 &&
                            <span className='error'>{errors.required}</span>}
                    </div>
                </div>
                <div className="setup-field-row">
                    <div className="setup-field">
                        <div>
                            <input className="setup-name-field" placeholder="Name" name="name" type="text" value={box.name} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className={errors.weight.length > 0 ? 'setup-field textbox-error' : 'setup-field'}>
                        <div>
                            <input className="setup-name-field" placeholder="Weight" name="weight" value={box.weight} onChange={this.handleChange}></input>
                        </div>
                    </div>
                </div>
                <div className="setup-field-row">
                    <div className="setup-color-field">
                        <p>Box Color</p>
                        <SketchPicker
                            name="color"
                            color={box.color}
                            onChangeComplete={e => this.handleColorChange(e)} />
                    </div>
                    <div className="setup-field">
                        <select className="setup-name-field" placeholder="Country" name="country" value={box.country} onChange={this.handleChange}>
                            <option value="">Country</option>
                            <option value="Australia">Australia</option>
                            <option value="Brazil">Brazil</option>
                            <option value="China">China</option>
                            <option value="Sweden">Sweden</option>
                        </select>
                    </div>
                </div>
                <div className="button-wrapper">
                    <button className="add-box-button" onClick={this.handleSubmit}>Save Box</button>
                </div>
            </div>
        )
    }
}