import React from 'react'
import {connect} from 'react-redux'
import'../css/mainView.scss'; 
import {fetchMatches} from '../actions'
import BetGroup from '../Components/BetGroup'
import {ReactComponent as Refresh} from '../icons/refresh.svg'
class MainView extends React.Component{
    render(){
        return(
            <div className="mainview">
            <div className="mainview__top">
                <div className="latest">
                    <span className="circle"></span>
                    <h2>Upcoming Matches</h2>
                </div>                 
                <div className="refresh">
                    <span>Refresh</span>
                    <Refresh />
                </div>
            </div>
            <div className="mainview__matches">
                <BetGroup matches={this.props.matches}/>
            </div>
        </div>
        )
                    
        }
    }

    

//this guy would merge the redux state to the component's prop
const mapStateToProps =(state)=>{
    // console.log("moprps", state.posts)
    return {matches: state.matches}
}
//so by passing the action creator to the connet method, anytime the method is called, the action gets dispatched
//automatically
export default connect(mapStateToProps, {fetchMatches})(MainView)