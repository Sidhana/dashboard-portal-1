import React from 'react';
import './students.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import arrow from '../../assets/images/arrow.png'


function Student_csv(){
    
    return (
        <div className="admin-content">
           <div className="file container">
               <div className="file_upload">
                    <div className="fu-content-wrapper">
                        <div className="fu-empty-container">
                        <div className="upload-arrow"><img className="imge" src={arrow}></img></div>
                            <div className="upload-msg">
                                You can drag and drop csv file here.
                                <br/>     
                            </div>
                        </div>
                    </div>
                    
               </div>
               <div className="row">
                <div className="col-xl-8 col-lg-6 col-md-4"></div>
               <div className="buttons col-xl-4 col-lg-6 col-md-">
                    <Button className="upload">Upload</Button>
                    <Button className="cancel">Cancel</Button>
                </div>
                </div>
            </div>
           
        </div>
    )
}

export default Student_csv;