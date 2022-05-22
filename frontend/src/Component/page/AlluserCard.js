import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userDelete } from "../Store/action/userAction";

const AlluserCard = ({ data, index }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(userDelete(id));
  };
  return (
    <Fragment>
      <tr>
        <td className="seral">{index + 1}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>
          <div className="action">
            <Link to={`/edit/${data._id}`} className="btn">
              Edit
            </Link>
            <button onClick={() => handleClick(data._id)}>Delete</button>
          </div>
        </td>
      </tr>
    </Fragment>
  );
};

export default AlluserCard;
