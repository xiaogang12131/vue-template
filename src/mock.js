// 引入mockjs
const Mock = require('mockjs');

var cityList = {
    "elCascaders":[
      {
        "options":[
          {
            "selectOptions":"",
            "label": "江苏",
            "cities": []
          }, {
            "selectOptions":"",
            "label": "浙江",
            "cities": []
          }
        ]
      },
      {
        "options":[
          {
            "selectOptions":"",
            "label": "江苏",
            "cities": []
          }, {
            "selectOptions":"",
            "label": "浙江",
            "cities": []
          }
        ]
      }
    ]
}

Mock.mock('/cityList', 'get', cityList);
