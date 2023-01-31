// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
mondayWork();

const wrapAdjective = function (star = "*") {
  return function (adjictive = "a hard worker") {
    return `You are ${star}${adjictive}${star}!`;
  };
};
