import React, { Component } from 'react'
import { Card, Form } from 'antd'

import styles from './transaction.module.less'

import TransactionDate from './TransactionDate'
import TransactionFilter from './TransactionFilter'
import TransactionList from './TransactionList'

const cardDefaultAttr = {
  bordered: false,
  bodyStyle: {margin: 25, backgroundColor: "rgba(240, 240, 240, .3)", borderRadius: "20px"}
}

export default class transaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initValue: {
        transactionResult: "all"
      },
      //range 달력
      searchFromDate: "today",  //검색까지의 기간
      //트랜지션id
      transactionResult: "all"  //거래결과 "전체" | ..
      //api명
      //예약코드
      //사용자번호
      //GUID
      //키워드
      //대소문자구문 유무
      //패턴 유무
    };
  }

  changeSearchFromDate(e) {
    this.setState({
      searchFromDate: e.target.value
    })
  }

  changeTransactionResult(selectValue) {
    this.setState({
      transactionResult: selectValue
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <Form initialValues={this.state.initValue}>
          <Card bordered={cardDefaultAttr.bordered}>
            <h2>거래내역</h2>
          </Card>
          <Card {...cardDefaultAttr}>
            <TransactionDate
              fromDate={this.state.searchFromDate} changeFromDate={this.changeSearchFromDate.bind(this)}
            />
          </Card>
          <Card {...cardDefaultAttr}>
            <TransactionFilter 
              reslut={this.state.transactionResult} changeReslut={this.changeTransactionResult.bind(this)}
            />
          </Card>
        </Form>
        <Card {...cardDefaultAttr}>
          <TransactionList />
        </Card>
      </div>
    )
  }
}
