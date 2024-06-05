import { Modal, ConfigProvider } from 'antd'
import styles from '@/styles/tarot/tarot-drawCards.module.css'
import Link from 'next/link'

function TarotCouponModal({ visible }) {
  // 取得當前日期
  const currentDate = new Date()
  // 取得當前年份
  const currentYear = currentDate.getFullYear()
  // 取得當前月份，注意 JavaScript 中月份是從 0 開始計算的，因此要加 1
  const currentMonth = currentDate.getMonth() + 1
  // 將月份轉換為兩位數的字串表示，如果月份小於 10，則在前面補 0
  const currentMonthString =
    currentMonth < 10 ? `0${currentMonth}` : `${currentMonth}`

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'IBM Plex Sans TC',
          },
        }}
      >
        <Modal
          visible={visible}
          footer={null}
          keyboard={false}
          closable={false}
          maskClosable={false}
          centered
          width={400}
        >
          <div className={styles['modal-body']}>
            <h2>恭喜獲得</h2>
            <h5>{`${currentYear}年${currentMonthString}月塔羅牌優惠劵`}</h5>
            <h2>NT$100</h2>
            <button
              className={`${styles['custom-btn']} ${styles['btn-7']} ${styles['btn-11']}`}
            >
              {' '}
              <Link href="./tarot-result">
                <span>領 取</span>
              </Link>
            </button>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  )
}

export default TarotCouponModal
