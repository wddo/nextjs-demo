import React, { Component } from 'react'
import { Card, Form } from 'antd'

import styles from './transaction.module.less'

import TransactionDate from './TransactionDate'
import TransactionFilter from './TransactionFilter'
import TransactionList from './TransactionList'

import TransactionDetail from "./TransactionDetail"
import _default from 'antd/lib/time-picker'

const cardDefaultAttr = {
  bordered: false,
  bodyStyle: {margin: 25, backgroundColor: "rgba(240, 240, 240, .3)", borderRadius: "20px"}
}

export default class transaction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageCommonData : {
        initValue: {
          transactionResult: "all"
        },
        //range 달력
        searchFromDate: "today",  //검색까지의 기간
        //트랜지션id
        transactionResult: "all",  //거래결과 "전체" | ..
        //api명
        //예약코드
        //사용자번호
        //GUID
        //키워드
        //대소문자구문 유무
        //패턴 유무
  
        isShowDetail: false
      }
    }
  }

  mainFunction = {
    changeSearchFromDate: function (e) {
      this.setState({
        pageCommonData : {
          ...this.state.pageCommonData,
          searchFromDate: e.target.value
        }
      })
    }.bind(this),
  
    changeTransactionResult: function (selectValue) {
      this.setState({
        pageCommonData : {
          ...this.state.pageCommonData,
          transactionResult: selectValue
        }
      })
    }.bind(this),

    openDetail: function () {
      this.setState({
        pageCommonData : {
          ...this.state.pageCommonData,
          isShowDetail: true
        }
      })
    }.bind(this),

    closeDetail: function () {
      this.setState({
        pageCommonData : {
          ...this.state.pageCommonData,
          isShowDetail: false
        }
      })
    }.bind(this),

    retryHandler: function () {

    }.bind(this),

    skipHandler: function () {

    }.bind(this),
  }

  render() {
    return (
      <div className={styles.container}>
        <Form initialValues={this.state.pageCommonData.initValue}>
          <Card bordered={cardDefaultAttr.bordered}>
            <h2>거래내역</h2>
          </Card>
          <Card {...cardDefaultAttr}>
            <TransactionDate
              pageCommonData={this.state.pageCommonData} mainFunction={this.mainFunction}
            />
          </Card>
          <Card {...cardDefaultAttr}>
            <TransactionFilter 
              pageCommonData={this.state.pageCommonData} mainFunction={this.mainFunction}
            />
          </Card>
          <TransactionDetail
            pageCommonData={this.state.pageCommonData} mainFunction={this.mainFunction}
          />
        </Form>
        <Card {...cardDefaultAttr}>
          <TransactionList 
            pageCommonData={this.state.pageCommonData} mainFunction={this.mainFunction}
          />
        </Card>
      </div>
    )
  }
}
