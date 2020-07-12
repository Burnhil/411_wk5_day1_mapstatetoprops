//import connect from react and home component
import {connect} from 'react-redux';
import Home from '../components/Home.js';

//create mapStateToProps for cars
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
    }
}

export default connect(mapStateToProps)(Home);

