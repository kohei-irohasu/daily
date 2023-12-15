import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";

import img1 from '../../images/home/perfect.png';
import img2 from '../../images/home/good.png';
import img3 from '../../images/home/soso.png';
import img4 from '../../images/home/bad.png';

export const Content = (entity) => {
    let evaluation_img;
    if (entity.evaluation === 'perfect') {
        evaluation_img = img1;
    } else if (entity.evaluation === 'good') {
        evaluation_img = img2;
    } else if (entity.evaluation === 'soso') {
        evaluation_img = img3;
    } else {
        evaluation_img = img4;
    }

    return (
        <Card
          style={{ width: 300 }}
          cover={
          <img 
            alt="evaluation" 
            src={evaluation_img}
            width={200}
            height={250}
            objectFit="cover" />}>
          <Link to={`${entity.id}`}>
            <h2>{entity.date}</h2>
          </Link>
        </Card>
      );
}