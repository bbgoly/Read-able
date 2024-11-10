// chrome.extension.onStartup.addListener(() => {
//     console.log("service worker ran on startup")
// })
//     chrome.contextMenus.create({
//         id: 'openSidePanel',
//         title: 'Open Read-Able side panel',
//         contexts: ['all']
//     });
//     console.log("created")
// })

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//     console.log("a")
//     if (info.menuItemId === 'openSidePanel') {
//         console.log("b")
//         chrome.sidePanel.open({ tabId: tab.id })
//         chrome.sidePanel.setOptions({
//             tabId: tab.id,
//             path: './../../index.html',
//             enabled: true
//         })
//     }
// })

// chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((err) => console.error(err))

chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert("test")
        }
    })
})