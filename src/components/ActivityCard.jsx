import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ title, description, participants, ...props }) => {
  return (
    <div className="activity-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {participants && participants.length > 0 && (
        <div className="participants-section">
          <h3>Participantes</h3>
          <ul className="participants-list">
            {participants.map((p, idx) => (
              <li key={idx} className="participant-item">
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;

/* ActivityCard.css */
.activity-card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0;
  background-color: #fff;
}

.participants-section {
  margin-top: 16px;
}

.participants-list {
  list-style-type: disc;
  padding-left: 20px;
}

.participant-item {
  margin: 4px 0;
}