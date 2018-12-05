import React, { Component } from 'react';
import axios from 'axios';

class AddItem extends Component {
    state = {
        images: [],
        file: '',
        filename: '',
        filetype: '',
        img: ''
    };

    handlePhoto = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onload = (photo) =>{
            this.setState({
                file: photo.target.result,
                filename: file.name,
                filetype: file.type,
                img:'',
            });
        };
        reader.readAsDataURL(file);
    };

    sendPhoto = () => {
        return axios.post('/api/s3', this.state).then(response => {
            this.setState({
                image: response.data.Location
            });
        });
    };

    render () {
        return (
            <div className='addItem__container'>
                <div>AddItem</div>
                <input 
                    type='file'
                    onChange={this.handlePhoto}
                />
                <button
                    onClick={this.sendPhoto}
                >Upload</button>
                <img src={this.state.image} alt=''/>
            </div>
        )
    }
}

export default AddItem;