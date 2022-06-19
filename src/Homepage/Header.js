import React from "react";
import { useStateValue } from "../Stateprovider";
import { Link } from "react-router-dom";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <h2>FreeLancing</h2>
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/Tutorial">
          <h4 style={{color:'black',
        display: 'inline-block',
        padding: '15px 30px 12px 30px',
        /* margin-top: 4px; */
        textDecoration: 'none',
        color: '#000000',
        borderLeft: '1px solid rgba(0, 0, 0, 0.082)',
        fontWeight: 600,
        textAlign: 'center',
        
        }}>Tutorial</h4></Link>
          <Link to="/postproject">
          <h4 style={{color:'black',
        display: 'inline-block',
        padding: '15px 30px 12px 30px',
        /* margin-top: 4px; */
        textDecoration: 'none',
        color: '#000000',
        borderLeft: '1px solid rgba(0, 0, 0, 0.082)',
        fontWeight: 600,
        textAlign: 'center',
        
        }} >Job Posting</h4></Link>
          <Link to="/addfreelancing">
            <h4 style={{color:'black',
          display: 'inline-block',
          padding: '15px 30px 12px 30px',
          /* margin-top: 4px; */
          textDecoration: 'none',
          color: '#000000',
          borderLeft: '1px solid rgba(0, 0, 0, 0.082)',
          fontWeight: 600,
          textAlign: 'center',
          }}>Add FreeLancing</h4>
          </Link>
        </div>
      </div>
      
            
    </div>
  );
}

export default Header;
