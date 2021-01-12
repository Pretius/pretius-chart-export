var pretiusChartExport = function () {
  "use strict";

  return {
    exportChart: function() {
      apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT | Export Chart function start');

      $.contextMenu({
        selector: ".oj-chart svg",
        items: {
          save: {
            name: "Save as PNG",
            className: 'context-menu-icon fa fa-save',
            callback: function(itemKey, opt, rootMenu){
              apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT Save menu item callback | itemKey', itemKey, 'opt', opt, 'rootMenu', rootMenu);

              var svgTriggeringElement = opt.$trigger[0];
              var spinner = _showSpinner(svgTriggeringElement);
              
              var ojChartOptions = _getModifiedChartOptions(svgTriggeringElement);
              var ojChartElementNew = _renderNewHiddenChart(ojChartOptions);

              $(ojChartElementNew).ojChart('whenReady').then(function() { 
                var chartName = _getChartName(svgTriggeringElement);
                var svgChartNew = $(ojChartElementNew).find('svg').first()[0];
                var saveSvgAsPngOptions = _getSaveSvgAsPngOptions(svgChartNew);
                

                saveSvgAsPng(svgChartNew, chartName, saveSvgAsPngOptions).then(function() {
                  apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT SaveSvgASPng | The chart has been exported with success.');
                  
                }).catch(function(error) {
                  apex.debug.error("An error has occured while saving SVG to PNG: ", error);

                  _showErrorMessage("An error has occured while chart exporting. Please try again later or contact administrator.");

                }).finally(function() {
                  _removeSpinner(spinner);
                  ojChartElementNew.remove();

                });
              }).catch(function(error) {
                apex.debug.error("An error has occured while waiting for JET chart to be ready: ", error);

                _showErrorMessage("An error has occured while chart exporting. Please try again later or contact administrator.");

                _removeSpinner(spinner);
                  ojChartElementNew.remove();

              });
        
              return true; 
            }
          }
        }
      });
    }
  }

  function _showErrorMessage(message) {
    apex.message.clearErrors();
    apex.message.showErrors({
          type:       "error",
          location:   "page",
          message:    message,
          unsafe:     false
    });
  }

  function _getSaveSvgAsPngOptions(svgChart) {
    apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT _getSaveSvgAsPngOptions | svgChart', svgChart);

    var saveSvgAsPngOptions = {
      backgroundColor: 'white',
      encoderOptions: 1, 
      encoderType: 'image/png'
    };

    return saveSvgAsPngOptions;
  }

  function _getModifiedChartOptions(svgChart) {
    apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT _getModifiedChartOptions | svgChart', svgChart);

    var ojChartOptions = $(svgChart).closest('.oj-chart').ojChart('option');
    ojChartOptions.legend.scrolling = 'off';

    return ojChartOptions;
  }

  function _renderNewHiddenChart(ojChartOptions) {
    apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT _renderNewHiddenChart | ojChartOptions', ojChartOptions);

    $('.t-Body').append('<div class="apex-chart-cloned-region"></div>');
    var chartContainerNew = $('.apex-chart-cloned-region');

    $(chartContainerNew).css('visibility', 'hidden');
    $(chartContainerNew).css('width', ojChartOptions._width);
    $(chartContainerNew).css('height', ojChartOptions._height);
    $(chartContainerNew).css('position', 'absolute');
    $(chartContainerNew).css('right', '-100%');

    $(chartContainerNew).ojChart(ojChartOptions);

    return chartContainerNew;
  }

  function _getChartName(svgChart) {
    apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT _getChartName | svgChart', svgChart);

    var chartName = $(svgChart).closest('.oj-chart').attr('id').replace('_jet', '');

    if (chartName === undefined) {
      chartName = $(svgChart).closest('div').attr('id');

      if (chartName === undefined) {
        chartName = 'CHART';
      }
    };

    return chartName + '.png';
  }

  function _showSpinner(svgChart) {
    apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT _showSpinner | svgChart', svgChart);
    
    var elementForSpinner = $(svgChart).closest("div");

    if (elementForSpinner.length > 0) {
      var spinner = apex.util.showSpinner(elementForSpinner);
    }

    return spinner;
  }

  function _removeSpinner(spinner) {
    apex.debug.info('# COM.PRETIUS.APEX.CHART_EXPORT _removeSpinner | Spinner', spinner);

    if (spinner !== undefined) {
      spinner.remove();        
    }
  }

}()