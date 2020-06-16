import React, { Component } from 'react'
import { Button, Table, Modal, Row, Col, Card, Input, Space } from 'antd'
import { SnippetsOutlined } from "@ant-design/icons"

import styles from './transaction.module.less'

import moment from "moment";

const dateFormat = "YYYY/MM/DD, hh:mm:ss a"

let localPops;

const columns = [
  {
    title: "순번",
    dataIndex: "num",
    key: "d_num",
    width: 50,
  },
  {
    title: "발생시간",
    dataIndex: "time",
    key: "d_time",
    sorter: (a, b) => a.time - b.time,
  },
  {
    title: "GUID",
    dataIndex: "guid",
    key: "d_guid"
  },
  {
    title: "거래결과",
    dataIndex: "transactionResult",
    key: "d_transactionResult"
  },
  {
    title: "상세",
    dataIndex: "detail",
    key: "d_detal",
    render: _ => {
      return <Button type="text"><SnippetsOutlined /></Button>
    }
  },
]

export default class TransactionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: []
    };

    localPops = this.props
  }

  componentDidMount() {
    this.setState({dataSource : [
      {
        key: 1,
        num: 1,
        time: moment().format(dateFormat),
        guid: "csdfjksdlfj3sdfdskf23124sdfdksf",
        transactionResult: "실패",
        detail: true
      },
      {
        key: 2,
        num: 2,
        time: moment().format(dateFormat),
        guid: "csdfjksdlfj3sdfdskf23124sdfdksf",
        transactionResult: "실패",
        detail: true
      },
      {
        key: 1,
        num: 1,
        time: moment().format(dateFormat),
        guid: "csdfjksdlfj3sdfdskf23124sdfdksf",
        transactionResult: "정상",
        detail: true
      },
    ]})
  }

  render() {
    return (
      <Modal
        className={styles.modal}
        visible={this.props.pageCommonData.isShowDetail}
        onCancel={this.props.mainFunction.closeDetail}
        footer={[
          <Row key="btns" justify="center">
            <Col>
              <Button onClick={this.props.mainFunction.retryHandler}>
                Rretry
              </Button>
              <Button onClick={this.props.mainFunction.skipHandler}>
                Skip
              </Button>            </Col>
          </Row>
        ]}
        width="90vw"
      >
        <Row>
          <div className={styles.title} style={{marginBottom: 10}}>트랜잭션 ID / 항공 예약 생성(rescreationAPI 명) / tran_server1출발지 - AIR_API목적지 / HA2000003977 / C2000000134</div>
        </Row>
        <Row>
          <Col span={12}>
            <Table columns={columns} dataSource={this.state.dataSource}
              tableLayout="auto"
              pagination={{ pageSize: 8 }}
              scroll={{ y: 240 }} 
              size="small"
            />
          </Col>
        </Row>
        <div>Url</div>
        <Row>
          <Col span={24}>
            <Input value="https://airapi.hanatour.com/air/api/service/sch/cbc/schAirApi/schAirFar/v1.00" />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <h3 className={styles.subtitle}>Request</h3>
            <div>Header</div>
            <Input.TextArea rows={2} value="Content-Type:application/json apikey:l77c398900e2234c2d98726798ad95"></Input.TextArea>
            <div>Body</div>
            <Input.TextArea rows={10} value={JSON.stringify({x: 5, y: 6})}></Input.TextArea>
          </Col>
          <Col span={12}>
            <h3 className={styles.subtitle}>Request</h3>
            <div>Header</div>
            <Input.TextArea rows={2} disabled defaultValue="Content-Type:application/json apikey:l77c398900e2234c2d98726798ad95"></Input.TextArea>
            <div>Body</div>
            <Input.TextArea rows={10} disabled defaultValue={JSON.stringify({x: 5, y: 6})}></Input.TextArea>
          </Col>
        </Row>
      </Modal>
    )
  }
}
