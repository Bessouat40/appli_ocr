import axios from 'axios';
import FormData from 'form-data';
import React,{Component} from 'react';

class Upload extends Component {

    state = {
 
        // Initially, no file is selected
        selectedFile: null,
        reponse: 'Pas de prédiction pour le moment',
      };

    onFileChange = event => {
        let file = event.target.files[0]
        this.setState({ selectedFile: event.target.files[0]});
      };

    sendData = () => {
        const formData = new FormData();
        console.log('coucou')
        console.log(this.state.selectedFile)
        formData.append('file', this.state.selectedFile,);

        axios.post("http://localhost:8000/upload_file", 
                    formData,
                    {headers: {
                        'content-type': 'multipart/form-data'
                    }}
                    )
        .then(res =>     
        this.setState({reponse: res.data}),);
    }

    render () {
        if (this.state.reponse.type == null)
        {return (
            <section>
        <div className='text'>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.sendData}>
                Lancer la prédiction
                </button>
        </div>
        <div className='text'>
            <p>{this.state.reponse.message}</p>
        </div>
        </section>
        )
    }

        if (this.state.reponse.type == 'texte')
        {return (
            <section>
        <div className='text'>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.sendData}>
                Lancer la prédiction
                </button>
        </div>
        <div className='text'>
            <p>{this.state.reponse.message}</p>
        </div>
        </section>
        )
    }

    /*if (this.state.reponse.type == 'image')
        {
        return (
            <section>
        <div className='text'>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.sendData}>
                Lancer la prédiction
                </button>
        </div>
        <div className='text'>
        <img src={`data:image/png;base64,${this.state.reponse.message}`}/>
        </div>
        </section>
        )
    }*/}
}

export default Upload