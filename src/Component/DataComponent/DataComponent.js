import react, { useEffect, useState } from "react";
import "./DataComponent.css";
import axios from "../../config/axios";
import { BsX } from "react-icons/bs";
import PopupAddComponent from "../PopupAddComponent/PopupAddComponent";

const DataComponent = () => {
  const [cancel, setCancel] = useState([]);
  const [no, setNo] = useState([]);
  const [yes, setYes] = useState([]);
  const [change, setChange] = useState(false);
  const [addData, setAddData] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/data/");
        setCancel(res.data.cancel);
        setNo(res.data.no);
        setYes(res.data.yes);
      } catch (error) {}
    };
    fetch();
  }, [change]);

  const handleAdd = (e, value) => {
    e.preventDefault();
    setAddData(value);
  };

  const handleDelete = async (e, id) => {
    try {
      e.preventDefault();
      const res = await axios.delete(`/data/${id}`);
      setChange(change => !change);
    } catch (error) {}
  };

  return (
    <div className="wrapper-table-container">
      <table className="table-container">
        <tr>
          <th className="th-box">VALUE</th>
          <th className="th-box">SYNONYMS</th>
        </tr>
        <tr>
          <td className="td-box">
            <b>cancel</b>
          </td>
          <td className="td-box">
            <div className="inner-td-box">
              {cancel.map((item, index) => (
                <div className="text-td-box" key={index}>
                  {item.synonyms}&nbsp;
                  <BsX className="icon-td-box" onClick={e => handleDelete(e, item.id)} />
                </div>
              ))}
              <button className="button-td-box" onClick={e => handleAdd(e, "cancel")}>
                <b>Add word</b>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="td-box">
            <b>no</b>
          </td>
          <td className="td-box">
            <div className="inner-td-box">
              {no.map((item, index) => (
                <div className="text-td-box" key={index}>
                  {item.synonyms}&nbsp;
                  <BsX className="icon-td-box" onClick={e => handleDelete(e, item.id)} />
                </div>
              ))}
              <button className="button-td-box" onClick={e => handleAdd(e, "no")}>
                <b>Add word</b>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="td-box">
            <b>yes</b>
          </td>
          <td className="td-box">
            <div className="inner-td-box">
              {yes.map((item, index) => (
                <div className="text-td-box" key={index}>
                  {item.synonyms}&nbsp;
                  <BsX className="icon-td-box" onClick={e => handleDelete(e, item.id)} />
                </div>
              ))}
              <button className="button-td-box" onClick={e => handleAdd(e, "yes")}>
                <b>Add word</b>
              </button>
            </div>
          </td>
        </tr>
      </table>

      {addData && <PopupAddComponent setChange={setChange} addData={addData} setAddData={setAddData} />}
    </div>
  );
};

export default DataComponent;
