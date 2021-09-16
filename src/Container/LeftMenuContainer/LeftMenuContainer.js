import React, { useState } from "react";
import "./LeftMenuContainer.css";
import { RiBarChart2Line } from "react-icons/ri";
import { BsListTask, BsGem, BsPieChart, BsGrid1X2 } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GiMeshBall } from "react-icons/gi";
import LeftMenuComponent from "../../Component/LeftMenuComponent/LeftMenuComponent";

const LeftMenuContainer = ({ active, setActive }) => {
  const [data, setData] = useState([
    { listName: "DATA ANALYTICS", icon: BsPieChart, bgColor: "#60a5e0", bgColorActive: "#187ccf" },
    { listName: "INTENTS", icon: BsListTask, bgColor: "#fba653", bgColorActive: "#f27c08" },
    { listName: "ENTITIES", icon: BsGrid1X2, bgColor: "#528e8e", bgColorActive: "#0d5e5f" },
    { listName: "CONVERSATION FLOW", icon: IoChatbubblesOutline, bgColor: "#8a5bbb", bgColorActive: "#801ce8" },
    { listName: "BUSINESS LOGIC", icon: RiBarChart2Line, bgColor: "#74ba5a", bgColorActive: "#379e11" },
    { listName: "RULE-BASED", icon: BsGem, bgColor: "#e15fbd", bgColorActive: "#ee13b5" },
    { listName: "NLP", icon: GiMeshBall, bgColor: "#b9944e", bgColorActive: "#e8a10e" }
  ]);
  return (
    <div className="menu-container">
      <LeftMenuComponent data={data} active={active} setActive={setActive} />
    </div>
  );
};

export default LeftMenuContainer;
