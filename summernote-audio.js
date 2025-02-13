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
                            tooltip: "Insert Audio",
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
                           <p>Select Audio File:</p>
                           <input type="file" class="note-audio-file form-control" accept="audio/*">
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
                            let $audioInput = self.$dialog.find(".note-audio-file");
                            $audioInput.val(""); // Kosongkan input saat dialog dibuka

                            self.showAudioDialog().then(function (audioFile) {
                                   ui.hideDialog(self.$dialog);
                                   if (audioFile) {
                                          let reader = new FileReader();
                                          reader.onload = function (e) {
                                                 let base64Audio = e.target.result;
                                                 let audioHTML = `<audio controls><source src="${base64Audio}" type="${audioFile.type}"></audio>`;
                                                 context.invoke("editor.restoreRange");
                                                 context.invoke("editor.focus");
                                                 context.invoke("editor.pasteHTML", audioHTML);
                                          };
                                          reader.readAsDataURL(audioFile); // Konversi ke Base64
                                   }
                                   $audioInput.val(""); // Kosongkan input setelah insert
                            });
                     };

                     self.showAudioDialog = function () {
                            return $.Deferred(function (deferred) {
                                   let $insertBtn = self.$dialog.find(".note-audio-btn");
                                   let $audioInput = self.$dialog.find(".note-audio-file");

                                   ui.onDialogShown(self.$dialog, function () {
                                          context.triggerEvent("dialog.shown");
                                          $insertBtn.click(function (e) {
                                                 e.preventDefault();
                                                 let file = $audioInput[0].files[0];
                                                 if (file) {
                                                        deferred.resolve(file);
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
