import React from 'react'

export default function App() 
const [dogPic, setDogPic] = useState(null);

useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      setDogPic(data.message);
    });
}, []);
// use an empty dependencies array, so we only run the fetch request ONCE

if (!dogPic) return <p>Loading...</p>;

return <img src={dogPic} alt="A Random Dog" />;



