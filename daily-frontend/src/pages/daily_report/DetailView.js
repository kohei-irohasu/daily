import React, { useState, useEffect} from 'react';
import { getReportDetail } from '../../daily_report/api/DailyReport';
import { Content } from '../../daily_report/components/detail/Content';
import { useParams } from 'react-router-dom';

const DetailView = () => {
    const [entity, setEntity] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // get url params
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getReportDetail(id).then((values)=> {
                setEntity(values)
                setLoading(false)
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            });
        }
    }, [id])

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            { loading ? (
                <h1>loading...</h1>
            ) : (
                <Content key={ entity.id } {...entity} />
            )}
        </div>
    );
}

export default DetailView;