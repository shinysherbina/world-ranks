import React from "react";

export default function StatusData({
  isUnMember,
  onIsUnMemberChange,
  independent,
  onIndependentChange,
}) {
  return (
    <div className="status-bar">
      <legend className="be-vietnam-pro-medium small">Status</legend>
      <div className="status-row">
        <input
          className="check-box"
          type="checkbox"
          id="unMember"
          name="isUnMember"
          checked={isUnMember}
          onChange={() => onIsUnMemberChange(!isUnMember)}
        />
        <label className="be-vietnam-pro-medium medium light-color">
          Member of the United Nations
        </label>
      </div>
      <div className="status-row">
        <input
          type="checkbox"
          id="independent"
          name="independent"
          checked={independent}
          onChange={() => onIndependentChange(!independent)}
        />
        <label className="be-vietnam-pro-medium medium light-color">
          Independent
        </label>
      </div>
    </div>
  );
}
