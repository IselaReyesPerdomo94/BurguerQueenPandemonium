x
import CardImg from './moduleImg/index.jsx';
import Label from './label/index.jsx';

class Card extends React.Component {
    render(){
        const cardStyle = {
            backgroundColor: this.props.color,
            height: 200
        };
        return(
            <div style={cardStyle}>
                <CardImg></CardImg>
                <Label></Label>
            </div>
        )

    }
};

export default Card;