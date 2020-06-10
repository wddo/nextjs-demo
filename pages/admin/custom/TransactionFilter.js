import React, { Component } from 'react'
import { Form, Input, Select, Checkbox, Col, Row } from 'antd'

export default class TransactionFilter extends Component {
  onChange() {

  }

  render() {
    return (
      <Form initialValues={{ transactionResult: "all" }}>
        <Row gutter={[10, 0]}>
          <Col>
            <Form.Item name="transitionId" label="트랜지션ID" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="transactionResult" label="거래결과" colon={false}>
              <Select>
                <Select.Option value="all">전체</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[10, 0]}>
          <Col span={6}>
            <Form.Item name="apiName" label="API명" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="bookingCode" label="예약코드" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="userNum" label="사용자번호" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="guid" label="GUID" colon={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[10, 0]}>
          <Col>
            <Form.Item name="keyword" label="키워드" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item align="middle">
              <Checkbox.Group options={['대소문자 구분', '패턴']} onChange={this.onChange} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}
