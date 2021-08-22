import { Component } from 'react';
import './BusinessList.css';
import Business from './Business';

class BusinessList extends Component {
    render(){
        console.log(this.props)
        return(
            <div className="BusinessList">
                {this.props.businesses.map(
                    business => <Business business={business} key={business.id}/>)
                }
            </div>
        )
    }
}

export default BusinessList;