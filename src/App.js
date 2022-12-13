import './App.css';
import { useState } from 'react';
import { matchProtocol } from './utils';

function App() {

  const [spec, setSpec] = useState({
    cpuCores: "",
    ram: "",
    storage: "",
    os: "",
    serverCount: "",
    speed: ""
  });

  const [matches, setMatches] = useState([]);

  const sumbitSpecs = (e) => {
    console.log(spec);
    setMatches(matchProtocol(spec))
    e.preventDefault();
  }

  console.log(matches);

  //TODO make generic handler that is dynamic to setState/spec
  const handleCpuCoresChange = (e) => {
    setSpec({
      ...spec,
      cpuCores: e.target.value,
    })
    e.preventDefault();
  };
  const handleRamChange = (e) => {
    setSpec({
      ...spec,
      ram: e.target.value,
    })
    e.preventDefault();
  };
  const handleStorageChange = (e) => {
    setSpec({
      ...spec,
      storage: e.target.value,
    })
    e.preventDefault();
  };
  const handleOsChange = (e) => {
    setSpec({
      ...spec,
      os: e.target.value,
    })

    e.preventDefault();
  };
  const handleServerCountChange = (e) => {
    setSpec({
      ...spec,
      serverCount: e.target.value,
    })
    e.preventDefault();
  };
  const handleSpeedChange = (e) => {
    setSpec({
      ...spec,
      speed: e.target.value,
    })
    e.preventDefault();
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Stake Baby!</h1>
        <p>Input your computer's specs or choose a protocol to view your optimal staking setup.
        </p>
      </header>
      {/* TODO Move form into component and control its state here*/}
      <div className='matches-wrapper'>
        {matches.length > 0 ?
          <p>Matches: {matches.map(match=>match.protocolName + " ")}</p> : null
        }
      </div>
      <div className="spec-selectors-wrapper">
        <form onSubmit={sumbitSpecs} className="spec-selectors-form">
          <div className="spec-select-child-wrapper">
            <label htmlFor="servers-select">Number of computers/servers available </label>
            <select value={spec.serverCount} onChange={handleServerCountChange}
              name="servers" id="servers-select">
              <option value="">Select a value</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="spec-select-child-wrapper">
            <label htmlFor="cpuCores-select">CPU (cores) </label>
            <select value={spec.cpuCores} onChange={handleCpuCoresChange}
              name="spec.cpuCores" id="cpuCores-select">
              <option value="">Select a value</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10+</option>
            </select>
          </div>
          <div className="spec-select-child-wrapper">
            <label htmlFor="ram-select">RAM </label>

            <select value={spec.ram} onChange={handleRamChange} name="ram" id="ram-
select">

              <option value="">Select a value</option>
              <option value="2">2GB</option>
              <option value="4">4GB</option>
              <option value="8">8GB</option>
              <option value="16">16GB</option>
              <option value="32">32GB</option>
              <option value="64">64GB+</option>

            </select>
          </div>
          <div className="spec-select-child-wrapper">
            <label htmlFor="storage-select">Storage </label>
            <select value={spec.storage} onChange={handleStorageChange} name="storage"
              id="storage-select">
              <option value="">Select a value</option>
              <option value="50">50GB</option>
              <option value="100">100GB</option>
              <option value="200">200GB</option>
              <option value="500">500GB</option>
              <option value="1000">1TB</option>
              <option value="2000">2TB+</option>
            </select>
          </div>
          <div className="spec-select-child-wrapper">
            <label htmlFor="os-select">Operating System </label>
            <select value={spec.os} onChange={handleOsChange} name="os" id="os-select">
              <option value="">Select a value</option>
              <option value="windows">Windows</option>
              <option value="mac">Mac</option>
              <option value="linux">Linux</option>
            </select>
          </div>
          <div className="spec-select-child-wrapper">
            <label htmlFor="internet-speed-select">Internet Speed (optional) </label>
            <select value={spec.speed} onChange={handleSpeedChange} name="speed"
              id="internet-speed-select">
              <option value="">Select a value</option>
              <option value="10">10 MB/s</option>
              <option value="20">20 MB/s</option>
              <option value="50">50 MB/s</option>
              <option value="80">80 MB/s</option>
              <option value="100">100 MB/s</option>
              <option value="200">200+ MB/s</option>
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
export default App;