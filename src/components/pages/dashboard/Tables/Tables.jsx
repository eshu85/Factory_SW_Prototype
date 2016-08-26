import React, { PropTypes, Component } from 'react';
import {NavDropdown,MenuItem, Pagination, Panel, Well, Button, PageHeader} from "react-bootstrap";

var Tables = React.createClass({

  render: function() {
    return (

      <div>
        <div className="col-lg-12"> 
          <PageHeader>Tier Board  <Button bsSize="large" bsStyle="success" className="btn-circle"><i className="fa fa-check"></i></Button> <span align="left"><Button bsStyle="primary" bsSize="large">Edit</Button></span></PageHeader> 
        </div>


      
        <div className="row">
           <div className="col-lg-4">
            <Panel header={<span><b>Target FPY >= 90%</b></span>} bsStyle="info">
            <h4>Business Case</h4>
            <h5> <b><u>Our Mission</u></b></h5>
            <p>
            Together we design,build and deliver innovative solutions and exceptioal services to create ultimate customer experience

            </p>
                    <div > <i className="fa fa-hand-o-right  "></i>   Meet Daily Output Target </div>
                    <div> <i className="fa fa-hand-o-right  "></i>   OQA = 100% Acceptance </div>
                    <div > <i className="fa fa-hand-o-right  "></i>   FPY >= 90%</div>
                   <div> <i className="fa fa-hand-o-right  "></i>   Gemba Walk (Observe,Engage,Improve)</div>
                    <div> <i className="fa  fa-hand-o-right  "></i>   No Safety Issue</div>
                    <div> <i className="fa  fa-hand-o-right  "></i>   Good 5S</div>
            </Panel>
          </div>
           <div className="col-lg-8">
            <Panel header={<span><b>Current FPY = 93%</b></span>} bsStyle="info">
             <h4>Output Status</h4>
              <div className="col-lg-6">
            <Well>
              <h5><b><u>Daily Status</u></b></h5>
              <div><i className="fa fa-hand-o-right  "></i> Target : 6</div>
              <div><i className="fa fa-hand-o-right  "></i> Yesterday : 6</div>
              <div><i className="fa fa-hand-o-right  "></i> Today : 6</div>
            </Well>
          </div>
          <div className="col-lg-6">
            <Well>
              <h5><b><u>Cummulative</u></b></h5>
              <div><i className="fa fa-hand-o-right  "></i> Monthly Target : 6</div>
              <div><i className="fa fa-hand-o-right  "></i> Acheived : 6</div>
            </Well>
          </div>
            </Panel>
          </div>
         
        </div>
        

        <div className="row ng-scope"> 
          <div className="col-lg-6"> 
            <Panel header={<span><b>Weekly FPY</b></span>} bsStyle="info">
                <div className="table-responsive"> 
                  <table className="table table-striped table-bordered"> 
                    <thead> <tr className="info"> <th>Products </th><th>Week 1 </th><th>Week 2</th><th>Week 3   </th><th>Week 4   </th><th>Remarks  </th></tr></thead>
                    <tbody> <tr> <td className="info">QS3 0.2 ml</td><td>6 </td><td>6 </td><td>6  </td><td>6  </td><td>Acheived Target  </td></tr>
                      <tr> <td className="info">QS3 0.6 ml</td><td>6 </td><td>6 </td><td>6  </td><td>6  </td><td>Acheived Target  </td></tr>
                      <tr> <td className="info">QS5 0.2 ml</td><td>6 </td><td>8 </td><td>6  </td><td>9 </td><td>Ahead Target  </td></tr>
                      <tr> <td className="info">QS5 0.6 ml</td><td>6 </td><td>2 </td><td>4  </td><td>5  </td><td>Behind Target  </td></tr>
                    </tbody>
                  </table> 
                </div> 
            </Panel>
          </div>
          <div className="col-lg-6"> 
            <Panel header={<span><b>4M Status</b></span>} bsStyle="info">
                <div className="table-responsive"> 
                  <table className="table table-striped table-bordered"> 
                    <thead> <tr className="info"> <th># </th><th>Yesterday</th><th>Today </th><th>Remarks   </th></tr></thead>
                    <tbody> <tr> <td className="info">Man </td><td>Mark </td><td>Otto </td><td>@mdo  </td></tr><tr> <td className="info">Material </td><td>Jacob </td><td>Thornton </td><td>@fat  </td></tr><tr> <td className="info">Machine </td><td>Larry </td><td>the Bird </td><td>@twitter   </td></tr>
<tr> <td className="info">Method </td><td>Larry </td><td>the Bird </td><td>@twitter   </td></tr>
                    </tbody>
                  </table> 
                </div>
            </Panel>
          </div>
        </div>

        <div className="row ng-scope"> 
          
          <div className="col-lg-12"> 
            <Panel header={<span><b>Issue Tracking </b></span>} bsStyle="info" >
                <div className="table-responsive"> 
                  <table className="table"> 
                    <thead> <tr> <th>Date </th><th>Issue/Root cause </th><th>Action(s) </th><th>Who   </th> <th>Due</th><th>Status</th></tr></thead>
                    <tbody> <tr className="danger"> <td>1 </td><td>Mark </td><td>Otto </td><td>@mdo  </td><td>@mdo  </td><td>@mdo  </td></tr></tbody>
                  </table> 
                </div>
                <Button bsStyle="primary" bsSize="small" align="right">Add Issue</Button>
            </Panel>
          </div>
        </div>

      </div> 
    );
  }

});

export default Tables;