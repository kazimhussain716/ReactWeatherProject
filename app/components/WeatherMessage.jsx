var React = require('react');
// var WeatherMessage = React.createClass({
//    render : function (){
//     var { temp,location } = this.props;
//        return(
//         <div>
//           <h2>It is {temp} in {location}.</h2>
//         </div>
//         )
//    }
// });

var WeatherMessage = ({temp,location}) => {
    // var { temp,location } = props;
       return(
        <div>
          <h2>It is {temp} in {location}.</h2>
        </div>
        )

}
module.exports = WeatherMessage;