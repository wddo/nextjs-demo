import React, { Component } from 'react'
import { Card } from 'antd'

import styles from './transaction.module.less'

import TransactionDate from './TransactionDate'
import TransactionFilter from './TransactionFilter'
import TransactionList from './TransactionList'

const cardDefaultAttr = {
  bordered: false,
  bodyStyle: {margin: 25, backgroundColor: "rgba(240, 240, 240, .3)", borderRadius: "20px"}
}

export default class transaction extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card bordered={cardDefaultAttr.bordered}>
          <h2>거래내역</h2>
        </Card>
        <Card {...cardDefaultAttr}>
          <TransactionDate />
        </Card>
        <Card {...cardDefaultAttr}>
          <TransactionFilter />
        </Card>
        <Card {...cardDefaultAttr}>
          <TransactionList />
        </Card>
      </div>
    )
  }
}
