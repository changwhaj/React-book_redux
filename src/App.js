import React from 'react';
import './App.css';
import { Segment, Grid } from 'semantic-ui-react';

import BookListContainer from './container/BookListContainer';
import BookDetailContainer from './container/BookDetailContainer';
import SearchBar from './view/SearchBar';

function App() {
  return (
    <div className="App">
      <Segment>
        <SearchBar onSearchByTitle={() => {}} />
      </Segment>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Segment>
            <BookListContainer />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <BookDetailContainer />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
