var getSlotByName=function(r){return function(t){if(!r)return[];var e=Array.isArray(t)?t:[t];if(t.includes("default")){e.push("")}var n=Array.from(r.children);var a=n.filter((function(r){return e.includes(r.slot)}));return a}};export{getSlotByName as g};
//# sourceMappingURL=slotSelectors-df70e421.js.map