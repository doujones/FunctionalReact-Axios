import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Boswell = {
    company: null,
    followers: null
}
function App(){
  const [page, setPage] = useState(Boswell);

  async function getPage(){
   const response = await axios('https://api.github.com/users/doujones');
   const json = await response.json()

   setPage({
     company: json.company,
     followers: json.followers
   })
  }

  useEffect(() => {
    getPage()
  }, [])
  return(
    <div className="App">
    <header className="App-header">
    <h2>Fetch Data</h2>
    <h3>{`company: ${page.company}, followers: ${page.followers}`}</h3>
    </header>
    </div>
  )
}

export default App