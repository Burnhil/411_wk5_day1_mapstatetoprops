//import connect from react and cars component
import {connect} from 'react-redux';
import Car from '../components/Car.js';

//create mapStateToProps cars
const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car);