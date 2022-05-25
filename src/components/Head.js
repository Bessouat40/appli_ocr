import '../styles/head.css'

import React,{Component} from 'react';

class Head extends Component {

    title = {title : "Application d'extraction de texte dans une image ou un pdf"};

    render() {
        return (
            <div className = "title">
			    <h1>{this.title.title}</h1>
		    </div>
        )
    }
}

export default Head