// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
      actions: [
        new chrome.declarativeContent.ShowPageAction()
      ]
    }]);
  });
});



chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Coloring ' + tab.url);

  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="#7100d3";' +
        'let a = document.getElementsByClassName(\'DraftEditor-editorContainer\');' +
        'console.log(a);'
  });

});
