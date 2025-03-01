import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const apiUrl = String(import.meta.env.VITE_APP_PATH);

const YouTubeCommentsAnalyzer = () => {
  //dotenv.config();
  const [videoUrl, setVideoUrl] = useState("");
  const navigate=useNavigate();
  //axios.defaults.withCredentials=true;

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleAnalyze = async() => {
    console.log(apiUrl);
    const data=await axios.post('https://you-tube-comment-analysis-git-d8f21a-gautams-projects-6a7f62ca.vercel.app/api/add',{url:JSON.stringify(videoUrl)},{
      headers:{
        'Content-Type':'application/json'
      }
    });
    if(data.data.message==="Data saved successfully")
    {
    navigate("/result",{state:data.data});
    }
    else{
      alert("Invalid url");
    }
    
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center text-primary mb-3">YouTube Comments Analyzer</h3>
        <div className="mb-3">
          <label className="form-label">YouTube Video URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="https://youtube.com/watch?v=..."
            value={videoUrl}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleAnalyze}>
          Analyze Comments &rarr;
        </button>
      </div>
    </div>
  );
};

export default YouTubeCommentsAnalyzer;
