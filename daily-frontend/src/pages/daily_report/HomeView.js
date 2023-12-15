import React, { useState, useEffect } from "react";
import { getReportList } from "../../daily_report/api/DailyReport";
import { Content } from '../../daily_report/components/home/Content';
import { Row, Col} from 'antd';

const HomeView = () => {
    const [entities, setEntities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getReportList().then((values) => {
            setEntities(values);
            setLoading(false);
        })
    }, []);

    return (
        <div>
            { loading ? (
                <h1>loading...</h1>
            ) : (
                <Row gutter={[16, 24]}>
                    {entities.map(entity => (
                        <Col span={6} key={entity.id}>
                            <Content {...entity} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default HomeView;