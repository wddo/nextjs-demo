import React, { Component } from 'react'
import { DatePicker, Form, Radio, Button, Col, Row } from 'antd'
import { SearchOutlined } from "@ant-design/icons"

import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';

export default class TransactionDate extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Form.Item noStyle>
        <Row justify="space-between" align="middle">
          <Col>
            <Row align="middle" gutter={10}>
              <Col>시작 : </Col>
              <Col>
                <DatePicker initialValues={moment('2015/01/01', dateFormat)} format={dateFormat} />
              </Col>
              <Col>종료 : </Col>
              <Col>
                <DatePicker initialValues={moment('2015/01/01', dateFormat)} format={dateFormat} />
              </Col>
              <Col>
                <Radio.Group value={this.props.pageCommonData.searchFromDate} onChange={this.props.mainFunction.changeSearchFromDate} >
                  <Radio.Button value="1m">1분</Radio.Button>
                  <Radio.Button value="10m">10분</Radio.Button>
                  <Radio.Button value="30m">30분</Radio.Button>
                  <Radio.Button value="1h">1시간</Radio.Button>
                  <Radio.Button value="6h">6시간</Radio.Button>
                  <Radio.Button value="1d">1일</Radio.Button>
                  <Radio.Button value="today">오늘</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="end">
              <Col>
                <Button type="primary" size="large"><SearchOutlined /></Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form.Item>
    )
  }
}
