import './singleResult.scss';

const SingleResult = ({ result }) => {
  return (
    <div className='singleResult'>
      <div className='row'>
        <span className='city-country'>{`${result.country} ${result.city}`}</span>
        <span className='email'>Email: {result.email}</span>
      </div>
      <span className='name-year'>{`${result.name}  ${result.date}`}</span>
    </div>
  );
};

export default SingleResult;
