import React from "react";
import {Table, Tag, Divider, Switch, Modal} from "antd";
import {StoreService} from "../service/StoreService";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default class ResultViewComponent extends React.Component {

    state = {
        results : [],
        showResults : true
    };
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
         StoreService.loadSetting(this);
     }

    onShowSwitchChange = (checked) => {
        this.showResultConfirm(checked);
    };

     showResultConfirm = (checked) => {
         const feature = checked ? 'enable' : 'disable';
        confirm({
            title: 'Are You Sure ?',
            icon: <ExclamationCircleOutlined />,
            content: 'This will ' + feature + ' showing results on TDUSA page',
            onOk() {
                StoreService.saveSetting(checked);
            }
        });
    };


    render() {
        return (
            <div>
                <div style={{marginTop : 10}}>
                    Show Results : &nbsp; <Switch checked={this.state.showResults} checkedChildren="enabled" unCheckedChildren="disabled" onChange={this.onShowSwitchChange} />
                </div>
                <Divider/>
            <div>
                <Table dataSource={this.state.results} columns={this.columns} />;
            </div>

            </div>
        )
    }
}
