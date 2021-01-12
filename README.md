# Pretius Chart Export
Pretius Chart Export is a simple plugin that enables users to export Oracle APEX charts to PNG file just with two clicks.

The plugin uses SaveSvgAsPng (https://github.com/exupero/saveSvgAsPng) and jQuery Context Menu (https://github.com/swisnl/jQuery-contextMenu) libraries.

## Table of Contents
- [Preview](#preview)
- [License](#license)
- [Features at glance](#features-at-glance)
- [Roadmap](#roadmap)
- [Installation](#installation)
  - [Installation procedure](#installation-procedure)
- [Usage guide & Demo application](#usage-guide-demo-application)
- [Free support](#free-support)
  - [Bug reporting and change requests](#bug-reporting-and-change-requests)
  - [Implementation issues](#implementation-issues)
- [Become a contributor](#become-a-contributor)
- [Comercial support](#comercial-support)
- [Changelog](#changelog)
- [Known issues](#known-issues)
- [About Author](#about-author)
- [About Pretius](#about-pretius)

## Preview
![](images/pretius_chart_export_preview.gif?raw=true)

## License
MIT

## Roadmap
* [ ] Support for Internet Explorer browser
* [ ] Possibility to customize SaveSvgAsPng library options
* [ ] Possibility to export charts using APEX buttons
* [ ] Support for other Oracle JET components (like Gantts, Gauges, Thematic Maps etc.)

## Installation

### Installation procedure
To successfully install/update the plugin follow those steps:
1. Install the plugin file `dynamic_action_plugin_com_pretius_apex_chart_export.sql` using Oracle APEX plugin import wizard

## Usage guide & Demo application

1. Set `Static ID` for chart regions
1. Create new dynamic action
  * Set `Event` to `Page Load`
  * Go to `True actions`
1. Create new `True action`
1. Change Action to `Pretius APEX Chart Export [Plug-In]`
1. Set `Fire On Page Load` to `Yes` (if it's not set)
1. Save, run the page and test chart export by right clicking on the chart and the 'Save as PNG' menu item

Please be aware that exported file name depends on chart region static ID. 

### Demo application
Check plugin configuration and use cases in our [Live Demo](https://apex.oracle.com/pls/apex/krybicki/r/pretius-apex-chart-export)

## Free support
Pretius provides free support for the plugins at the GitHub platform. 
We monitor raised issues, prepare fixes, and answer your questions. However, please note that we deliver the plug-ins free of charge, and therefore we will not always be able to help you immediately. 

Interested in better support? 
* [Become a contributor!](#become-a-contributor) We always prioritize the issues raised by our contributors and fix them for free.
* [Consider comercial support.](#comercial-support) Options and benefits are described in the chapter below.

### Bug reporting and change requests
Have you found a bug or have an idea of additional features that the plugin could cover? Firstly, please check the Roadmap and Known issues sections. If your case is not on the lists, please open an issue on a GitHub page following these rules:
* issue should contain login credentials to the application at apex.oracle.com where the problem is reproduced;
* issue should include steps to reproduce the case in the demo application;
* issue should contain description about its nature.

### Implementation issues
If you encounter a problem during the plug-in implementation, please check out our demo application. We do our best to describe each possible use case precisely. If you can not find a solution or your problem is different, contact us: apex-plugins@pretius.com.

## Become a contributor!
We consider our plugins as genuine open source products, and we encourage you to become a contributor. Help us improve plugins by fixing bugs and developing extra features. Comment one of the opened issues or register a new one, to let others know what you are working on. When you finish, create a new pull request. We will review your code and add the changes to the repository.

By contributing to this repository, you help to build a strong APEX community. We will prioritize any issues raised by you in this and any other plugins.

## Comercial support
We are happy to share our experience for free, but we also realize that sometimes response time, quick implementation, SLA, and instant release for the latest version are crucial. That’s why if you need extended support for our plug-ins, please contact us at apex-plugins@pretius.com.
We offer:
* enterprise-level assistance;
* support in plug-ins implementation and utilization;
* dedicated contact channel to our developers;
* SLA at the level your organization require;
* priority update to next APEX releases and features listed in the roadmap.

## Changelog

### 1.0
Initial release

## Known issues
-

## About Author
Author            | Github                                       | Twitter                                       | E-mail
------------------|----------------------------------------------|-----------------------------------------------|----------------------------------------------------
Kamil Rybicki | [@rybickik](https://github.com/rybickik) | [@rybicki_k](https://twitter.com/rybicki_k) | krybicki@pretius.com

## About Pretius
Pretius Sp. z o.o. Sp. K.

Pretius is a software company specialized in Java-based and low-code applications, with a dedicated team of over 25 Oracle APEX developers.
Members of our APEX team are technical experts, have excellent communication skills, and work directly with end-users / business owners of the software. Some of them are also well-known APEX community members, winners of APEX competitions, and speakers at international conferences.
We are the authors of the translate-apex.com project and some of the best APEX plug-ins available at the apex.world.
We are located in Poland, but working globally. If you need the APEX support, contact us right now.

Address | Website | E-mail
--------|---------|-------
Żwirki i Wigury 16A, 02-092 Warsaw, Poland | [http://www.pretius.com](http://www.pretius.com) | [office@pretius.com](mailto:office@pretius.com)