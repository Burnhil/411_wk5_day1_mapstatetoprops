//import connect from react and dashboard component
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard.js';

//create mapStateToProps cars/users
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard);