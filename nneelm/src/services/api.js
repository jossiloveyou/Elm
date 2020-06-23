export default {
  nav: '/api/v2/index_entry', //导航
  shop: '/api/shopping/restaurants?latitude=31.22967&longitude=121.4762',//商铺
  menu: '/api/shopping/v2/menu?restaurant_id=',//获取食品列表
  hotCity: '/api/v1/cities?type=hot',//热门城市
  allCity: '/api/v1/cities?type=group',//全部城市
  onlyCity: '/api/v1/cities/',// 获取id得到当前城市
  searchCity: '/api/v1/pois?type=search&',//搜索地址
}