let btnShowLabels = document.getElementById("btnShowLabels");


btnShowLabels.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showLabels,
  });
});


function showLabels() {
  Array.from(document.querySelectorAll('label[for^="FormField-"]')).forEach(node => {
    node.innerText = node.htmlFor.replace('FormField-', '');
  })
}