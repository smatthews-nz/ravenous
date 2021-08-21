import { Component } from 'react';
import './BusinessList.css';
import Business from './Business';

class BusinessList extends Component {
    render(){
        return(
            <div className="BusinessList">
                {this.props.businesses.map(
                    business => <Business business={business}/>)
                }
            </div>
        )
    }
}

export default BusinessList;