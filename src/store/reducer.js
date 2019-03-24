const initialState = {
  airplanes: [
    { name: "B-747", counter: 0 },
    { name: "A-380", counter: 0 },
    { name: "Learjet 85", counter: 0 },
    { name: "Concorde", counter: 0 },
    { name: "Airbus Beluga", counter: 0 }
  ]
};

let reducer = function(state = initialState, action) {
  switch (action.type) {
    case "update-counter":
      let airplanes = state.airplanes.map(airplane => {
        if (airplane.name === action.payload.name) {
          return {
            name: airplane.name,
            counter:
              airplane.counter + (action.payload.type === "increment" ? 1 : -1)
          };
        } else {
          return airplane;
        }
      });
      return { ...state, airplanes };
    default:
      return state;
  }
};

export { reducer };
