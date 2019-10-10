import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from '@/utils';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const CommomDatePicker = memo(
  ({ disabledInterval = [], style = {}, num = 10, onChange = () => {}, format = 'YYYY-MM-DD' }) => {
    let firstChooseTime = 0;

    const pickerHandleChange = (datas, dateStrings) => {
      if (dateStrings[0] !== 0) {
        if (num === 13) {
          return onChange([
            moment(dateStrings[0]).valueOf(),
            moment(dateStrings[1]).valueOf() + +86400000 - 1000
          ]);
        } else {
          return onChange([
            new Date(new Date(dateStrings[0]).toLocaleDateString()).getTime() / 1000,
            (new Date(new Date(dateStrings[1]).toLocaleDateString()).getTime() + 86400000 - 1000) /
              1000
          ]);
        }
      } else {
        return onChange([]);
      }
    };

    const handlePanelChange = (dates, dateStrings) => {
      // setTest(new Date(dates).getTime());
      firstChooseTime = new Date(dates).getTime();
    };

    const disabledDate = current => {
      if (disabledInterval.length === 0) {
        return null;
      } else {
        return firstChooseTime
          ? (current &&
              current > moment(firstChooseTime - 86400000 * disabledInterval[0]) &&
              current < moment(firstChooseTime + 86400000 * disabledInterval[0])) ||
              current > moment(firstChooseTime + 86400000 * disabledInterval[1]) ||
              current < moment(firstChooseTime - 86400000 * disabledInterval[1])
          : current && current > moment().endOf('day');
      }
    };

    return (
      <RangePicker
        disabledDate={disabledDate}
        onChange={pickerHandleChange}
        onCalendarChange={handlePanelChange}
        format={format}
        style={style}
      />
    );
  }
);

CommomDatePicker.propTypes = {
  disabledInterval: PropTypes.array, // 禁用时间区间，根据选择的第一个时间点来划分区间禁用
  style: PropTypes.object, // 自定义设置样式
  num: PropTypes.number, // 时间戳位数，默认10位
  format: PropTypes.string, // 返回的时间格式
  onChange: PropTypes.func.isRequired // 选择值改变的回调函数，必传
};

export default CommomDatePicker;
