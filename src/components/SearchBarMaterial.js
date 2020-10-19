import React, { useContext, useState } from 'react';
import './SearchBarMaterial.css';
import MovieContext from '../context/movies/MovieContext';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    height: '1.5rem',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 0.9,
    borderRadius: '2rem',
    fontSize: '0.8rem',
  },
  Button: {
    flex: 0.1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchBarMaterial() {
  const classes = useStyles();
  const movieContext = useContext(MovieContext);
  const { searchMovies } = movieContext;
  const history = useHistory();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query, 1);
    history.push('/searchResults');
  };

  return (
    <Paper
      component='form'
      className={classes.root}
      onSubmit={(e) => handleSearch(e)}
    >
      <InputBase
        className={classes.input}
        placeholder='Search for a movie or tv show...'
        inputProps={{ 'aria-label': 'search google maps' }}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Divider className={classes.divider} orientation='vertical' />
      <Button
        type='submit'
        className={classes.Button}
        aria-label='search'
        disabled={query.length === 0}
      >
        <SearchIcon />
      </Button>
    </Paper>
  );
}

export default SearchBarMaterial;
