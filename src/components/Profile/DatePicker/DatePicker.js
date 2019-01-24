import React, {Component} from 'react'
import styles from './DatePicker.scss'
import Calendar from 'react-bootstrap-calendar/components/Calendar'
class DatePicker extends Component {
    daySelected = m => {
        console.log(m.toString);
    }
    render(){
        return <Calendar />
        
    }
    
}

export default DatePicker