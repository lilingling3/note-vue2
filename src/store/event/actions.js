export default {
  // 获取 store  mutation 通过 commit 提交来触发
  addEvent: ({commit}, param) =>commit('ADDEVENT',{items: param}),
  eventDone: ({commit}, param) =>commit('EVENTDONE',{id: param}),
  eventTodo: ({commit}, param) =>commit('EVENTTODO',{id: param}),
  eventCancel: ({commit}, param) =>commit('EVENTCANCEL',{id: param}),

  editEvent: ({commit}, param) =>commit('EDITEVENT',param),

  clearEvent: ({commit}) =>commit('CLEAREVENT'),
  delEvent: ({commit}, param) =>commit('DELEVENT',param),
  
  uploadEvent: ({commit}, param) =>commit('UPLOADEVENT',param)
}