import React from "react";

const page = ({ params, searchParams }: { params: any; searchParams: any }) => {
    console.log(">>>check params : ", params);
    console.log(">>>check searchParams : ", searchParams);

    return <div>Lesson of course</div>;
};

export default page;
