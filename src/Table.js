import React, { useState, useEffect } from 'react';
import './table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Table = () => {
  const [data, setData] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [newRemark, setNewRemark] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.jsonbin.io/v3/b/667fa346e41b4d34e40aa598/");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.record); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it only runs once on mount

  const handleEditClick = (id, currentRemark) => {
    setEditRowId(id);
    setNewRemark(currentRemark);
  };

  const handleSaveClick = (id) => {
  
    const updatedData = data.map(item =>
      item.id === id ? { ...item, remark: newRemark } : item
    );
    setData(updatedData);
    setEditRowId(null);
    setNewRemark('');
  };
  
  
  

  const handleAssignClick = (id) => {
    const nameOfId = data.find(item => item.id === id)?.name;
    setData(data.map(item => item.id === id ? { ...item, assignedTo: nameOfId } : item));
  };

  // Limit the number of rows to 5
  const limitedData = data.slice(0, 5);

  return (
    <>
    <div className='table-container'>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S. No</th>
            <th scope="col">Name</th>
            <th scope="col">State</th>
            <th scope="col">Phone</th>
            <th scope="col">Services</th>
            <th scope="col">Remarks</th>
            <th scope="col">Assign</th>
          </tr>
        </thead>
        <tbody>
          {limitedData.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.state}</td>
              <td>{item.assignedTo ? item.phone : '**********'}</td>
              <td>{item.service}</td>
              <td className='remarks'>
  {editRowId === item.id ? (
   <>
   <textarea 
     value={newRemark} 
     onChange={(e) => setNewRemark(e.target.value)} 
   />
   <button 
     className="btn btn-success mx-2 btn-sm" 
     onClick={() => handleSaveClick(item.id)}
   >
     Save
   </button>
 </>

  ) : (
    <>
      <span className='Remarks'>{item.remark}</span> {/* Wrap the remarks in a span for alignment */}
      <FontAwesomeIcon 
        icon={faEye} 
        onClick={() => handleEditClick(item.id, item.remark)} 
        style={{ cursor: 'pointer' }}
      />
    </>
  )}
</td>

              <td>
                {item.assignedTo ? (
                  <button className='btn btn-primary'>{item.assignedTo}</button>
                ) : (
                  <button className='btn btn-primary Assign-btn' onClick={() => handleAssignClick(item.id)}>Assign</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='Button'>
        <button className='btn btn-primary'><Link to='/Empty.js' className="page-link"><FontAwesomeIcon icon={faBackward}  /> Previous</Link></button>
        
        <ul className="pagination">
          <li className="page-item"><Link to='/Empty.js' className="page-link">Previous</Link></li>
          <li className="page-item"><Link to='/Empty.js' className="page-link">1</Link></li>
          <li className="page-item"><Link to='/Empty.js' className="page-link">2</Link></li>
          <li className="page-item"><Link to='/Empty.js' className="page-link">3</Link></li>
          <li className="page-item"><Link to='/Empty.js' className="page-link">Next</Link></li>
        </ul>
        <button className='btn btn-primary'><Link to='/Empty.js'  className="page-link">Next <FontAwesomeIcon icon={faForward}  /></Link></button>
      </div>
      </div>
    </>
  );
};

export default Table;
