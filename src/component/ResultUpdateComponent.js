import React from 'react';
import {Button, Cascader, Form, Input, Tooltip, Select} from 'antd';
import {results, streams, subjects} from "../conf/StreamConf";
import {StoreService} from "../service/StoreService";


export default class ResultUpdateComponent extends React.Component {
    state = {
        streamId: ''
    };

    objToBeSaved = {};
    gradeObj = {};

    streamOnChange = (event) => {
        this.gradeObj = {};
        this.setState({streamId: event.join("_")});
        this.objToBeSaved['Stream'] = event[0].replace('_', ' ');
    };

    constructSubjects = () => {
        if (this.state.streamId.length > 0) {
            return (
                subjects[this.state.streamId].map(subject => {
                    return (<Form.Item label={subject}>
                        <Select onChange={(value) => {this.gradeOnChange(subject, value)}}>
                            {results.map(grade => {
                               return (<Select.Option value={grade}>{grade}</Select.Option>)
                            })}
                        </Select>
                    </Form.Item>)
                })
            )
        } else {
            return (<div></div>)
        }
    };

    inputOnChange = (key, value) => {
        this.objToBeSaved[key] = value;
    };

    gradeOnChange = (subject, grade) => {
        this.gradeObj[subject] = grade;
    };

    onSaveClick = () => {
        this.objToBeSaved['Results'] = this.gradeObj;
        StoreService.saveObject(this.objToBeSaved);
        window.location.reload(false);
    };

    render() {
        return (
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                labelAlign={"left"}
                style={{marginLeft: 8, marginTop: 40}}
                //onValuesChange={onFormLayoutChange}
                size={12}
            >
                <Form.Item label="Index Number">
                    <Tooltip
                        trigger={['focus']}
                        placement="topLeft"
                        overlayClassName="numeric-input"
                    >
                    <Input onChange={(event)=>{this.inputOnChange('Index Number', event.target.value)}}/>
                    </Tooltip>
                </Form.Item>
                <Form.Item label="Name">
                    <Input onChange={(event)=>{this.inputOnChange('Name', event.target.value)}}/>
                </Form.Item>
                <Form.Item label="NIC">
                    <Input onChange={(event)=>{this.inputOnChange('nic', event.target.value)}}/>
                </Form.Item>
                <Form.Item label="Stream">
                    <Cascader onChange={this.streamOnChange}
                              options={streams}
                    />
                </Form.Item>
                {this.constructSubjects()}
                <Form.Item label="Rank">
                    <Input onChange={(event)=>{this.inputOnChange('Rank', event.target.value)}}/>
                </Form.Item>
                <Form.Item label="Z-Score">
                    <Input onChange={(event)=>{this.inputOnChange('Z-Score', event.target.value)}}/>
                </Form.Item>
                <Form.Item style={{marginLeft: '20%'}}>
                    <Button type={"primary"} onClick={this.onSaveClick}>Save</Button>
                </Form.Item>
            </Form>

        )
    }
}

