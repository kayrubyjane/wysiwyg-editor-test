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
      /* English */
      math: {
        dialogTitle: "Insert Math",
        tooltip: "Insert Math",
        pluginTitle: "Insert math",
        ok: "Insert",
        cancel: "Cancel",
        presets: "Presets",
      },
    },
  });
  $.extend($.summernote.options, {
    math: {
      icon: "<b>&sum;</b>",
      presets: [
        { name: "&#x2211;", latex: "\\sum", symbol: "&#x2211;" },
        { name: "&#x220F;", latex: "\\prod", symbol: "&#x220F;" },
        { name: "&#x2044;", latex: "\\frac{a}{b}", symbol: "&#x2044;" },
        { name: "&#x221A;", latex: "\\sqrt{x}", symbol: "&#x221A;" },
        { name: "&#x222B;", latex: "\\int", symbol: "&#x222B;" },
        { name: "&#x222C;", latex: "\\iint", symbol: "&#x222C;" },
        { name: "&#x222D;", latex: "\\iiint", symbol: "&#x222D;" },
        { name: "Limit", latex: "\\lim_{x\\to a}", symbol: "lim" },
        { name: "Sin", latex: "\\sin", symbol: "sin" },
        { name: "Cos", latex: "\\cos", symbol: "cos" },
        { name: "Tan", latex: "\\tan", symbol: "tan" },
        {
          name: "[ ]",
          latex: "\\begin{bmatrix}a & b\\\\ c & d\\end{bmatrix}",
          symbol: "[ ]",
        },
        { name: "( )", latex: "(a+b)", symbol: "( )" },
        { name: "&#x222A;", latex: "\\cup", symbol: "&#x222A;" },
        { name: "&#x2229;", latex: "\\cap", symbol: "&#x2229;" },
        { name: "&#x0302;", latex: "\\hat{x}", symbol: "&#x0302;" },
        { name: "&#x0305;", latex: "\\overline{AB}", symbol: "&#x0305;" },
      ],
    },
  });
  $.extend($.summernote.plugins, {
    math: function (context) {
      var self = this;
      var ui = $.summernote.ui;
      //var $note=context.layoutInfo.note;
      var $editor = context.layoutInfo.editor;
      //var $editable=context.layoutInfo.editable;
      var options = context.options;
      var lang = options.langInfo;

      self.events = {
        "summernote.keyup summernote.mouseup summernote.change summernote.scroll":
          () => {
            self.update();
          },
        "summernote.disable summernote.dialog.shown": () => {
          self.hide();
        },
      };

      context.memo("button.math", function () {
        let button = ui.button({
          contents: options.math.icon,
          container: false,
          tooltip: lang.math.tooltip,
          click: function (e) {
            context.invoke("editor.saveRange");
            context.invoke("math.show");
          },
        });
        return button.render();
      });

      self.initialize = function () {
        let $container = options.dialogsInBody ? $(document.body) : $editor;
        let presetsButtons = options.math.presets
          .map((preset) => {
            return `
                <button type="button" class="btn btn-light note-math-preset my-1" data-latex="${preset.latex}">
                  ${preset.name}
                </button>`;
          })
          .join(" ");
        let body = `<div class="form-group">
   
                       <p>Type <a href="https://khan.github.io/KaTeX/function-support.html" target=_blank">LaTeX markup</a> here: </p>
                       <p><input class="note-latex form-control" placeholder="Input Formula Here"></p>
                       <p>${lang.math.presets}: ${presetsButtons}</p>
                       <p>Preview: </p>
                       <div style="min-height:20px;"><span class="note-math-dialog"></span></div>
       
                       <script>
                       var $mathElement = $('.note-math-dialog');
                       var mathSpan = $mathElement;
                       var latexSpan = document.getElementsByClassName('note-latex');
   
                       
                       for(let i=0;i<latexSpan.length;i++){
                           latexSpan[i].addEventListener('keyup', renderMath);
                       }
   
                       function renderMath(){
                           let oldMath = mathSpan;
                           try {
                               for(let i=0;i<mathSpan.length;i++){
                                   katex.render(this.value, mathSpan[i]);
                               }
                           }
                           catch(e) { 
                               // KaTeX parse error while typing, to prevent rendered math from dissappearing while typing
                               // partially complete markup
                               for(let $i=0;i<mathSpan.length;i++){
                                   mathSpan.innerHTML = oldMath.innerHTML;
                               }
                           }
                       }
   
                       </script>
   
                       </div>`;
        self.$dialog = ui
          .dialog({
            title: lang.math.dialogTitle,
            body: body,
            footer:
              '<button class="btn btn-primary note-math-btn">' +
              lang.math.ok +
              "</button>",
          })
          .render()
          .appendTo($container);

        self.$popover = ui
          .popover({
            className: "note-math-popover",
          })
          .render()
          .appendTo(options.container);
        const $content = self.$popover.find(
          ".popover-content,.note-popover-content"
        );
        context.invoke("buttons.build", $content, ["math"]);

        self.bindPresetButtons();
      };

      self.bindPresetButtons = function () {
        $(document).on("click", ".note-math-preset", function () {
          let latex = $(this).data("latex");
          let $latexInput = self.$dialog.find(".note-latex");

          // Menambahkan teks baru tanpa menghapus teks yang sudah ada sebelumnya
          let existingLatex = $latexInput.val();
          $latexInput.val(existingLatex + latex).trigger("keyup");

          // Update preview
          let $mathSpan = self.$dialog.find(".note-math-dialog");
          try {
            katex.render($latexInput.val(), $mathSpan[0]);
          } catch (e) {
            $mathSpan.text("Error rendering formula");
          }
        });
      };


      self.hasMath = function (node) {
        return node && $(node).hasClass("note-math");
      };

      self.isOnMath = function (range) {
        const ancestor = $.summernote.dom.ancestor(range.sc, self.hasMath);
        return (
          !!ancestor &&
          ancestor === $.summernote.dom.ancestor(range.ec, self.hasMath)
        );
      };

      self.update = function () {
        // Prevent focusing on editable when invoke('code') is executed
        if (!context.invoke("editor.hasFocus")) {
          self.hide();
          return;
        }

        const rng = context.invoke("editor.getLastRange");
        if (rng.isCollapsed() && self.isOnMath(rng)) {
          const node = $.summernote.dom.ancestor(rng.sc, self.hasMath);
          const latex = $(node).find(".note-latex");

          if (latex.text().length !== 0) {
            self.$popover.find("button").html(latex.text());
            const pos = $.summernote.dom.posFromPlaceholder(node);
            self.$popover.css({
              display: "block",
              left: pos.left,
              top: pos.top,
            });
          } else {
            self.hide();
          }
        } else {
          self.hide();
        }
      };

      self.hide = function () {
        self.$popover.hide();
      };

      self.destroy = function () {
        ui.hideDialog(this.$dialog);
        self.$dialog.remove();
        self.$popover.remove();
      };

      self.bindEnterKey = function ($input, $btn) {
        $input.on("keypress", function (event) {
          if (event.keyCode === 13) $btn.trigger("click");
        });
      };

      self.bindLabels = function () {
        self.$dialog.find(".form-control:first").focus().select();
        self.$dialog.find("label").on("click", function () {
          $(this).parent().find(".form-control:first").focus();
        });
      };

      self.show = function () {
        let $mathSpan = self.$dialog.find(".note-math-dialog");
        let $latexSpan = self.$dialog.find("#note-latex");

        let $selectedMathNode = self.getSelectedMath();

        if ($selectedMathNode === null) {
          // reset the dialog input and math
          $mathSpan.empty();
          $latexSpan.val("");
        } else {
          // edit the selected math node
          // get the hidden LaTeX markup from the selected math node
          let hiddenLatex = $selectedMathNode.find(".note-latex").text();
          $latexSpan.val(hiddenLatex);
          katex.render(hiddenLatex, $mathSpan[0]);
        }

        let mathInfo = {}; // not used

        self.showMathDialog(mathInfo).then(function (mathInfo) {
          ui.hideDialog(self.$dialog);
          let $mathNodeClone = $mathSpan.clone();
          let $latexNode = $("<span>");
          $latexNode
            .addClass("note-latex")
            .css("display", "none")
            .text($latexSpan.val())
            .appendTo($mathNodeClone);

          // So we don't pick up the dialog node when selecting math nodes in the editor
          $mathNodeClone.removeClass("note-math-dialog").addClass("note-math");

          // Restore range agar tidak menghapus formula sebelumnya
          context.invoke("editor.restoreRange");
          context.invoke("editor.focus");

          let mathHTML = `<span class="note-math" contenteditable="false">${$mathSpan.html()}
      <span class="note-latex" style="display:none;">${$latexSpan.val()}</span>
  </span>&nbsp;<span class="note-math-placeholder">&#8203;</span>`;
          context.invoke("editor.pasteHTML", mathHTML);

          if ($selectedMathNode === null) {
            context.invoke("editor.pasteHTML", $mathNodeClone[0]);
          } else {
            if ($.trim($latexNode.html()) === "") {
              $selectedMathNode.remove();
            } else {
              $selectedMathNode.html($mathNodeClone.html());
            }
          }
        });
      };

      self.showMathDialog = function (editorInfo) {
        return $.Deferred(function (deferred) {
          let $editBtn = self.$dialog.find(".note-math-btn");
          ui.onDialogShown(self.$dialog, function () {
            context.triggerEvent("dialog.shown");
            $editBtn.click(function (e) {
              e.preventDefault();
              self.$dialog.find(".note-latex").val("");
              deferred.resolve({});
            });
            self.bindEnterKey($editBtn);
            self.bindLabels();
          });
          ui.onDialogHidden(self.$dialog, function () {
            $editBtn.off("click");
            if (deferred.state() === "pending") deferred.reject();
          });
          ui.showDialog(self.$dialog);
        });
      };

      self.getSelectedMath = function () {
        let selection = window.getSelection();
        if (selection.rangeCount > 0) {
          let range = selection.getRangeAt(0);
          let selectedNode = range.commonAncestorContainer;

          // Jika elemen yang dipilih adalah bagian dari formula
          if ($(selectedNode).closest(".note-math").length > 0) {
            return $(selectedNode).closest(".note-math");
          }
        }
        return null;
      };
    },
  });
});