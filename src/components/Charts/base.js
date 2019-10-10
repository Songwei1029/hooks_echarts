import echarts from 'echarts/lib/echarts';
import ReactEcharts from '@/components/ReactEcharts';

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/visualMap';

const loadingOption = {
  text: '数据加载中...',
  color: '#1890ff',
  textColor: '#1890ff'
};

export {
  echarts,
  loadingOption,
  ReactEcharts
};
