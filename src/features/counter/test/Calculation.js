import { useSelector, useDispatch, connect} from 'react-redux';
 import {Add,sub} from './Test';
 import React, { Component } from 'react'
 
 class Calculation extends Component {
     constructor(props) {
         super(props)
 
         this.state = {
                  
         }
     }
 
     render() {
         return (
             <div>
                 <p>{this.props.customAction}</p>
                 <button onClick={() =>this.props.Add()}>Add</button>
                 <button onClick={() =>this.props.sub()}>Sub</button>
             </div>
         )
     }
 }

 const mapStateToProps = (state) =>{
     console.log(state);
     return state;
 }
 const mapDispatchToProps = (dispatch) => {
     return {
         Add: () => dispatch(Add()),
         sub: () => dispatch(sub())
     }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Calculation);
 

// function Calculation() {
//     const  calc= useSelector(state => state);
//     const dispatch = useDispatch();
//     return (
//         <div>
//             <p>{calc}</p>
//             <button onClick={() =>dispatch(Add())}>Add</button>
//             <button onClick={() =>dispatch(sub())}>Sub</button>
//         </div>
//     )
// }

//export default Calculation;
