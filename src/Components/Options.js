import React from "react"
import '../App.css';
class Options extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {  
        this.props.action(e.target.innerText)
    }
    render() {
        const option = this.props.option
        const selected = this.props.selected
        const currTirth = this.props.currTirth
        return <>
            <div className="flex-container">
                <div className="flex-item">
                    <button onClick={this.handleClick} style={{backgroundColor: selected && (currTirth===option[0]?"#95E8A3":"#fb7070"), color: selected && (currTirth===option[0]?"#276127":"#962424")}} disabled={selected}><h1>{option[0]}</h1></button>
                </div>
                <div className="flex-item">
                    <button onClick={this.handleClick} style={{backgroundColor: selected && (currTirth===option[1]?"#95E8A3":"#fb7070"), color: selected && (currTirth===option[1]?"#276127":"#962424")}} disabled={selected}><h1>{option[1]}</h1></button>
                </div>
                <div className="flex-item">
                    <button onClick={this.handleClick} style={{backgroundColor: selected && (currTirth===option[2]?"#95E8A3":"#fb7070"), color: selected && (currTirth===option[2]?"#276127":"#962424")}} disabled={selected}><h1>{option[2]}</h1></button>
                </div>
                <div className="flex-item">
                    <button onClick={this.handleClick} style={{backgroundColor: selected && (currTirth===option[3]?"#95E8A3":"#fb7070"), color: selected && (currTirth===option[3]?"#276127":"#962424")}} disabled={selected}><h1>{option[3]}</h1></button>
                </div>
            </div>
        </>
    }
}
export default Options;