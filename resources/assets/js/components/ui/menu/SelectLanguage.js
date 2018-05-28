import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';

class SelectLanguage extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: ''
        }
    }
    handleChange(selectedOption){
        this.setState({ selectedOption })
    }

    render() {
        const { selectedOption } = this.state
        return (
            <Select
                searchable={false}
                clearable={false}
                autosize={false}
                value={selectedOption || 'English'}
                onChange={(e) =>this.handleChange(e)}
                options={[
                    { value: 'English', label: 'English' },
                    { value: 'Germany', label: 'Germany' },
                    { value: 'Ukrainian', label: 'Ukrainian' },
                ]}
            />
        );
    }
}

export default SelectLanguage;