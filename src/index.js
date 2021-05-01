import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import debounce from 'lodash.debounce';
import SearchBar from './components/search_bar';
import omdbSearch from './omdb-api';
import Nomination from './components/nomination';
// import VideoList from './components/video_list';
// import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: [],
      searched: null,
    };
    this.search = debounce(this.search, 300);
    this.search('');
  }

  search = (text) => {
    omdbSearch(text).then((item) => {
      console.log(item);
      if (item.Title != null) {
        this.setState({
          searched: {
            title: item.Title, year: item.Year, plot: item.Plot, poster: item.Poster,
          },
        });
      } else {
        this.setState({ searched: null });
      }
    });
  }

  addNom = () => {
    console.log(this.state.selections.length);
    const selectionsCopy = this.state.selections;
    if (selectionsCopy.length < 5) {
      selectionsCopy.push({ title: this.state.searched.title, poster: this.state.searched.poster });
      this.setState({ selections: selectionsCopy });
    } else {
      alert('There are already 5 nominations');
    }
  }

  renderButton = (movie) => {
    if (this.state.searched == null) {
      return (
        <div />
      );
    }
    const { title } = movie;
    let alreadyIn = false;
    for (const selection of this.state.selections) {
      if (selection.title == title) {
        alreadyIn = true;
      }
    }
    if (!alreadyIn) {
      return (
        <div className="add-nom-holder">
          <button type="button" className="add-nom" onClick={this.addNom}>Add Nomination</button>
        </div>
      );
    } else {
      return (
        <div className="add-nom-holder">
          <button type="button" className="dont-add-nom">Already a Nomination</button>
        </div>
      );
    }
  }

  renderSearched = () => {
    if (this.state.searched != null) {
      return (
        <div>
          <h2>{this.state.searched.title}</h2>
          <h3>{this.state.searched.year}</h3>
          <div className="img-holder">
            <img className="img" src={this.state.searched.poster} />
          </div>
          <h3>Plot</h3>
          <div className="plot-holder">
            <div className="plot">{this.state.searched.plot}</div>
          </div>
        </div>
      );
    } else {
      return (
        <h5>Nothing matched your search</h5>
      );
    }
  }

  removeNom = (title) => {
    const selectionsCopy = this.state.selections;
    let toDelete = 0;
    for (let i = 0; i < selectionsCopy.length; i += 1) {
      if (selectionsCopy[i] == title) {
        toDelete = i;
      }
    }
    selectionsCopy.splice(toDelete, 1);
    this.setState({ selections: selectionsCopy });
  }

  render() {
    return (
      <div>
        <h1>OMDB Movie Nominator</h1>
        <h2>Nominations</h2>
        {this.state.selections.length == 0 && <div className="blank-space"><h3>You currently have no nominations</h3></div> }
        <div className="noms">
          {this.state.selections.map((movie) => {
            return <Nomination movie={movie} remove={this.removeNom} />;
          })}
        </div>
        {this.state.selections.length == 5 && <div className="five-noms"><h3 className="congrats">Congrats! You have nominated 5 films!! Remove one to add another.</h3></div> }
        <SearchBar onSearchChange={this.search} />
        {/* <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} /> */}
        {this.renderSearched()}
        {this.renderButton(this.state.searched)}

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
