import BackedBy from "../components/BackedBy"
import Intro from "../components/Intro"
import LearnAndEarn from "../components/LearnAndEarn"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Subscribe from "../components/Subscribe"




const App = () => {
  return (
    <div className='font-'>
      <Navbar />
      <Intro />
      <Skills />
      <LearnAndEarn />
      <Subscribe />
      <BackedBy />
    </div>
  )
}


export default App