import React from 'react';
import noticeData from '../assets/api/notice'
import { Link } from 'react-router-dom';

const NoticeTbody = () => {
    return (
        <tbody id="board_list">
            {
                noticeData.sort((a, b) => b.id - a.id).map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className='subject'>
                            <strong><Link to={`/noticeList/${item.id}`}>{item.title}</Link></strong></td>
                        <td>{item.date}</td>
                        <td>{item.view}</td>
                    </tr>
                )
            }
        </tbody>
    );
};

export default NoticeTbody;