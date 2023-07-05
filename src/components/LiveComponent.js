import {useState, useEffect} from 'react'
const LiveComponent = () => {
    const [lcData, setLCData] = useState({})
    const getData = async() =>{
        const data = await fetch("https://leetcode-stats-api.herokuapp.com/0xItachi");
        const json = await data.json();
        // console.log(json)
        setLCData(json)
    }
    useEffect(()=>{
        getData()
    }, [])
  return (
    <div className="live_stats">
      <div className="live_stats_left">
        <p>Leetcode Stats</p>
      </div>
      <div className="live_stats_right">
        <p><span>Username:</span> 0xItachi</p>
        <p><span>Ranking:</span> {lcData.ranking}</p>
        <p><span>Total Solved:</span> {lcData.totalSolved}</p>
        {/* <p><span>Total Easy Solved:</span> {lcData.easySolved} / {lcData.totalEasy}</p>
        <p><span>Total Medium Solved:</span> {lcData.mediumSolved} / {lcData.totalMedium}</p>
        <p><span>Total Hard Solved:</span> {lcData.hardSolved} / {lcData.totalHard}</p>
        <p><span>Acceptance Rate:</span> {lcData.acceptanceRate}</p> */}
      </div>
    </div>
  );
};
export default LiveComponent;
