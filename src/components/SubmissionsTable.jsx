import React from "react";

const SubmissionsTable = ({ submissions }) => {
  return (
    <div className="submissions-table">
      <h3>Recent Submissions</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.phone}</td>
              <td>{submission.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionsTable;