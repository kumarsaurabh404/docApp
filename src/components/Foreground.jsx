import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Foreground({con}) {
  const ref = useRef(null);
  
 
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {con.map((item) => (
        <Card key={item.id} data={item} refer={ref} />
      ))}
    </div>
  );
}

export default Foreground;
