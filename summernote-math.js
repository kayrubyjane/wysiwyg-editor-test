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
        {
          category: "Operators",
          items: [
            { name: "&#x2211;", latex: "x^{n}" },
            { name: "&#x2211;", latex: "x_{n}" },
            { name: "&#x2211;", latex: "\\sum_{y}^{x}" },
            { name: "&#x2044;", latex: "\\frac{x}{y}" },
            { name: "&#x221A;", latex: "\\sqrt{x}" },
            { name: "&#x221A;", latex: "\\sqrt[n]{x}" },
            { name: "&#x222B;", latex: "\\int_{y}^{x}" },
            { name: "&#x222B;", latex: "\\infty" },
            { name: "&#x222B;", latex: "\\emptyset" },
            { name: "&#x222B;", latex: "\\equiv" },
            { name: "&#x222B;", latex: "\\#" },
          ]
        },
        {
          category: "Greeks",
          items: [
            { name: "&#x2211;", latex: "\\alpha" },
            { name: "&#x2211;", latex: "\\beta" },
            { name: "&#x2211;", latex: "\\gamma" },
            { name: "&#x2044;", latex: "\\delta" },
            { name: "&#x2044;", latex: "\\Delta" },
            { name: "&#x221A;", latex: "\\epsilon" },
            { name: "&#x221A;", latex: "\\varepsilon" },
            { name: "&#x220F;", latex: "\\zeta" },
            { name: "&#x222B;", latex: "\\theta" },
            { name: "&#x222C;", latex: "\\vartheta" },
            { name: "&#x222D;", latex: "\\iota" },
            { name: "&#x222D;", latex: "\\kappa" },
            { name: "&#x222D;", latex: "\\lambda" },
            { name: "&#x222D;", latex: "\\mu" },
            { name: "&#x222D;", latex: "\\nu" },
            { name: "&#x222D;", latex: "\\xi" },
            { name: "&#x222D;", latex: "o" },
            { name: "&#x222D;", latex: "\\pi" },
            { name: "&#x222D;", latex: "\\varphi" },
            { name: "&#x222D;", latex: "\\rho" },
            { name: "&#x222D;", latex: "\\varrho" },
            { name: "&#x222D;", latex: "\\sigma" },
            { name: "&#x222D;", latex: "\\varsigma" },
            { name: "&#x222D;", latex: "\\tau" },
            { name: "&#x222D;", latex: "\\upsilon" },
            { name: "&#x222D;", latex: "\\phi" },
            { name: "&#x222D;", latex: "\\varphi" },
            { name: "&#x222D;", latex: "\\chi" },
            { name: "&#x222D;", latex: "\\psi" },
            { name: "&#x222D;", latex: "\\omega" },
          ]
        },
        {
          category: "Logics",
          items: [
            { name: "<", latex: "\\lt" },
            { name: ">", latex: "\\gt" },
            { name: ">", latex: "\\le" },
            { name: ">", latex: "\\ge" },
            { name: ">", latex: "\\leqslant" },
            { name: ">", latex: "\\geqslant" },
            { name: ">", latex: "\\nless" },
            { name: ">", latex: "\\ngtr" },
            { name: ">", latex: "\\nleq" },
            { name: ">", latex: "\\ngeq" },
            { name: ">", latex: "\\nleqslant" },
            { name: ">", latex: "\\ngeqslant" },
            { name: ">", latex: "\\neq" },
          ]
        },
        {
          category: "Functions",
          items: [
            { name: "Limit", latex: "\\in" },
            { name: "Limit", latex: "\\notin" },
            { name: "Limit", latex: "\\lim_{x\\to a}" },
            { name: "Sin", latex: "\\sin" },
            { name: "Cos", latex: "\\cos" },
            { name: "Tan", latex: "\\tan" },
          ]
        },
        {
          category: "Brackets",
          items: [
            { name: "[ ]", latex: "\\begin{bmatrix}a, b\\end{bmatrix}" },
            { name: "[ ]", latex: "\\begin{Bmatrix}a, b\\end{Bmatrix}" },
            { name: "( )", latex: "\\left(x+y \\right)" }
          ]
        },
        {
          category: "Matrices",
          items: [
            { name: "[ ]", latex: "\\begin{matrix} 1&  2&  3\\\\ 4&  5&  6\\\\ 7&  8& 9\\end{matrix}" },
            { name: "[ ]", latex: "\\begin{pmatrix} 1&  2&  3\\\\ 4&  5&  6\\\\ 7&  8& 9\\end{pmatrix}" },
            { name: "[ ]", latex: "\\begin{bmatrix} 1&  2&  3\\\\ 4&  5&  6\\\\ 7&  8& 9\\end{bmatrix}" },
            { name: "[ ]", latex: "\\begin{Bmatrix} 1&  2&  3\\\\ 4&  5&  6\\\\ 7&  8& 9\\end{Bmatrix}" },
            { name: "[ ]", latex: "\\begin{vmatrix} 1&  2&  3\\\\ 4&  5&  6\\\\ 7&  8& 9\\end{vmatrix}" },
            { name: "[ ]", latex: "\\begin{Vmatrix} 1&  2&  3\\\\ 4&  5&  6\\\\ 7&  8& 9\\end{Vmatrix}" },
          ]
        },
        {
          category: "Set Theory",
          items: [
            { name: "&#x220F;", latex: "\\prod_{y}^{x}" },
            { name: "&#x220F;", latex: "\\coprod_{y}^{x}" },
            { name: "&#x220F;", latex: "\\bigcup_{y}^{x}" },
            { name: "&#x220F;", latex: "\\bigcap_{y}^{x}" },
            { name: "&#x220F;", latex: "\\bigvee_{y}^{x}" },
            { name: "&#x220F;", latex: "\\bigwedge_{y}^{x}" },
            { name: "&#x220F;", latex: "\\bigoplus_{y}^{x}" },
            { name: "&#x220F;", latex: "\\bigotimes_{y}^{x}" },
            { name: "&#x220F;", latex: "\\bigsqcup_{y}^{x}" },
            { name: "&#x222A;", latex: "\\cup" },
            { name: "&#x2229;", latex: "\\cap" },
            { name: "&#x2229;", latex: "\\subset" },
            { name: "&#x2229;", latex: "\\subseteq" },
            { name: "&#x2229;", latex: "\\subsetneq" },
            { name: "&#x2229;", latex: "\\nsubseteq" },
            { name: "&#x2229;", latex: "\\bigtriangleup" },
            { name: "&#x2229;", latex: "\\bigtriangledown" },
            { name: "&#x2229;", latex: "\\bigcirc" },
            { name: "&#x2229;", latex: "\\triangleleft" },
            { name: "&#x2229;", latex: "\\triangleright" },
            { name: "&#x2229;", latex: "\\square" },
          ]
        },
        {
          category: "Arrows",
          items: [
            { name: "&#x220F;", latex: "\\gets" },
            { name: "&#x220F;", latex: "\\to" },
            { name: "&#x220F;", latex: "\\longleftarrow" },
            { name: "&#x220F;", latex: "\\longrightarrow" },
            { name: "&#x220F;", latex: "\\leftharpoonup" },
            { name: "&#x220F;", latex: "\\rightharpoonup" },
            { name: "&#x220F;", latex: "\\mapsto" },
            { name: "&#x220F;", latex: "\\longmapsto" },
            { name: "&#x220F;", latex: "\\longleftrightarrow" },
            { name: "&#x222A;", latex: "\\leftharpoondown" },
            { name: "&#x2229;", latex: "\\rightharpoondown" },
            { name: "&#x2229;", latex: "\\leftrightharpoons" },
            { name: "&#x2229;", latex: "\\rightleftharpoons" },
            { name: "&#x2229;", latex: "\\updownarrow" },
            { name: "&#x2229;", latex: "\\uparrow" },
            { name: "&#x2229;", latex: "\\downarrow" },
            { name: "&#x2229;", latex: "\\swarrow" },
            { name: "&#x2229;", latex: "\\searrow" },
            { name: "&#x2229;", latex: "\\upuparrows" },
            { name: "&#x2229;", latex: "\\curvearrowleft" },
            { name: "&#x2229;", latex: "\\curvearrowright" },
            { name: "&#x2229;", latex: "\\nearrow" },
            { name: "&#x2229;", latex: "\\rightrightarrows" },
            { name: "&#x2229;", latex: "\\circlearrowright" },
            { name: "&#x2229;", latex: "\\rightarrowtail" },
            { name: "&#x2229;", latex: "\\rightsquigarrow" },
            { name: "&#x2229;", latex: "\\looparrowright" },
            { name: "&#x2229;", latex: "\\nrightarrow" },
          ]
        },
        {
          category: "Decorations",
          items: [
            { name: "&#x0302;", latex: "\\acute{x}" },
            { name: "&#x0302;", latex: "\\grave{x}" },
            { name: "&#x0302;", latex: "\\tilde{x}" },
            { name: "&#x0302;", latex: "\\ddot{x}" },
            { name: "&#x0302;", latex: "\\bar{x}" },
            { name: "&#x0302;", latex: "\\hat{x}" },
            { name: "&#x0305;", latex: "\\overline{xy}" },
            { name: "&#x0305;", latex: "\\underline{xy}" },
            { name: "&#x0305;", latex: "\\overrightarrow{xy}" },
            { name: "&#x0305;", latex: "\\underrightarrow{xy}" },
            { name: "&#x0305;", latex: "\\widehat{xy}" },
            { name: "&#x0305;", latex: "\\widetilde{xy}" },
            { name: "&#x0305;", latex: "\\overbrace{xy}" },
            { name: "&#x0305;", latex: "\\underbrace{xy}" },
            { name: "&#x0305;", latex: "\\overset{xy}{ab}" },
            { name: "&#x0305;", latex: "\\underset{xy}{ab}" },
          ]
        }
      ]
    }
  });
  $.extend($.summernote.plugins, {
    math: function (context) {
      var self = this;
      var ui = $.summernote.ui;
      var $editor = context.layoutInfo.editor;
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

        function generateMathPresetTabs(presets) {
          let tabsNav = '<ul class="nav nav-tabs" role="tablist">';
          let tabsContent = '<div class="tab-content mt-2">';
          let first = true;

          presets.forEach((group, index) => {
            const tabId = 'math-tab-' + index;

            tabsNav += `
        <li class="nav-item">
          <a class="small nav-link ${first ? 'active' : ''}" data-toggle="tab" href="#${tabId}" role="tab">
            ${group.category}
          </a>
        </li>
      `;

            const buttons = group.items.map((item) => {
              const symbolButton = katex.renderToString(item.latex, { throwOnError: false })
              return `<button type="button" class="btn btn-primary note-math-preset my-1" data-latex="${item.latex}">
          ${symbolButton}
        </button>`}
            ).join(' ');

            tabsContent += `
        <div class="tab-pane fade ${first ? 'show active' : ''}" id="${tabId}" role="tabpanel">
          ${buttons}
        </div>
      `;

            first = false;
          });

          tabsNav += '</ul>';
          tabsContent += '</div>';
          return tabsNav + tabsContent;
        }

        let presetsTabsHtml = generateMathPresetTabs(options.math.presets);

        let body = `
    <div class="form-group">
      <p>${lang.math.presets}:</p>
      ${presetsTabsHtml}
      <p class="mt-3">Type <a href="https://khan.github.io/KaTeX/function-support.html" target="_blank">LaTeX markup</a> here:</p>
      <p><textarea class="note-latex form-control" row="5" placeholder="Input Formula Here"></textarea></p>
      <p>Font Size:</p>
      <p><input class="font-size-latex form-control" placeholder="Example: 10. Default 20" type="number"></p>
      <p>Preview:</p>
      <div class="p-2 rounded" style="width:100%; overflow:hidden; background: #e8e8e8"><span class="note-math-dialog"></span></div>
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
    </div>
  `;

        self.$dialog = ui
          .dialog({
            title: lang.math.dialogTitle,
            body: body,
            footer: '<button class="btn btn-primary note-math-btn">' + lang.math.ok + "</button>",
          })
          .render()
          .appendTo($container);

        self.$popover = ui
          .popover({ className: "note-math-popover" })
          .render()
          .appendTo(options.container);
        const $content = self.$popover.find(".popover-content,.note-popover-content");
        context.invoke("buttons.build", $content, ["math"]);

        self.bindPresetButtons();
      };


      self.bindPresetButtons = function () {
        self.$dialog.find('.note-math-preset').off('click').on('click', function () {
          const latex = $(this).data('latex');
          const $textarea = self.$dialog.find('.note-latex')[0]; // ambil DOM textarea

          if ($textarea) {
            const start = $textarea.selectionStart;
            const end = $textarea.selectionEnd;
            const textBefore = $textarea.value.substring(0, start);
            const textAfter = $textarea.value.substring(end);

            // sisipkan latex di posisi kursor
            $textarea.value = textBefore + latex + textAfter;

            // update cursor position setelah insert
            const newPos = start + latex.length;
            $textarea.selectionStart = $textarea.selectionEnd = newPos;

            // trigger event keyup untuk update preview
            $textarea.dispatchEvent(new Event('keyup'));
            $textarea.focus();
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
        let $fontSize = self.$dialog.find(".font-size-latex")

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

          let mathHTML = `<span style="font-size:${$fontSize.val() || 20}px" class="note-math" contenteditable="false">${$mathSpan.html()}
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
          self.$dialog.find(".font-size-latex").val("");
        });
      };

      self.getSelectedMath = function () {
        let selection = window.getSelection();
        if (selection.rangeCount > 0) {
          let range = selection.getRangeAt(0);
          let selectedNode = range.commonAncestorContainer;

          if ($(selectedNode).closest(".note-math").length > 0) {
            return $(selectedNode).closest(".note-math");
          }
        }
        return null;
      };
    },
  });
});