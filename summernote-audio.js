(function (factory) {
       if (typeof define === "function" && define.amd) {
              define(["jquery"], factory);
       } else if (typeof module === "object" && module.exports) {
              module.exports = factory(require("jquery"));
       } else {
              factory(window.jQuery);
       }
})(function ($) {
       $.extend(true, $.summernote.lang, {
              "en-US": {
                     audio: {
                            dialogTitle: "Insert Audio",
                            tooltip: "Audio",
                            pluginTitle: "Insert audio",
                            ok: "Insert",
                            cancel: "Cancel",
                     },
              },
       });

       $.extend($.summernote.options, {
              audio: {
                     icon: "🎵",
              },
       });

       $.extend($.summernote.plugins, {
              audio: function (context) {
                     var self = this;
                     var ui = $.summernote.ui;
                     var $editor = context.layoutInfo.editor;
                     var options = context.options;
                     var lang = options.langInfo;

                     context.memo("button.audio", function () {
                            let button = ui.button({
                                   contents: options.audio.icon,
                                   container: false,
                                   tooltip: lang.audio.tooltip,
                                   click: function () {
                                          context.invoke("editor.saveRange");
                                          self.show();
                                   },
                            });
                            return button.render();
                     });

                     self.initialize = function () {
                            let $container = options.dialogsInBody ? $(document.body) : $editor;
                            let body = `<div class="form-group">
                           <p>Enter Audio URL:</p>
                           <input type="text" class="note-audio-url form-control" placeholder="https://example.com/audio.mp3">
                         </div>`;

                            self.$dialog = ui
                                   .dialog({
                                          title: lang.audio.dialogTitle,
                                          body: body,
                                          footer:
                                                 '<button class="btn btn-primary note-audio-btn">' +
                                                 lang.audio.ok +
                                                 "</button>",
                                   })
                                   .render()
                                   .appendTo($container);
                     };

                     self.show = function () {
                            let $audioInput = self.$dialog.find(".note-audio-url");
                            $audioInput.val(""); // Kosongkan input saat dialog dibuka

                            self.showAudioDialog().then(function (audioURL) {
                                   ui.hideDialog(self.$dialog);
                                   if (audioURL) {
                                          let audioHTML = `<audio controls><source src="${audioURL}" type="audio/mpeg"></audio>`;
                                          context.invoke("editor.restoreRange");
                                          context.invoke("editor.focus");
                                          context.invoke("editor.pasteHTML", audioHTML);
                                   }
                                   $audioInput.val(""); // Kosongkan input setelah insert
                            });
                     };

                     self.showAudioDialog = function () {
                            return $.Deferred(function (deferred) {
                                   let $insertBtn = self.$dialog.find(".note-audio-btn");
                                   let $audioInput = self.$dialog.find(".note-audio-url");

                                   ui.onDialogShown(self.$dialog, function () {
                                          context.triggerEvent("dialog.shown");
                                          $insertBtn.click(function (e) {
                                                 e.preventDefault();
                                                 let url = $audioInput.val().trim();
                                                 if (url) {
                                                        deferred.resolve(url);
                                                 } else {
                                                        deferred.reject();
                                                 }
                                          });
                                   });

                                   ui.onDialogHidden(self.$dialog, function () {
                                          $insertBtn.off("click");
                                          if (deferred.state() === "pending") deferred.reject();
                                   });

                                   ui.showDialog(self.$dialog);
                            });
                     };
              },
       });
});
