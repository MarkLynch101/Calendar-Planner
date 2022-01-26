import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';
import './EventInput.css';

function EventInput() {

    let history = useHistory();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [note, setNote] = useState('');

  
    const postData = () => {
        axios.post('https://61b89d5838f69a0017ce5c5e.mockapi.io/eventdb',{
            title, location,
            date, time, note
        }).then(() => {
            history.push('/');
            refreshPage();
        })
    }
    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div className={"EventInput"}>
            <Form className="modal">
                New Event
                <div className='header'>
                    <Form.Field >
                        <input 
                            className='item'
                            name='title' 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder='Title' 
                        />
                    </Form.Field>
                    <Form.Field>
                        <input 
                            className='item'
                            name='location' 
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder='Location' 
                        />
                    </Form.Field>
                    <Form.Field >
                        <input 
                            className='item'
                            name='date' 
                            type='date'
                            onChange={(e) => setDate(e.target.value)}
                            placeholder='Date' 
                        />
                    </Form.Field>
                    <Form.Field >
                        <input
                            className='item'
                            name='location' 
                            type='time'
                            onChange={(e) => setTime(e.target.value)}
                            placeholder='Time' 
                        />
                    </Form.Field>
                    <Form.Field >
                        <textarea
                            className='item'
                            name='location' 
                            type='textarea'
                            onChange={(e) => setNote(e.target.value)}
                            placeholder='Notes...' 
                            rows="10"
                        />
                    </Form.Field>
                </div>
                <Button 
                    className='submit'
                    type='submit' 
                    onClick={postData}> 
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EventInput