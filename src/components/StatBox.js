import React from "react";

export default function StatBox(props) {
  const { label, value, prof, misc, add } = props;
  const _label = label.substring(0, 3);

  const mod = Math.floor(value - 10 / 2);
  const mod_s = mod > 0 ? "+" : "-";

  const sav = prof
    ? Math.floor(value - 10 / 2 + misc)
    : Math.floor((value - 10) / 2 + add + misc);
  const sav_s = sav > 0 ? "+" : "-";

  return (
    <div className="stat-box">
      <div className="label">{_label}</div>
      <div className="flex">
        <span className="stat-item">{value}</span>
        <span className="stat-item">{`${mod_s}${mod}`}</span>
      </div>
      <div className="saving">
        <span>{`SAV ${sav_s} ${sav}`}</span>
      </div>
    </div>
  );
}
