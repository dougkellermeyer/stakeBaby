import './App.css';
import { useState } from 'react';

function App() {

  const [spec, setSpec] = useState({
    cpu: "",
    ram: "",
    storage: "",
    os: "",
    serverCount: "",
    speed: ""
  })

  const sumbitSpecs = (e) => {
    console.log(spec);
    e.preventDefault();
  }

  //TODO make generic handler that is dynamic to setState/spec
  const handleCpuChange = (e) => {
    console.log(e.target.value);
    setSpec({
      ...spec,
      cpu: e.target.value,
    })
    e.preventDefault();
  };

  const handleRamChange = (e) => {
    console.log(e.target.value);
    setSpec({
      ...spec,
      ram: e.target.value,
    })
    e.preventDefault();
  };

  const handleStorageChange = (e) => {
    console.log(e.target.value);
    setSpec({
      ...spec,
      storage: e.target.value,
    })
    e.preventDefault();
  };

  const handleOsChange = (e) => {
    console.log(e.target.value);
    setSpec({
      ...spec,
      os: e.target.value,
    })
    e.preventDefault();
  };

  const handleServerCountChange = (e) => {
    console.log(e.target.value);
    setSpec({
      ...spec,
      serverCount: e.target.value,
    })
    e.preventDefault();
  };

  const handleSpeedChange = (e) => {
    console.log(e.target.value);
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
        <p>Input your computer's specs or choose a protocol to view your optimal staking setup. </p>
      </header>
      <div className="spec-selectors-wrapper">
        <form onSubmit={sumbitSpecs} className="spec-selectors-form">
          <div className="spec-select-child-wrapper">
            <label htmlFor="cpu-select">CPU (cores) </label>
            <select value={spec.cpu} onChange={handleCpuChange} name="spec.cpu" id="cpu-select">
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
            <select value={spec.ram} onChange={handleRamChange} name="ram" id="ram-select">
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
            <select value={spec.storage} onChange={handleStorageChange} name="storage" id="storage-select">
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
              <option value="Windows">Windows</option>
              <option value="Mac">Mac</option>
              <option value="Linux">Linux</option>
            </select>
          </div>
          <div className="spec-select-child-wrapper">
            <label htmlFor="servers-select">Number of computers/servers available </label>
            <select value={spec.serverCount} onChange={handleServerCountChange} name="servers" id="servers-select">
              <option value="">Select a value</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="spec-select-child-wrapper">
            <label htmlFor="internet-speed-select">Internet Speed (optional) </label>
            <select value={spec.speed} onChange={handleSpeedChange} name="speed" id="internet-speed-select">
              <option value="">Select a value</option>
              <option value="10">10 MB/s</option>
              <option value="20">20 MB/s</option>
              <option value="30">50 MB/s</option>
              <option value="40">80 MB/s</option>
              <option value="50">100 MB/s</option>
              <option value="60">200+ MB/s</option>
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
