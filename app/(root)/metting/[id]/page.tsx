import React from 'react';

const Meeting = async ({ params }: { params: { id: string } }) => {
    return <div>Meeting Room id : {params.id}</div>;
};

export default Meeting;
