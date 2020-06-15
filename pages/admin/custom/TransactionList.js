import React, { Component } from "react"
import { Table, Typography, Button, Space } from "antd"
import { SnippetsOutlined } from "@ant-design/icons"

import moment from "moment";
import styles from './transaction.module.less'

const dateFormat = "YYYY/MM/DD, hh:mm:ss a"

const columns = [
  {
    title: "",
    dataIndex: "child",
    key: "child"
  },
  {
    title: "발생시각",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "트랜잭션 ID",
    dataIndex: "transactionId",
    key: "transactionId"
  },
  {
    title: "거래결과",
    dataIndex: "transactionResult",
    key: "transactionResult",
    render: text => {
      if (text === "오류") {
        return <Typography.Text type="danger">{text}</Typography.Text>
      } else if (text === "보상완료") {
        return <Typography.Text className={styles.success}>{text}</Typography.Text>
      }
      
      return text
    }
  },
  {
    title: "예약코드",
    dataIndex: "bookingCode",
    key: "bookingCode"
  },
  {
    title: "사용자번호",
    dataIndex: "userNum",
    key: "userNum"
  },
  {
    title: "API명",
    dataIndex: "apiName",
    key: "apiName"
  },
  {
    title: "출발지",
    dataIndex: "departures",
    key: "departures"
  },
  {
    title: "목적지",
    dataIndex: "destination",
    key: "destination"
  },
  {
    title: "GUID",
    dataIndex: "guid",
    key: "guid"
  },
  {
    title: "보정",
    dataIndex: "modify",
    key: "modify",
    render: (buttons) => {
      const children = [];

      _.forEach(buttons, (item, idx) => {
        children.push(<Button key={idx}>{item}</Button>)
      })

      return <Space>{children}</Space>
    }
  },
  {
    title: "상태",
    dataIndex: "state",
    key: "state",
    render: editabled => {
      return <Button type="text"><SnippetsOutlined /></Button>
    }
  },
]

export default class TransactionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    this.setState({dataSource : [
      {
        key: 1,
        child: true,
        time: moment().format(dateFormat),
        transactionId: "1111111111111111111111",
        transactionResult: "보정필요",
        bookingCode: "HA1234567890",
        userNum: "C200000134",
        apiName: "airRes",
        destination: "DOT_PC",
        departures: "API GW",
        guid: "csdfjksdlfj3sdfdskf23124sdfdksf",
        modify: ["cancel"],
        state: true,
        children: [
          {
            key: 11,
            child: 1,
            time: moment().format(dateFormat),
            transactionId: "1111111111111111111111",
            transactionResult: "보상완료",
            bookingCode: "HA1234567890",
            userNum: "C200000134",
            apiName: "airRes",
            destination: "DOT_PC",
            departures: "API GW",
            guid: "csdfjksdlfj3sdfdskf23124sdfdksf",
            modify: ["cancel"],
            state: true
          },
          {
            key: 12,
            child: 2,
            time: moment().format(dateFormat),
            transactionId: "1111111111111111111111",
            transactionResult: "오류",
            bookingCode: "HA1234567890",
            userNum: "C200000134",
            apiName: "airRes",
            destination: "DOT_PC",
            departures: "API GW",
            guid: "csdfjksdlfj3sdfdskf23124sdfdksf",
            modify: ["cancel"],
            state: true
          }
        ]
      },
      {
        key: 2,
        child: false,
        time: moment().format(dateFormat),
        transactionId: "1111111111111111111111",
        transactionResult: "정상",
        bookingCode: "HA1234567890",
        userName: "C200000134",
        apiName: "airRes",
        destination: "DOT_PC",
        departures: "API GW",
        guid: "csdfjksdlfj3sdfdskf23124sdfdksf",
        modify: ["retry", "skip"],
        state: true
      }
    ]})
  }

  render() {
    return (
      <Table columns={columns} dataSource={this.state.dataSource}
        expandable = {{
          indentSize: 0,
          expandIcon: null
        }}
        tableLayout="auto"
        pagination={{ pageSize: 8 }}
        scroll={{ y: 240 }} 
        size="small"
        /* bordered */
      />
    )
  }
}
