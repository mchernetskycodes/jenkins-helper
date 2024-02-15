# Jenkins Helper   

[![Version](https://img.shields.io/github/release/liying2008/jenkins-helper?label=version)](https://github.com/liying2008/jenkins-helper/releases)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/users/lkjoiakaidioklnfdejmnoebfbjcbemh?label=chrome%20users)](https://chrome.google.com/webstore/detail/jenkins-helper/lkjoiakaidioklnfdejmnoebfbjcbemh)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/lkjoiakaidioklnfdejmnoebfbjcbemh?label=chrome%20stars)](https://chrome.google.com/webstore/detail/jenkins-helper/lkjoiakaidioklnfdejmnoebfbjcbemh)
[![Mozilla Add-on](https://img.shields.io/amo/users/jenkins.helper@duduhuo.cc?label=firefox%20users)](https://addons.mozilla.org/addon/jenkins-helper/)
[![Mozilla Add-on](https://img.shields.io/amo/stars/jenkins.helper@duduhuo.cc?label=firefox%20stars)](https://addons.mozilla.org/addon/jenkins-helper/)
[![license](https://img.shields.io/github/license/liying2008/jenkins-helper.svg)](https://github.com/liying2008/jenkins-helper/blob/master/LICENSE)


A browser extension that significantly enhances work efficiency for Chrome/Firefox.

## Download Link

### Install Online

[Chrome Web Store](https://chrome.google.com/webstore/detail/jenkins-helper/lkjoiakaidioklnfdejmnoebfbjcbemh) / [Firefox Add-ons](https://addons.mozilla.org/addon/jenkins-helper/) / [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/pelamneechdnppiophlmioibcjkidifc)

### Download file for offline installation

[https://github.com/liying2008/jenkins-helper/releases](https://github.com/liying2008/jenkins-helper/releases)

**Extension offline installation method：**

- **Chrome**：Open `chrome://extensions` page, open **Developer Mode**, restart the browser (`chrome://restart`), re-enter the `chrome://extensions` page, and drag the crx file to the current page.
- **Firefox**：Just drag the xpi file to any page in the browser.


## Features

This extension can:

1. **Job Monitoring**: Monitor the build status of Jenkins Job and display notifications after the build is completed. Provides a "monitor" interface to view the build status of the Job of interest at any time. Provides a filtering function to filter jobs based on build results.

![Monitor](screenshots/monitor.png)

> Note: The frequency of status updates and notification frequency can be changed in the settings page. The default is to update the status every 60 seconds and display a notification after each build.


2. **Build parameter viewing**: Under each Build page and its sub-pages, you can quickly and easily view build information and build parameters. It also provides buttons to view the last/next build parameters, and you can directly download the complete build log to the local.

![Parameters](screenshots/params.png)

> Note: There is data only under the build page and its subpages, other pages display “**No Data**”：`http://127.0.0.1:8080/jenkins/job/Pipeline2/4/` is to build the page,`http://127.0.0.1:8080/jenkins/job/Pipeline2/4/console` is a subpage.
> **Support the Blue Ocean page**。


3. **Node Disk Space Monitoring**: Monitor the disk space of the Jenkins node. If the remaining space of the node is less than or equal to the given threshold, an alert will pop up. It also provides a "Monitor" page to view the remaining space of the node at any time.

![Node Monitor](screenshots/node_monitor.png)

> Note: The frequency of status updates can be changed in the settings page. The default is to update the status every 2 hours, and the latest status will be automatically checked every time the browser is started.


4. **Address bar smart search**: Enter **`jk`** in the address bar, press the <kbd>Space</kbd> key to enter the Jenkins Job smart search mode, enter the job name to quickly match the corresponding Jenkins Job link.

![Omnibox](screenshots/omnibox.png)

> Note: To use this function, you need to configure **Address Bar Intelligent Search (Omnibox Intelligent Search)** in advance on the settings page.
5. **Job Statistics**: Statistics of Job's **running nodes** / **regular build schedule** / **whether it is disabled** / **whether concurrency is allowed** and other information.

![Job Statistics](screenshots/job_statistics.png)

> Note: To use this function, you need to configure **Job Statistics Settings** on the settings page in advance.

6. **Parameter Staging and Recovery**: Two buttons will be generated at the bottom of the **Build/Rebuild** page, namely **Stash Parameters** and **Recover Parameters**. Click **Stash Parameters* * You can save the parameter values filled in on the current page. Click **Recover Parameters** to restore the last saved parameter values to the current page.

![Params Stash And Recover](screenshots/params_stash_and_recover.png)

> Note: Each newly saved parameter will overwrite the previously saved parameter, that is, **Stash Parameters** will only save **one** parameter value.
> Supports cross-Job and cross-Jenkins use, that is, the parameters saved by A Job can be restored to B Job.


7. **Customized Settings**: You can make some personalized settings according to your unique needs.

![Settings](screenshots/settings.png)

> Note: After changing settings, remember to click **Save Settings** at the bottom of the page to apply the changes.


## Tips

1. In order for the extension to smoothly access the Jenkins API without relying on the user's login status on the Jenkins website, it is recommended to configure the Jenkins API Token in the settings interface, as shown in the following figure:

![Jenkins Token Settings](screenshots/jenkins_token_settings.png)


## License

[MIT LICENSE](LICENSE)
