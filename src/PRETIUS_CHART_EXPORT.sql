CREATE OR REPLACE PACKAGE PRETIUS_CHART_EXPORT AS

  FUNCTION f_render(
    p_dynamic_action in apex_plugin.t_dynamic_action,
    p_plugin         in apex_plugin.t_plugin 
  ) return apex_plugin.t_dynamic_action_render_result;

  FUNCTION f_ajax( 
    p_dynamic_action IN apex_plugin.t_dynamic_action,
    p_plugin         IN apex_plugin.t_plugin
  ) return apex_plugin.t_dynamic_action_ajax_result;

END PRETIUS_CHART_EXPORT;

/

CREATE OR REPLACE PACKAGE BODY PRETIUS_CHART_EXPORT AS

  FUNCTION f_render(
    p_dynamic_action in apex_plugin.t_dynamic_action,
    p_plugin         in apex_plugin.t_plugin
  ) return apex_plugin.t_dynamic_action_render_result
  IS  
  
    v_css varchar2(4000);
    v_result apex_plugin.t_dynamic_action_render_result;
  
  BEGIN
    IF apex_application.g_debug THEN
      apex_plugin_util.debug_dynamic_action (
        p_plugin         => p_plugin,
        p_dynamic_action => p_dynamic_action
      );
    END IF;

    apex_css.add_file (
      p_name      => 'jquery.contextMenu',
      p_directory => p_plugin.file_prefix,
      p_version   => null
    );  
  
    apex_javascript.add_library (
      p_name      => 'jquery.contextMenu',
      p_directory => p_plugin.file_prefix,
      p_version   => null
    );

    apex_javascript.add_library (
      p_name      => 'jquery.ui.position',
      p_directory => p_plugin.file_prefix,
      p_version   => null
    );

    apex_javascript.add_library (
      p_name      => 'saveSvgAsPng',
      p_directory => p_plugin.file_prefix,
      p_version   => null
    );

    apex_javascript.add_library (
      p_name      => 'pretius.apex.chartExport',
      p_directory => p_plugin.file_prefix,
      p_version   => null
    );
    
  
  -- Budowanie V_RESULT
    v_result.javascript_function := 'pretiusChartExport.exportChart()';
    v_result.ajax_identifier     := apex_plugin.get_ajax_identifier;
  
    return v_result;
  END f_render;

  FUNCTION f_ajax( 
    p_dynamic_action IN apex_plugin.t_dynamic_action,
    p_plugin         IN apex_plugin.t_plugin
  ) return apex_plugin.t_dynamic_action_ajax_result
  AS
    v_result           apex_plugin.t_dynamic_action_ajax_result;
  BEGIN
    null;

  END f_ajax;

END PRETIUS_CHART_EXPORT;
