# mathjax-ghost
Adds MathJax support to Ghost editor. This currently requires a development install of Ghost (i.e. a cloned and/or forked Git repository).

## Setup
1. Run `bower install mathjax-ghost`.
2. Add the line `app.import('bower_components/mathjax-ghost/mathjax.js');` to the `// 'dem Scripts` section of `core/client/ember-cli-build.js`.
3. Add the required inline code to the default.hbs template file. (See below.)
4. Run `grunt init`
5. Run `npm start`
6. ???
7. Profit!!

## Don't forget to add the required inline code to your default.hbs template file!!
If you fail to do this, the code will render MathJax in your editor, but not in your actual front-facing blog!

### Almost at the end of the head section, just before `{{ghost_head}}`...
```
script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured"></script>
<script type="text/javascript">
    MathJax.Hub.Config({tex2jax: {inlineMath: [ ["$","$"] ], displayMath: [ ["$$", "$$"] ]}});
</script>
```

### At the very end of the file, just before `</body>`...
```
<script type="text/javascript">
    MathJax.Hub.Configured();
</script>
```
