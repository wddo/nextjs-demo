import React, { Component } from 'react'
import { DatePicker, Form, Card, Radio, Col, Row } from 'antd'
import moment from 'moment';

import styles from './transaction.module.css'

const dateFormat = 'YYYY/MM/DD';

export default class transaction extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card bordered={false}>
          <h2>거래내역</h2>
        </Card>
        <Card bordered={false}>
          <Form layout="inline" style={{justifyContent: "space-between"}}>
            <Row>
              <Col>
                <Form.Item name="시작" label="시작">
                  <DatePicker initialValues={moment('2015/01/01', dateFormat)} format={dateFormat} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="종료" label="종료">
                  <DatePicker initialValues={moment('2015/01/01', dateFormat)} format={dateFormat} />
                  {/* <DatePicker.RangePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} /> */}
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Radio.Group value="today">
                <Radio.Button value="1m">1분</Radio.Button>
                <Radio.Button value="10m">10분</Radio.Button>
                <Radio.Button value="30m">30분</Radio.Button>
                <Radio.Button value="1h">1시간</Radio.Button>
                <Radio.Button value="6h">6시간</Radio.Button>
                <Radio.Button value="1d">1일</Radio.Button>
                <Radio.Button value="today">오늘</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
