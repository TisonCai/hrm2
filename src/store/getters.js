const getters = {
  // app
  collapse: state => state.app.sidebar.collapse,
  activeIndex: state => state.app.sidebar.activeIndex,
  navActiveIndex: state => state.app.navbar.activeIndex
}
export default getters
