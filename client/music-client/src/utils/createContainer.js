import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

export default function(component,key,actions){
    const mapStateToProps = (store) => {
        console.log(store)
        return store[key]?store[key]:store
    }
    const mapDispatchToProps=(dispatch)=>{
        return {...bindActionCreators(actions,dispatch)}
    }
    return connect(mapStateToProps,mapDispatchToProps)(component)
}