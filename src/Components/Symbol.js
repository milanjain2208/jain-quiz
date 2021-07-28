import React from "react"
import {images,tirthIndex} from "../Utility.js"
class Symbol extends React.Component {
    render() {
        const idx = this.props.currIndex
        return <img src={images[tirthIndex[idx]].default} alt="symbol"/>
    }
}
export default Symbol