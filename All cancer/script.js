$( function() {
  $('#sortable').sortable({
      connectWith: ".column",
      handle: ".widget-header",
      cancel: ".fa-cog",
      placeholder: "portlet-placeholder ui-corner-all"
   });
  $('#sortable').disableSelection();
});