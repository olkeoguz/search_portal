import { useContext } from 'react';
import logo from '../assets/jpg1.png';
import './home.scss';
import { ResultListContext } from '../context/ResultList';
import Results from '../components/Results';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { text, suggestions, textChangedHandler } =
    useContext(ResultListContext);

  const history = useHistory();

  return (
    <div className='home'>
      <div className='logoContainer'>
        <img src={logo} alt='tesodev' />
        <span className='logoDesc'>Search web app</span>
      </div>

      <div className='searchContainer'>
        <input
          type='text'
          placeholder='Search'
          onChange={(e) => textChangedHandler(e.target.value)}
          value={text}
          autoFocus
        />
        <button className='search' onClick={() => history.push('/list')}>
          Search
        </button>
        <Results suggestions={suggestions} />
      </div>
    </div>
  );
};

export default Home;
