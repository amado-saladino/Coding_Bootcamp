// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {}
  }

  // Register an event handler
  on(eventName, callback) {
    this.events[eventName] 
    ? (this.events[eventName].push(callback)) 
    : (this.events[eventName] = [callback])

    /**
     * course solution
     if (this.events[eventName]) { 
       this.events[eventName].push(callback) }
       else { 
         this.events[eventName] = [callback] }
     */
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this.events[eventName].forEach(e=> e())

    /**
     * course method
     if (this.events[eventName]) {
       for (const fn of this.events[eventName]) {
         fn()
       }
     }
     */
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events[eventName] = []
  }
}

module.exports = Events;
