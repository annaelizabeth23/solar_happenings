import React, {Component} from 'react';
import axios from 'axios';
import { PassThrough } from 'stream';
import Horizontal from '../components/Horizontal.js';

export default class Solar_Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            long: "",
            sunrise: "",
            sunset: "",
            entry: "",
            solarHappenings: [],
            editting: false,
            samplePost: [],
          }
          this.getTimes = this.getTimes.bind(this);
          this.entrySubmit = this.entrySubmit.bind(this);
          this.createEntry = this.createEntry.bind(this);
          this.componentDidMount = this.componentDidMount.bind(this);
          
    }

    getTimes() {
        let {lat, long} = this.state; 
          axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`).then((response) => {   
          this.setState({sunrise: response.data.results.sunrise, sunset: response.data.results.sunset})
            });
        }

    createEntry() {
        let {times} = this.state;
        let obj = {lat: this.state.lat, long: this.state.long, sunrise:this.state.sunrise, sunset: this.state.sunset, entry: this.state.entry};
        axios.post('http://localhost:4000/api/addEntry', obj).then((response) => {
            //new
            this.setState({solarHappenings: response.data});
        }).catch(() => console.log("failed at createEntry"))
    }

    entrySubmit() {
        let obj = {lat: this.state.lat, long: this.state.long, sunrise:this.state.sunrise, sunset: this.state.sunset, entry: this.state.entry};

        axios.post('http://localhost:4000/api/addEntry', obj).then((response) => {
        this.setState({solarHappenings: response.data});
    })
    }

    entryUpdate(id) {
        let obj = {entry: this.state.entry, id: id, sunrise: this.state.sunrise, sunset: this.state.sunset, lat: this.state.lat, long: this.state.long};
        
        axios.put('http://localhost:4000/api/updateEntry', obj).then((response) => {
        this.setState({solarHappenings: response.data})
        
    })
    }

    entryDelete(id) {
        let obj = {entry: this.state.entry, id: id, sunrise: this.state.sunrise, sunset: this.state.sunset, lat: this.state.lat, long: this.state.long};
        
        axios.delete('http://localhost:4000/api/deleteEntry', obj).then((response) => {
            this.setState({solarHappenings: response.data})
        })
    }

    //This thing edits a thing
      edit( event ) {
        const { entry } = this.state;
        const { id, edit } = this.props;
        if( event.key === "Enter" && entry.length !== 0 ) {
          edit( id, entry );
          this.setState({ editting: false });
        }
      }

      componentDidMount() {
        console.log("hi there", samplePost);
          const samplePost = {lat: this.state.lat, long: this.state.long, sunrise: this.state.sunrise, sunset: this.state.sunset, entry: this.state.entry, id: this.state.id}
          axios.get('http://localhost:4000/api/display').then((response) => {
              this.setState({samplePost:response.data});
          })
      }
    

    render() {
        let entry = this.state.solarHappenings.entry;
        const { id, time, edit, remove } = this.state;
        const { editting } = this.state;

        let s = this.state.samplePost.map((item, i) => {
            return (
            <div key = {i}><li>{`Latitude: ${item.lat}, Longitude: ${item.long}, Sunrise: ${item.sunrise}, Sunset: ${item.sunset}, My Entry: ${item.entry}`}></li></div>
        )
        })
        

        let x = this.state.solarHappenings.map((item, i) => {
            return (
                <div key = {i}><li>{`Latitude: ${item.lat}, Longitude: ${item.long}, Sunrise: ${item.sunrise}, Sunset: ${item.sunset}, My Entry: ${item.entry}`}
                
                {
                    editting
                    ?
                    <input className="all_inputs" onChange={(e) => {this.setState({entry:e.target.value})}} />
                    :
                    null
                }

                <button className="edit_button all_buttons" onClick={()=> this.setState({ editting: !this.state.editting, entry }) }>Edit</button>
                <button className="save_button all_buttons" onClick={() => this.entryUpdate(item.id)}>Save</button>
                <button className="delete_button all_buttons" onClick={() => this.entryDelete(item.id)}>Delete</button></li>
                </div>

            )
        })
        
        return(

            <div>
                <h2>Your Personal Sunset and Sunrise Journal for Practicing Mindfullness</h2>

                <h3>Step 1: Find your latitude and longitude <a href="https://www.latlong.net/" target="_blank">latlong.net</a></h3>

                <h3>Step 2: Enter it into the applicable fields below and search for the solar happenings near you</h3>
                
                <label className="input">
                    Latitude: <br /><br />
                    <input className="all_inputs"  onChange = {(e) => this.setState({lat:e.target.value})} type="text" name="latitude" />
                </label>
                
                <label className="input">
                    Longitude: <br /><br />
                    <input className="all_inputs" onChange = {(e) => this.setState({long:e.target.value})} type="text" name="longitude" />
                </label>
                
                <p>The solar happenings for your area (UTC): </p>
                <span className="timesResults">{this.state.sunrise ? `Sunrise: ${this.state.sunrise}` : ""} <br />
                {this.state.sunset ? `Sunset: ${this.state.sunset}` : ""}</span>
                
                <div className="submit-button">
                    <input className="find_button all_buttons" onClick = {(e) => this.getTimes()} type="submit" value="Find My Solar Happenings"/>
                </div>
                
                <h3>Step 3: Create Your Journal Entry</h3>

                <textarea className="all_inputs" rows="10" cols="100" onChange={(e) => {this.setState({entry:e.target.value})}}></textarea><br />
                
                <button className="add_button all_buttons" onClick = {this.entrySubmit}> Add to My Entries </button>
                
                <p>Sample Entry:</p>{s}

                <ul className="entry-list">{x}</ul>
                
            </div>
               
        )
    }
}