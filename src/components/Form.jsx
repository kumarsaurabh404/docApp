import React from "react";
import { MdCancel } from "react-icons/md";
import { useState } from "react";

function Form({func, sub, aaa}) {

  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const len = aaa.length+1;
    const formData = {
      id: len+1,
      desc: description,
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    };
    sub(formData);
    
  }

  return (
    <>
      <div className="absolute block w-1/4 h-[20%] z-[4]  bg-green-200 rounded-[15%] overflow-hidden ">
        <div className="flex justify-end ">
            <button onClick={func}><MdCancel size="2em" className="mr-3.5 mt-2" /></button>
        </div>
        <form onSubmit={submitHandler} className="form-group flex">
          <label className="col-md-4 control-label mt-2 ml-2" htmlFor="textarea">
            Description
          </label>
          <div className="col-md-4">
            <input className="form-control mt-2 ml-2" id="textarea" onChange={handleChange} name="textarea" placeholder="Description" value={description} required />
          </div>
          <button type="submit" className="bg-sky-500  w-[50%] rounded-[30%]">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
