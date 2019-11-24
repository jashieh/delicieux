export const START_LOAD = "START_LOAD";
export const STOP_LOAD = "STOP_LOAD";


export const startLoad = load => ({
  type: START_LOAD,
  load
});

export const stopLoad = () => ({
  type: STOP_LOAD
});
