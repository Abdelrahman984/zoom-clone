// "use client";
// import React from "react";
// import { useParams } from "next/navigation";

// const Meeting = () => {
//   const { id } = useParams();
//   return <h1>Meeting Room #{id}</h1>;
// };

// export default Meeting;

import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Room #{params.id}</div>;
};

export default Meeting;
