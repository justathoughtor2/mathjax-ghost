(function() {
    $(document).ready(function() {
        var text = document.documentElement.innerHTML;
        var mathjaxRegex = /$[\s\S]*$/gim,
            mathjaxRegex2 =/$$[\s\S]*$$/gim;
        $.getScript('https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured', function() {
            console.log('Loaded MathJax!');
            MathJax.Hub.Config({tex2jax: {inlineMath: [ ["$","$"] ], displayMath: [ ["$$", "$$"] ]}});
            MathJax.Hub.Configured();
            console.log('Configured MathJax!');
            text = text.replace(mathjaxRegex, function (match, n, content) {
                return MathJax.Hub.Queue(["Typeset", MathJax.Hub, match]);
            });
            
            text = text.replace(mathjaxRegex2, function (match, n, content) {
                return MathJax.Hub.Queue(["Typeset", MathJax.Hub, match]);
            });
            console.log('Replaced MathJax!');
        });
    });
})();