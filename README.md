# generator-ng-component

> [Yeoman](http://yeoman.io) generator


## Bloom & Wild's app generator

It's highly unlikely this fork will be useful for people outside [Bloom & Wild](http://bloomandwild.com). Check out the fork source for a more generic Angular generator.

### Yeoman Generators

Install `yo` and `generator-ng-component` from npm:

```
$ npm install -g yo generator-bw-ng-component
```

Finally, initiate the generator:

```
$ yo bw-ng-component
```

### Generate a directive
This will automatically prefix with bw-directive-name

```
$ yo bw-ng-component:directive directive-name
```
Will output:

directive-name.directive.js
directive-name.directive.spec.js
directive-name.jade
directive-name.scss

## License

MIT
