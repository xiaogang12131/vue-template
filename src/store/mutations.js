const mutations = {
  countAdd:(state,data) => {
    state.count += data;
  },
  switchCollapse:(state,data) => {
    state.isCollapse = data
  }
}
export default mutations