import React, { Component } from 'react';
import OutlineInput from './components/OutlineInput';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';

const styles = {
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'start',
        marginTop: '25px'
    },
    textContainer: {
       margin: '40px'
    },
    countBlack:{
        fontSize: '40px',
        marginLeft: '10px',
        marginBottom: '10px',
        color: 'black'
    },
    countRed: {
        fontSize: '40px',
        marginLeft: '10px',
        marginBottom: '10px',
        color: 'red'
    }
 };
   
 let go = true;
 let reset = false;
 
 class MyTimer extends Component {


   constructor(props) {
      super(props);
 
      this.state = {
          time: '',
          counter: '',
          timestamp: ''
       }
 
      this.onTimeChange = this.onTimeChange.bind(this);
      this.onPlay = this.onPlay.bind(this);
      this.onPause = this.onPause.bind(this);
      this.onStop = this.onStop.bind(this);
      this.onReturn = this.onReturn.bind(this);
   }
 
   static getDerivedStateFromProps(props, state){
       console.log('get time from props', props, state);
       console.log('   ');
       return null;
   }
 
   componentDidMount() {
       console.log('component did mount');
       setInterval( () => this.decrement(),1000);
   }

   increment() {
       if(this.state.counter > 0 && go){
            this.setState({
                counter: this.state.counter + 1
            })
        }
        if(this.state.counter > 0 && !go && !reset){
            this.setState({
                time: this.state.counter
            });
        }
    }
    decrement() {
        if(this.state.counter > 0 && go){
            this.setState({
                counter: this.state.counter - 1
            })
        }
        if(this.state.counter > 0 && !go && !reset){
            this.setState({
                time: this.state.counter
            });
        }
    }
 
   componentDidCatch(error, info){
       console.log('catching error ', error.message);
       console.log('    ');
   }
 
   onTimeChange(event){
       this.setState({
         time: event.target.value
       });
   }

   onPlay(){
       go = true;
       reset = false;
       this.setState({
         counter: this.state.time
       });
       
   }

   onPause(){
        go = false;
        reset = false;
   }

   onStop(){
        this.setState({
            time: "",
            counter: "",
            timestamp: "10"
        });
        reset = true;
   }

   onReturn(event){
        const key = event.keyCode || event.which;
        if (key === 13) {
            this.onPlay();
        }
   }

   render() {
       return (
         <div key={this.state.timestamp}>
           <div className="App">
               <h1>TIMER</h1>
           </div>
           
           <div style={this.state.counter <= '10' && this.state.counter >= '0' ? styles.countRed : styles.countBlack}>COUNTDOWN {this.state.counter}</div>
           <div style={styles.inputContainer}>
            <OutlineInput
                value={this.state.time} 
                type="text"
                onChange={this.onTimeChange} 
                onKeyPress={this.onReturn} 
            />
           </div>
           <div style={styles.buttonContainer}>
            <CircleButton
                onClick={this.onPlay}
                label="Play"
                icon="Play"
            />
            <IconButton
                onClick={this.onStop}
            />
            <CircleButton
                onClick={this.onPause}
                label="Pause"
                icon="Pause"
            />
           </div>
         </div>
       ) 
   }
 
 }
  
  export default MyTimer;
