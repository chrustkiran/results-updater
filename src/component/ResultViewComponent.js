import React from "react";
import {Table, Tag} from "antd";
import {StoreService} from "../service/StoreService";
import {db} from "../conf/FirebaseConfig";
import {BLService} from "../service/BLService";


export default class ResultViewComponent extends React.Component {

    state = {
        results : []
    };

     dataSource = [];

     columns = [
        {
            title: 'Index Number',
            dataIndex: 'Index Number',
            key: '1',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: '2',
        },
        {
            title: 'Stream',
            dataIndex: 'Stream',
            key: '3',
        },
         {
             title: 'Results',
             dataIndex: 'Results',
             key: '4',
             render: result => (
                 <>
                     {Object.keys(result).map(subject => {
                         return (
                             <Tag color = {'green'} key={subject}>
                                 {subject} :  {result[subject].toUpperCase()}
                             </Tag>
                         );
                     })}
                 </>
             ),
         },
         {
             title: 'Rank',
             dataIndex: 'Rank',
             key: '5',
         },
         {
             title: 'Z-Score',
             dataIndex: 'Z-Score',
             key: '6',
         },
    ];

     componentDidMount() {
         StoreService.loadObject(this);
     }


    render() {
         console.log(this.state.results);
        return (
            <div>
                <Table dataSource={this.state.results} columns={this.columns} />;
            </div>
        )
    }
}
