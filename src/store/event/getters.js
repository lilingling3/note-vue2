export default {
  getEventList(states){
    return states.event
  },
  getTodo(states){
    return states.event.filter(d => d.type === 1)
  },
  getDone(states){
    return states.event.filter(d => d.type === 2)
  },
  getCancel(states){
    return states.event.filter(d => d.type === 3)
  }
}