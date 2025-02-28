import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {useLocation} from "react-router-dom"

const AnalysisResults = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({ total: 0, agree: 0, disagree: 0, neutral: 0 });
  const [keywords, setKeywords] = useState([]);

  const location=useLocation();
  const receiveData=location.state;
  const sData=receiveData.saveData;
  const m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const currentMonth=Number(new Date().getMonth());
  console.log(sData);
  useEffect(()=>{
    const a=sData.Agree;
    const d=sData.Disagree;
    const c=sData.Neutral;
    const t=a+d+c;
    setStats({total:t,agree:a,disagree:d,neutral:c});
    setKeywords(["amazing"],setData.keywords);

    
    /*console.log(sData.Months[1]);
    const dummy=[
        { month: "Jan", comments: 200 },
        { month: "Feb", comments: 100 },
        { month: "Mar", comments: 50 },
        { month: "Apr", comments: 150 },
      ];*/
      const monthdata=[];
    for(let i=0;i<=currentMonth;i++)
    {
    monthdata.push({month:m[i],comments:sData.Months[i]});
    }
    setData(monthdata);
  },[])

 

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 p-4">
      <h2 className="mb-4">Analysis Results</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card bg-secondary p-3">
            <h5>Sentiment Distribution</h5>
            <div>
              <p>Agree {(stats.agree)*100/(stats.total)}%</p>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: `${stats.agree}%` }}></div>
              </div>
              <p>Disagree {(stats.disagree)*100/(stats.total)}%</p>
              <div className="progress">
                <div className="progress-bar bg-danger" style={{ width: `${stats.disagree}%` }}></div>
              </div>
              <p>Neutral {(stats.neutral)*100/(stats.total)}%</p>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: `${stats.neutral}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card bg-secondary p-3">
            <h5>Comment Statistics</h5>
            <p>Total Comments: <strong>{stats.total}</strong></p>
            <p className="text-success">Agree: {stats.agree}</p>
            <p className="text-danger">Disagree: {stats.disagree}</p>
            <p className="text-primary">Neutral: {stats.neutral}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card bg-secondary p-3">
            <h5>Monthly Distribution</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="comments" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card bg-secondary p-3">
            <h5>Top Keywords</h5>
            <div className="d-flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span key={index} className="badge bg-light text-dark">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AnalysisResults;
