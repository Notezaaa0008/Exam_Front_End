import React from "react";
import "./LeftMenuComponent.css";

const LeftMenuComponent = ({ data, active, setActive }) => {
  const handleClick = (e, index) => {
    e.preventDefault();
    setActive(index);
  };
  return (
    <div>
      <div className="left-menu-header">
        <h2>ADMIN CHATBOT</h2>
      </div>
      <hr />
      <ul>
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              style={{
                backgroundColor: active === index ? item.bgColorActive : item.bgColor
              }}
              onClick={e => handleClick(e, index)}
            >
              <div className="left-menu-inner-box">
                <div className="left-menu-text-box">
                  <Icon size="24px" />
                  &nbsp;&nbsp;{item.listName}
                </div>
                {active === index && <div id="left-menu-triangle-left"></div>}
                {active === index && <div id="left-menu-triangle-left-1"></div>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftMenuComponent;
