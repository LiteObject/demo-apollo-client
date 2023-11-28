import { useEffect } from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';

export type Country = {
  code: string;
  name: string;
  native: string;
  capital: string;
}

const GET_DATA = gql`
{
  countries {
    code
    name
    native
    capital
  }
}`;

function App() {

  const { loading, error, data } = useQuery(GET_DATA);
  useEffect(() => {
    console.log(loading, error, data);
  });

  return (
    <div className="App">
      {data ? data.countries.map((country: Country) => {
        return (
          <p key={country.code}>
            {country.name + '/' + country.native}           
          </p>
        )
      }) : null}
    </div>
  );
}

export default App;
