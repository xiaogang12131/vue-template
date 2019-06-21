const actions = {
  oprations:(context,data) => {
    context.commit('add',data)
    context.commit('reduce',data)
  }
}
export default actions