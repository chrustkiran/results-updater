import React from 'react';
import {Button, Cascader, Form, Input,} from 'antd';
import {streams, subjects} from "../conf/StreamConf";


export default class ResultUpdateComponent extends React.Component {

    state = {
        stream: ''
    };

    streamOnChange = (event) => {
        this.setState({stream: event.join("_")});
    };

    constructSubjects = () => {
        if (this.state.stream.length > 0) {
            return (
                subjects[this.state.stream].map(subject => {
                    return (<Form.Item label={subject}>
                        <Input/>
                    </Form.Item>)
                })
            )
        } else {
            return (<div></div>)
        }
        /*  switch (this.state.stream) {
              case 'CombinedMathematics_Normal':
                  return (
                      subjects.CombinedMathematics_Normal.map(subject => {
                          <Form.Item label={subject}>
                              <Input />
                          </Form.Item>
                      })
                  )
              case 'CombinedMathematics_InformationTechnology':
                  return (
                      subjects.CombinedMathematics_Normal.map(subject => {
                          <Form.Item label={subject}>
                              <Input />
                          </Form.Item>
                      })
                  )
              case 'Biology_Normal':
                  return ()
              case 'Biology_InformationTechnology':
                  return ()
          }*/
    }

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
                    <Input/>
                </Form.Item>
                <Form.Item label="Name">
                    <Input/>
                </Form.Item>
                <Form.Item label="Stream">
                    <Cascader onChange={this.streamOnChange}
                              options={streams}
                    />
                </Form.Item>
                {this.constructSubjects()}
                <Form.Item label="Rank">
                    <Input/>
                </Form.Item>
                <Form.Item label="Z-Score">
                    <Input/>
                </Form.Item>
                <Form.Item style={{marginLeft: '20%'}}>
                    <Button type={"primary"}>Save</Button>
                </Form.Item>
            </Form>

        )
    }
}

