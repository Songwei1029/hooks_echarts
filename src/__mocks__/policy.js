import Mock from 'mockjs';

export default Mock.mock({
  'columnClickData|5': [
    {
      id: '@integer(5, 145)',
      catalogName: '@ctitle(4, 5)',
      read: '@integer(5, 145)',
      percent: '@integer(5, 145)'
    }
  ],
  'draftClickData|5': [
    {
      id: '@integer(5, 145)',
      catalogName: '@ctitle(4, 5)',
      read: '@integer(5, 145)',
      percent: '@integer(5, 145)'
    }
  ],
  'columnRankData|5': [
    {
      id: '@integer(5, 145)',
      catalogName: '@ctitle(4, 5)',
      read: '@integer(5, 145)',
      percent: '@integer(5, 145)',
      test1: '@integer(5, 145)',
      test2: '@integer(5, 145)'
    }
  ],
  'editorRankList|5': [
    {
      addUser: 'admin',
      author: '超级管理员',
      publishCount: 74,
      test: 4,
      userImage:
        'https://pgcupload.flydev.chinamcloud.cn/uploads/cmc_user_avatar/20190227/1551265408-0z0fuK.png'
    }
  ],
  'spiderRankList|5': [
    {
      addUser: 'admin',
      author: '超级管理员',
      publishCount: 74,
      test: 4,
      userImage:
        'https://pgcupload.flydev.chinamcloud.cn/uploads/cmc_user_avatar/20190227/1551265408-0z0fuK.png'
    }
  ]
});
