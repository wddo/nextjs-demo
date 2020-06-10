import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DatePicker, Form, Radio, Button } from 'antd'
import { SearchOutlined } from "@ant-design/icons"
import styles from './transaction.module.less'

import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';

export default class TransactionDate extends Component {
/*   static propTypes = {
    prop: PropTypes
  } */

  render() {
    return (
      <Form layout="inline">
        <Form.Item name="시작" label="시작" colon={false} align="middle">
          <DatePicker initialValues={moment('2015/01/01', dateFormat)} format={dateFormat} />
        </Form.Item>
        <Form.Item name="종료" label="종료" colon={false} align="middle">
          <DatePicker initialValues={moment('2015/01/01', dateFormat)} format={dateFormat} />
          {/* <DatePicker.RangePicker initialValues={moment('2015/01/01', dateFormat)} format={dateFormat} /> */}
        </Form.Item>
        <Form.Item align="middle">
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
        <Form.Item align="middle">
          <Button type="primary" size="large"><SearchOutlined /></Button>
        </Form.Item>
      </Form>
    )
  }
}
