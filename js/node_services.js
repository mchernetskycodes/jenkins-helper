var NodeServices = (function () {
  "use strict";

  var lastInterval = undefined;

  function start() {
    StorageService.addStorageListener(storageChange);
    StorageService.getOptions(function (options) {
      refreshNodeStatus(options.nodeRefreshTime)
    });
  }

  function refreshNodeStatus(refreshTime) {
    if (lastInterval !== undefined) {
      window.clearInterval(lastInterval)
    }
    lastInterval = window.setInterval("NodeServices.queryNodeStatus()", refreshTime * 3600 * 1000)
  }

  function storageChange(changes) {
    if (StorageService.keyForOptions in changes) {
      // 设置改变
      console.log('changes', changes);
      var newRefreshTime = changes[StorageService.keyForOptions].newValue.nodeRefreshTime;
      // refreshTime 变更
      if (changes[StorageService.keyForOptions].oldValue === undefined
        || newRefreshTime !== changes[StorageService.keyForOptions].oldValue.nodeRefreshTime) {
        refreshNodeStatus(newRefreshTime)
      }
    }
  }

  function queryNodeStatus() {
    console.log('queryNodeStatus', 'queryNodeStatus');
    StorageService.getNodeStatus(function (result) {
      for (var jenkinsUrl in result) {
        // console.log('node', result[jenkinsUrl]);
        if (!result[jenkinsUrl].hasOwnProperty('monitoredNodes')) {
          continue
        }
        (function (url) {
          // console.log('url', url);
          var jsonUrl = url + 'computer/api/json';
          fetch(jsonUrl).then(function (res) {
            if (res.ok) {
              return res.json();
            } else {
              return Promise.reject(res);
            }
          }).then(function (data) {
            var computers = data.computer;
            for (var i = 0; i < computers.length; i++) {
              var displayName = computers[i].displayName;
              if (!result[url]['monitoredNodes'].hasOwnProperty(displayName)) {
                continue
              }
              var nodeUrl = url + 'computer/' + displayName + '/';
              if (displayName === 'master') {
                nodeUrl = url + 'computer/(master)/';
              }
              var workingDirectory = 'N/A';
              var remainingDiskSpace = 'N/A';
              var responseTime = 'N/A';
              var offline = computers[i].offline;
              if (!offline) {
                workingDirectory = computers[i].monitorData['hudson.node_monitors.DiskSpaceMonitor'].path;
                var size = computers[i].monitorData['hudson.node_monitors.DiskSpaceMonitor'].size;
                remainingDiskSpace = (size / 1024.0 / 1024.0 / 1024.0).toFixed(2) + ' GB';
                responseTime = computers[i].monitorData['hudson.node_monitors.ResponseTimeMonitor'].average + 'ms';
              }
              var diskSpaceThreshold = result[url]['monitoredNodes'][displayName]['diskSpaceThreshold'];
              checkDiskSpace(displayName, remainingDiskSpace, diskSpaceThreshold);

              result[url]['monitoredNodes'][displayName] = {
                nodeUrl,
                workingDirectory,
                remainingDiskSpace,
                responseTime,
                monitoring: true,
                diskSpaceThreshold,
                offline
              };
              result[url].status = 'ok';
              StorageService.saveNodeStatus(result, function () {
              })
            }
          }).catch(function (e) {
            console.error("获取数据失败", e);
            result[url].status = 'error';
            StorageService.saveNodeStatus(result, function () {
            })
          });
        })(jenkinsUrl)
      }
    })
  }

  function checkDiskSpace(displayName, remainingDiskSpace, diskSpaceThreshold) {
    if (remainingDiskSpace === 'N/A') {
      chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: 'img/computer48.png',
        title: displayName,
        message: 'Node offline',
      }, function (notificationId) {
        console.log('checkDiskSpace notifications', notificationId)
      });
    } else {
      remainingDiskSpace = parseInt(remainingDiskSpace.replace('GB', '').trim());
      if (remainingDiskSpace <= diskSpaceThreshold) {
        chrome.notifications.create(null, {
          type: 'basic',
          iconUrl: 'img/computer48.png',
          title: displayName,
          message: 'Insufficient disk space, please clean up in time',
        }, function (notificationId) {
          console.log('checkDiskSpace notifications', notificationId)
        });
      }
    }
  }

  return {
    start,
    queryNodeStatus,
  }
})();
