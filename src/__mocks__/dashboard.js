import Mock from 'mockjs';

export default Mock.mock({
  'overview|5': [{
    id: '@id',
    title: '@ctitle(4, 5)',
    icon: '@dataImage(100x100)',
    content: '@integer(2000,100000)'
  }],
  'lmgj_top10|8': [{
    id: '@id',
    title: '@ctitle(5, 8)',
    count: '@integer(5000, 100000)',
    percent: '@float(0.2, 0.5, 0, 1)'
  }],
  'gjdj_top10|8': [{
    id: '@id',
    title: '@cparagraph(2)',
    count: '@integer(5000, 50000)',
    percent: '@float(0.1, 0.5, 0, 1)'
  }],
  'xbfg_top5|5': [{
    id: '@id',
    'sort|+1': 1,
    avatar: '@dataImage(64x64)',
    name: '@cname(2, 3)',
    count: '@integer(1000, 10000)'
  }],
  'rmhfg_top5|5': [{
    id: '@id',
    'sort|+1': 1,
    avatar: '@dataImage(64x64)',
    name: '@cname(2, 3)',
    count: '@integer(1000, 10000)'
  }]
});
